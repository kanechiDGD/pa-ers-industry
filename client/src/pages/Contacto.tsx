import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

export default function Contacto() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensaje enviado exitosamente. Nos pondremos en contacto pronto.");
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
            Volver al Inicio
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            ¿Tienes preguntas? Nos encantaría saber de ti. Contacta con nosotros y nos pondremos en contacto lo antes posible.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle>Teléfono</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:6305384741" className="text-primary hover:underline font-semibold">
                  630-538-4741
                </a>
                <p className="text-sm text-muted-foreground mt-2">Disponible de lunes a viernes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:office@pa-ers-industry.com" className="text-primary hover:underline font-semibold break-all">
                  office@pa-ers-industry.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">Responderemos en 24 horas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Ubicación</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">1650 N Randall Rd</p>
                <p className="font-semibold">Aurora, Illinois 60506</p>
                <p className="text-sm text-muted-foreground mt-2">Visítanos en persona</p>
              </CardContent>
            </Card>
          </div>

          {/* Hours */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Horario de Atención</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Horario Regular</h3>
                  <ul className="space-y-2 text-sm">
                    <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                    <li>Sábado: 10:00 AM - 2:00 PM</li>
                    <li>Domingo: Cerrado</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Emergencias</h3>
                  <p className="text-sm text-muted-foreground">
                    Para emergencias fuera del horario, por favor llama al 630-538-4741 y deja un mensaje. Nos pondremos en contacto lo antes posible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(630) 538-4741"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu situación..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Chat CTA */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Prefieres Chat Anónimo?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Inicia una consulta gratuita y anónima sin proporcionar tus datos personales.
            </p>
            <Button size="lg" onClick={() => navigate("/#chat")}>
              Iniciar Chat Anónimo
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-white">
        <div className="container text-center text-sm text-slate-400">
          <p>© 2024 PA & ERS INDUSTRY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
