import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Droplets, Wind, Wrench, Home as HomeIcon, DoorOpen, Flame, FileText, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import { toast } from "sonner";

export default function Servicios() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      icon: HomeIcon,
      title: "Daños en Techos",
      description: "Evaluamos daños por granizo, viento y desgaste. Identificamos daños ocultos que las aseguradoras pasan por alto.",
      benefits: "Obtén la compensación completa para reparación o reemplazo de techo",
      details: [
        "Inspección completa de estructura y materiales",
        "Identificación de daños ocultos bajo tejas",
        "Aplicación de códigos de construcción actualizados",
        "Negociación con aseguradoras para cobertura completa",
        "Documentación profesional con fotos y reportes",
      ],
    },
    {
      icon: Shield,
      title: "Daños en Revestimiento",
      description: "Impactos en siding, grietas y desprendimientos por eventos climáticos.",
      benefits: "Asegura que tu hogar esté protegido con revestimiento nuevo",
      details: [
        "Evaluación de daños cosméticos y estructurales",
        "Negociación de reemplazos completos vs. reparaciones",
        "Documentación fotográfica profesional",
        "Seguimiento de reclamos hasta aprobación",
        "Coordinación con contratistas de confianza",
      ],
    },
    {
      icon: Droplets,
      title: "Daños por Agua",
      description: "Mitigación de agua, filtraciones y daños por sistemas de drenaje dañados.",
      benefits: "Previene daño por moho y obtén compensación por daños internos",
      details: [
        "Identificación de fuentes de agua y filtraciones",
        "Evaluación de daños estructurales y contenido",
        "Documentación de moho y daños por humedad",
        "Negociación de cobertura completa de mitigación",
        "Coordinación con especialistas en remediación",
      ],
    },
    {
      icon: Wind,
      title: "Daños por Tormentas",
      description: "Evaluación completa de daños causados por vientos fuertes y eventos climáticos extremos.",
      benefits: "Recupera la máxima compensación por daños de tormenta",
      details: [
        "Inspección de múltiples áreas afectadas",
        "Documentación de daños relacionados con la tormenta",
        "Negociación de reclamos complejos y múltiples",
        "Representación en disputas con aseguradoras",
        "Aplicación de evidencia meteorológica",
      ],
    },
    {
      icon: Wrench,
      title: "Daños Interiores",
      description: "Daños por agua, moho y problemas estructurales internos.",
      benefits: "Obtén compensación completa para reparaciones interiores",
      details: [
        "Evaluación de sistemas internos (plomería, HVAC)",
        "Identificación de daño por moho y humedad",
        "Documentación técnica de daños estructurales",
        "Negociación de reparaciones y reemplazos completos",
        "Coordinación con contratistas especializados",
      ],
    },
    {
      icon: DoorOpen,
      title: "Daños en Garajes",
      description: "Puertas, techos y estructuras de garaje afectadas por eventos externos.",
      benefits: "Asegura cobertura completa de daños en garaje",
      details: [
        "Evaluación de puertas automáticas y sistemas",
        "Inspección de techos y paredes de garaje",
        "Documentación de daños estructurales",
        "Negociación de cobertura completa",
        "Coordinación de reparaciones y reemplazos",
      ],
    },
    {
      icon: Flame,
      title: "Daños por Incendio",
      description: "Evaluación completa de daños por incendio, humo y daños de extinción.",
      benefits: "Maximiza tu reclamo por daños totales de incendio",
      details: [
        "Evaluación de daños estructurales por fuego",
        "Identificación de daños por humo y hollín",
        "Documentación de daños de agua por extinción",
        "Negociación de cobertura de contenido y estructura",
        "Coordinación con especialistas en restauración",
      ],
    },
    {
      icon: FileText,
      title: "Asesoramiento de Pólizas",
      description: "Revisión y explicación detallada de tu póliza de seguros.",
      benefits: "Entiende tu cobertura y maximiza tus beneficios",
      details: [
        "Revisión completa de términos y cobertura",
        "Explicación de exclusiones y limitaciones",
        "Identificación de coberturas adicionales",
        "Asesoramiento sobre reclamaciones futuras",
        "Representación en disputas de cobertura",
      ],
    },
    {
      icon: AlertCircle,
      title: "Evaluación de Reclamos Negados",
      description: "Revisión de reclamos rechazados y apelación profesional.",
      benefits: "Revierte negaciones y obtén la compensación que mereces",
      details: [
        "Análisis de razones de negación",
        "Recopilación de evidencia adicional",
        "Preparación de apelaciones profesionales",
        "Negociación con aseguradoras",
        "Representación legal si es necesario",
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Solicitud enviada exitosamente. Nos pondremos en contacto pronto.");
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Ofrecemos evaluación profesional y negociación experta para todos los tipos de daños cubiertos por pólizas de seguros. Nuestro equipo de ajustadores certificados identifica daños que las aseguradoras frecuentemente pasan por alto.
          </p>

          {/* Detailed Service Explanations Section */}
          <div className="mb-16 bg-slate-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">¿Cómo Funcionan Nuestros Servicios?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Evaluación Profesional</h3>
                <p className="text-muted-foreground mb-4">
                  Realizamos una inspección completa y detallada de los daños. Utilizamos herramientas especializadas y técnicas profesionales para identificar daños visibles y ocultos que las aseguradoras podrían pasar por alto. Documentamos todo con fotos de alta calidad y reportes técnicos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Negociación Experta</h3>
                <p className="text-muted-foreground mb-4">
                  Nuestros ajustadores públicos certificados negocian directamente con las aseguradoras. Utilizamos códigos de construcción, estándares de la industria y precedentes legales para asegurar que recibas la compensación completa y justa que mereces.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Documentación Completa</h3>
                <p className="text-muted-foreground mb-4">
                  Preparamos reportes profesionales con fotografía, mediciones, estimaciones de reparación y análisis de daños. Esta documentación es crucial para respaldar tu reclamo y asegurar aprobación de la aseguradora.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">Representación Legal</h3>
                <p className="text-muted-foreground mb-4">
                  Si es necesario, te representamos en disputas con la aseguradora. Tenemos relaciones establecidas con abogados especializados en seguros para proteger tus derechos y maximizar tu compensación.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-8">Servicios Específicos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-sm font-semibold text-green-700">✓ {service.benefits}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">¿Necesitas Ayuda?</h2>
            <Card>
              <CardHeader>
                <CardTitle>Solicita una Evaluación Gratuita</CardTitle>
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
                    <label className="block text-sm font-medium mb-2">Tipo de Daño</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Selecciona un tipo de daño</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
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
                    {isSubmitting ? "Enviando..." : "Solicitar Evaluación Gratuita"}
                  </Button>
                </form>
              </CardContent>
            </Card>
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
