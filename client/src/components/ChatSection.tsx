import { useState, useEffect, useRef } from "react";
import { MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  sender: "client" | "admin";
  timestamp: Date;
}

interface Conversation {
  pin: string;
  messages: Message[];
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
}

// Generate 6-digit PIN
const generatePin = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Load conversation from localStorage
const loadConversation = (pinCode: string): Conversation | null => {
  const stored = localStorage.getItem(`chat_${pinCode}`);
  if (stored) {
    const conv = JSON.parse(stored);
    // Convert string timestamps to Date objects
    conv.messages = conv.messages.map((m: any) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    }));
    return conv;
  }
  return null;
};

// Save conversation to localStorage
const saveConversation = (conv: Conversation) => {
  localStorage.setItem(`chat_${conv.pin}`, JSON.stringify(conv));
  // Maintain list of all PINs
  const allPins = JSON.parse(localStorage.getItem("all_chat_pins") || "[]");
  if (!allPins.includes(conv.pin)) {
    allPins.push(conv.pin);
    localStorage.setItem("all_chat_pins", JSON.stringify(allPins));
  }
};

// Start new chat
const startNewChat = (): { pin: string; conversation: Conversation } => {
  const newPin = generatePin();
  const newConv: Conversation = {
    pin: newPin,
    messages: [],
  };
  return { pin: newPin, conversation: newConv };
};

export default function ChatSection() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"initial" | "chat" | "contact">("initial");
  const [pin, setPin] = useState<string>("");
  const [existingPin, setExistingPin] = useState<string>("");
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const copy = {
    en: {
      heroTitle: "Have Questions?",
      heroBullets: [
        "Completely Free",
        "100% Anonymous - No personal data required",
        "No Commitment - Ask and get guidance",
      ],
      heroBody:
        "Start an anonymous and confidential consultation. We will assign a PIN so you can continue the conversation anytime, from any device.",
      heroCta: "Start Chat",
      initialTitle: "Start Consultation",
      initialBody: "Choose whether to start a new consultation or continue an existing one",
      initialStart: "Start Chat",
      initialOr: "OR",
      pinPlaceholder: "Enter your 6-digit PIN",
      pinContinue: "Continue with PIN",
      contactTitle: "Contact Information",
      contactBody: "Optional - Share your details so we can reach you more easily",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      phoneLabel: "Phone",
      phonePlaceholder: "555-1234",
      save: "Save",
      skip: "Skip",
      chatTitle: "Consultation Chat",
      chatBody: "Write your questions and we will respond soon",
      pinLabel: "Your PIN:",
      noMessages: "No messages yet. Write your first question below.",
      messagePlaceholder: "Write your question here...",
      sendMessage: "Send Message",
      saveContact: "Save Contact",
      toasts: {
        invalidPin: "Please enter a valid PIN",
        pinNotFound: "PIN not found. Check and try again.",
        pinCopied: "PIN copied to clipboard",
        messageSent: "Message sent. You will receive a response soon.",
        contactSaved: "Contact information saved",
      },
    },
    es: {
      heroTitle: "Tienes Preguntas?",
      heroBullets: [
        "Completamente Gratuito",
        "100% Anonimo - No necesitas darnos tus datos",
        "Sin Compromiso - Solo consulta y obten asesoramiento",
      ],
      heroBody:
        "Inicia una consulta anonima y confidencial. Te asignaremos un PIN para que puedas continuar la conversacion en cualquier momento, desde cualquier dispositivo.",
      heroCta: "Iniciar Chat",
      initialTitle: "Iniciar Consulta",
      initialBody: "Elige si quieres iniciar una nueva consulta o continuar con una existente",
      initialStart: "Iniciar Chat",
      initialOr: "O",
      pinPlaceholder: "Ingresa tu PIN de 6 digitos",
      pinContinue: "Continuar con PIN",
      contactTitle: "Informacion de Contacto",
      contactBody: "Opcional - Proporciona tus datos para que podamos contactarte mas facilmente",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      phoneLabel: "Telefono",
      phonePlaceholder: "555-1234",
      save: "Guardar",
      skip: "Omitir",
      chatTitle: "Chat de Consulta",
      chatBody: "Escribe tus preguntas y te responderemos pronto",
      pinLabel: "Tu PIN:",
      noMessages: "No hay mensajes aun. Escribe tu primera pregunta abajo.",
      messagePlaceholder: "Escribe tu pregunta aqui...",
      sendMessage: "Enviar Mensaje",
      saveContact: "Guardar Contacto",
      toasts: {
        invalidPin: "Por favor ingresa un PIN valido",
        pinNotFound: "PIN no encontrado. Verifica e intenta nuevamente.",
        pinCopied: "PIN copiado al portapapeles",
        messageSent: "Mensaje enviado. Recibiras una respuesta pronto.",
        contactSaved: "Informacion de contacto guardada",
      },
    },
  };

  const text = copy[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation?.messages]);

  const handleStartNewChat = () => {
    const { pin: newPin, conversation: newConv } = startNewChat();
    setPin(newPin);
    setConversation(newConv);
    saveConversation(newConv);
    setStep("chat");
  };

  const handleContinueWithPin = () => {
    if (!existingPin.trim()) {
      toast.error(text.toasts.invalidPin);
      return;
    }
    const conv = loadConversation(existingPin.trim());
    if (conv) {
      setPin(existingPin.trim());
      setConversation(conv);
      setStep("chat");
    } else {
      toast.error(text.toasts.pinNotFound);
    }
  };

  const copyPin = () => {
    navigator.clipboard.writeText(pin);
    setCopied(true);
    toast.success(text.toasts.pinCopied);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendMessage = () => {
    if (!message.trim() || !conversation) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: "client",
      timestamp: new Date(),
    };

    const updatedConv = {
      ...conversation,
      messages: [...conversation.messages, newMessage],
    };

    setConversation(updatedConv);
    saveConversation(updatedConv);
    setMessage("");
    toast.success(text.toasts.messageSent);
  };

  const saveContactInformation = () => {
    if (!conversation) return;

    const updatedConv = {
      ...conversation,
      clientName: contactInfo.name || undefined,
      clientEmail: contactInfo.email || undefined,
      clientPhone: contactInfo.phone || undefined,
    };

    setConversation(updatedConv);
    saveConversation(updatedConv);
    setStep("chat");
    toast.success(text.toasts.contactSaved);
  };

  if (!isOpen) {
    return (
      <section id="chat" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-y-2 border-primary/20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{text.heroTitle}</h2>
            <div className="bg-white border-2 border-green-500 rounded-lg p-6 mb-6 shadow-md">
              {text.heroBullets.map((bullet) => (
                <p key={bullet} className="text-lg text-foreground mb-3 font-semibold text-green-700">
                  OK - {bullet}
                </p>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-8">{text.heroBody}</p>
            <Button size="lg" onClick={() => setIsOpen(true)} className="w-full sm:w-auto text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-6 w-6" />
              {text.heroCta}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (step === "initial") {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>{text.initialTitle}</CardTitle>
            <CardDescription>{text.initialBody}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button size="lg" onClick={handleStartNewChat} className="w-full bg-green-600 hover:bg-green-700">
              {text.initialStart}
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">{text.initialOr}</span>
              </div>
            </div>
            <div className="space-y-2">
              <Input
                placeholder={text.pinPlaceholder}
                value={existingPin}
                onChange={(e) => setExistingPin(e.target.value)}
                maxLength={6}
              />
              <Button variant="outline" onClick={handleContinueWithPin} className="w-full">
                {text.pinContinue}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === "contact") {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>{text.contactTitle}</CardTitle>
            <CardDescription>{text.contactBody}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{text.nameLabel}</label>
              <Input
                placeholder={text.namePlaceholder}
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{text.emailLabel}</label>
              <Input
                type="email"
                placeholder={text.emailPlaceholder}
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{text.phoneLabel}</label>
              <Input
                type="tel"
                placeholder={text.phonePlaceholder}
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={saveContactInformation} className="flex-1">
                {text.save}
              </Button>
              <Button variant="outline" onClick={() => setStep("chat")} className="flex-1">
                {text.skip}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Chat step
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{text.chatTitle}</CardTitle>
              <CardDescription>{text.chatBody}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4 p-3 bg-primary/10 rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">{text.pinLabel}</p>
              <p className="text-lg font-mono font-bold text-primary">{pin}</p>
            </div>
            <Button size="sm" variant="outline" onClick={copyPin}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Messages Area */}
          <div className="h-64 overflow-y-auto space-y-3 p-4 bg-muted/30 rounded-lg">
            {conversation?.messages.length === 0 ? (
              <p className="text-center text-muted-foreground text-sm">{text.noMessages}</p>
            ) : (
              conversation?.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "client"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <Textarea
              placeholder={text.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <div className="flex gap-2">
              <Button onClick={sendMessage} disabled={!message.trim()} className="flex-1">
                {text.sendMessage}
              </Button>
              <Button variant="outline" onClick={() => setStep("contact")}>
                {text.saveContact}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
