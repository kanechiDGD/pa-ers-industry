import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contacto() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copy = {
    en: {
      back: "Back to Home",
      title: "Contact",
      subtitle: "Have questions? We would love to hear from you. Contact us and we will get back to you as soon as possible.",
      phoneTitle: "Phone",
      phoneNote: "Available Monday to Friday",
      emailTitle: "Email",
      emailNote: "We will respond within 24 hours",
      locationTitle: "Location",
      locationNote: "Visit us in person",
      hoursTitle: "Business Hours",
      regularHours: "Regular Hours",
      regularHoursItems: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      emergencies: "Emergencies",
      emergenciesBody:
        "For emergencies outside business hours, please call 630-538-4741 and leave a message. We will get back to you as soon as possible.",
      formTitle: "Send Us a Message",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      message: "Message",
      messagePlaceholder: "Tell us about your situation...",
      sending: "Sending...",
      send: "Send Message",
      chatTitle: "Prefer Anonymous Chat?",
      chatBody: "Start a free and anonymous consultation without sharing personal information.",
      chatCta: "Start Anonymous Chat",
      toastSuccess: "Message sent successfully. We will contact you soon.",
    },
    es: {
      back: "Volver al Inicio",
      title: "Contacto",
      subtitle: "Tienes preguntas? Nos encantaria saber de ti. Contacta con nosotros y nos pondremos en contacto lo antes posible.",
      phoneTitle: "Telefono",
      phoneNote: "Disponible de lunes a viernes",
      emailTitle: "Email",
      emailNote: "Responderemos en 24 horas",
      locationTitle: "Ubicacion",
      locationNote: "Visitanos en persona",
      hoursTitle: "Horario de Atencion",
      regularHours: "Horario Regular",
      regularHoursItems: [
        "Lunes - Viernes: 9:00 AM - 6:00 PM",
        "Sabado: 10:00 AM - 2:00 PM",
        "Domingo: Cerrado",
      ],
      emergencies: "Emergencias",
      emergenciesBody:
        "Para emergencias fuera del horario, por favor llama al 630-538-4741 y deja un mensaje. Nos pondremos en contacto lo antes posible.",
      formTitle: "Envianos un Mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      phone: "Telefono",
      message: "Mensaje",
      messagePlaceholder: "Cuentanos sobre tu situacion...",
      sending: "Enviando...",
      send: "Enviar Mensaje",
      chatTitle: "Prefieres Chat Anonimo?",
      chatBody: "Inicia una consulta gratuita y anonima sin proporcionar tus datos personales.",
      chatCta: "Iniciar Chat Anonimo",
      toastSuccess: "Mensaje enviado exitosamente. Nos pondremos en contacto pronto.",
    },
  };

  const text = copy[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(text.toastSuccess);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            {text.back}
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.title}</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">{text.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle>{text.phoneTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:6305384741" className="text-primary hover:underline font-semibold">
                  630-538-4741
                </a>
                <p className="text-sm text-muted-foreground mt-2">{text.phoneNote}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>{text.emailTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:office@pa-ers-industry.com" className="text-primary hover:underline font-semibold break-all">
                  office@pa-ers-industry.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">{text.emailNote}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>{text.locationTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">1650 N Randall Rd</p>
                <p className="font-semibold">Aurora, Illinois 60506</p>
                <p className="text-sm text-muted-foreground mt-2">{text.locationNote}</p>
              </CardContent>
            </Card>
          </div>

          {/* Hours */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>{text.hoursTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">{text.regularHours}</h3>
                  <ul className="space-y-2 text-sm">
                    {text.regularHoursItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">{text.emergencies}</h3>
                  <p className="text-sm text-muted-foreground">{text.emergenciesBody}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{text.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.name}</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={text.namePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{text.email}</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={text.emailPlaceholder}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{text.phone}</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(630) 538-4741"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{text.message}</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={text.messagePlaceholder}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? text.sending : text.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Chat CTA */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{text.chatTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{text.chatBody}</p>
            <Button size="lg" onClick={() => navigate("/#chat")}>
              {text.chatCta}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
