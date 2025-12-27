import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Send, User, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Header from "@/components/Header";
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

export default function AdminChat() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedPin, setSelectedPin] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const copy = {
    en: {
      conversations: "Conversations",
      activeCount: (count: number) => `${count} active conversation${count !== 1 ? "s" : ""}`,
      emptyConversations: "No conversations yet",
      newBadge: "New",
      messagesCount: (count: number) => `${count} message${count !== 1 ? "s" : ""}`,
      noMessages: "No messages in this conversation",
      clientInfo: {
        name: "Name",
        email: "Email",
        phone: "Phone",
      },
      replyPlaceholder: "Write your reply...",
      sendReply: "Send Reply",
      selectConversation: "Select a conversation to view details",
      logout: "Session closed",
      replySent: "Reply sent to client",
    },
    es: {
      conversations: "Conversaciones",
      activeCount: (count: number) => `${count} conversacion${count !== 1 ? "es" : ""} activa${count !== 1 ? "s" : ""}`,
      emptyConversations: "No hay conversaciones aun",
      newBadge: "Nuevo",
      messagesCount: (count: number) => `${count} mensaje${count !== 1 ? "s" : ""}`,
      noMessages: "No hay mensajes en esta conversacion",
      clientInfo: {
        name: "Nombre",
        email: "Email",
        phone: "Telefono",
      },
      replyPlaceholder: "Escribe tu respuesta...",
      sendReply: "Enviar Respuesta",
      selectConversation: "Selecciona una conversacion para ver los detalles",
      logout: "Sesion cerrada",
      replySent: "Respuesta enviada al cliente",
    },
  };

  const text = copy[language];

  // Check authentication
  useEffect(() => {
    const isAuth = sessionStorage.getItem("admin_auth");
    if (!isAuth) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Load conversations
  const loadConversations = () => {
    const allPins = JSON.parse(localStorage.getItem("all_chat_pins") || "[]");
    const convs: Conversation[] = [];

    allPins.forEach((pin: string) => {
      const stored = localStorage.getItem(`chat_${pin}`);
      if (stored) {
        const conv = JSON.parse(stored);
        // Convert string timestamps to Date objects
        conv.messages = conv.messages.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
        convs.push(conv);
      }
    });

    // Sort by most recent message
    convs.sort((a, b) => {
      const aTime = a.messages.length > 0 ? a.messages[a.messages.length - 1].timestamp.getTime() : 0;
      const bTime = b.messages.length > 0 ? b.messages[b.messages.length - 1].timestamp.getTime() : 0;
      return bTime - aTime;
    });

    setConversations(convs);
  };

  useEffect(() => {
    loadConversations();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedPin, conversations]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    toast.success(text.logout);
    navigate("/admin/login");
  };

  const sendReply = () => {
    if (!replyText.trim() || !selectedPin) return;

    const conv = conversations.find((c) => c.pin === selectedPin);
    if (!conv) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: replyText.trim(),
      sender: "admin",
      timestamp: new Date(),
    };

    const updatedConv = {
      ...conv,
      messages: [...conv.messages, newMessage],
    };

    localStorage.setItem(`chat_${selectedPin}`, JSON.stringify(updatedConv));
    setReplyText("");
    loadConversations();
    toast.success(text.replySent);
  };

  const selectedConversation = conversations.find((c) => c.pin === selectedPin);

  const hasNewMessages = (conv: Conversation): boolean => {
    if (conv.messages.length === 0) return false;
    const lastMessage = conv.messages[conv.messages.length - 1];
    return lastMessage.sender === "client";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onLogout={handleLogout} />

      <div className="flex-1 container py-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle>{text.conversations}</CardTitle>
              <CardDescription>{text.activeCount(conversations.length)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto space-y-2 p-4">
              {conversations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">{text.emptyConversations}</p>
                </div>
              ) : (
                conversations.map((conv) => (
                  <div
                    key={conv.pin}
                    onClick={() => setSelectedPin(conv.pin)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedPin === conv.pin ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm">{conv.pin}</span>
                        {hasNewMessages(conv) && (
                          <Badge variant="destructive" className="text-xs">
                            {text.newBadge}
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {conv.messages.length}
                      </Badge>
                    </div>

                    {conv.clientName && (
                      <p className="text-sm font-medium flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {conv.clientName}
                      </p>
                    )}

                    {conv.messages.length > 0 && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {conv.messages[conv.messages.length - 1].timestamp.toLocaleString()}
                      </div>
                    )}
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Conversation Details */}
          <Card className="lg:col-span-2 overflow-hidden flex flex-col">
            {selectedConversation ? (
              <>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>PIN: {selectedConversation.pin}</CardTitle>
                      <CardDescription>{text.messagesCount(selectedConversation.messages.length)}</CardDescription>
                    </div>
                  </div>

                  {/* Client Info */}
                  {(selectedConversation.clientName ||
                    selectedConversation.clientEmail ||
                    selectedConversation.clientPhone) && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg space-y-1 text-sm">
                      {selectedConversation.clientName && (
                        <p>
                          <span className="font-medium">{text.clientInfo.name}:</span>{" "}
                          {selectedConversation.clientName}
                        </p>
                      )}
                      {selectedConversation.clientEmail && (
                        <p>
                          <span className="font-medium">{text.clientInfo.email}:</span>{" "}
                          {selectedConversation.clientEmail}
                        </p>
                      )}
                      {selectedConversation.clientPhone && (
                        <p>
                          <span className="font-medium">{text.clientInfo.phone}:</span>{" "}
                          {selectedConversation.clientPhone}
                        </p>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto space-y-3 p-4">
                  {selectedConversation.messages.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="text-sm">{text.noMessages}</p>
                    </div>
                  ) : (
                    selectedConversation.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "admin" ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.sender === "admin"
                              ? "bg-muted text-muted-foreground"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {msg.timestamp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Reply Input */}
                <div className="border-t p-4">
                  <div className="space-y-2">
                    <Textarea
                      placeholder={text.replyPlaceholder}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows={3}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          sendReply();
                        }
                      }}
                    />
                    <Button onClick={sendReply} disabled={!replyText.trim()} className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      {text.sendReply}
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>{text.selectConversation}</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
