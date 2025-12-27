import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Shield,
  Droplets,
  Wind,
  Wrench,
  Home as HomeIcon,
  DoorOpen,
  Flame,
  FileText,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Servicios() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copy = {
    en: {
      back: "Back to Home",
      title: "Our Services",
      intro:
        "We offer professional evaluation and expert negotiation for all types of damages covered by insurance policies. Our certified adjusters identify damages insurers often overlook.",
      howTitle: "How Our Services Work",
      howBlocks: [
        {
          title: "Professional Evaluation",
          body:
            "We perform a complete and detailed inspection of damages. We use specialized tools and professional techniques to identify visible and hidden issues. We document everything with high-quality photos and technical reports.",
        },
        {
          title: "Expert Negotiation",
          body:
            "Our certified public adjusters negotiate directly with insurers. We use building codes, industry standards, and legal precedents to secure the full and fair compensation you deserve.",
        },
        {
          title: "Complete Documentation",
          body:
            "We prepare professional reports with photography, measurements, repair estimates, and damage analysis. This documentation is crucial to support your claim and obtain approval.",
        },
        {
          title: "Legal Representation",
          body:
            "If necessary, we represent you in disputes with the insurer. We work with specialized insurance attorneys to protect your rights and maximize compensation.",
        },
      ],
      servicesTitle: "Specific Services",
      helpTitle: "Need Help?",
      formTitle: "Request a Free Evaluation",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      damageType: "Damage Type",
      damagePlaceholder: "Select a damage type",
      message: "Message",
      messagePlaceholder: "Tell us about your situation...",
      sending: "Sending...",
      submit: "Request Free Evaluation",
      toastSuccess: "Request sent successfully. We will contact you soon.",
      services: [
        {
          icon: HomeIcon,
          title: "Roof Damage",
          description:
            "We evaluate hail, wind, and wear damage. We identify hidden damage insurers overlook.",
          benefits: "Get full compensation for roof repair or replacement",
          details: [
            "Complete inspection of structure and materials",
            "Identification of hidden damage under shingles",
            "Application of updated building codes",
            "Negotiation with insurers for full coverage",
            "Professional documentation with photos and reports",
          ],
        },
        {
          icon: Shield,
          title: "Siding Damage",
          description: "Impacts, cracks, and detachment from weather events.",
          benefits: "Ensure your home is protected with new siding",
          details: [
            "Evaluation of cosmetic and structural damage",
            "Negotiation for full replacement vs repairs",
            "Professional photo documentation",
            "Claim follow-up until approval",
            "Coordination with trusted contractors",
          ],
        },
        {
          icon: Droplets,
          title: "Water Damage",
          description: "Water mitigation, leaks, and damage from drainage issues.",
          benefits: "Prevent mold damage and obtain compensation for interior damage",
          details: [
            "Identification of water sources and leaks",
            "Assessment of structural and contents damage",
            "Documentation of mold and moisture damage",
            "Negotiation for full mitigation coverage",
            "Coordination with remediation specialists",
          ],
        },
        {
          icon: Wind,
          title: "Storm Damage",
          description: "Complete evaluation of damage from strong winds and extreme events.",
          benefits: "Recover maximum compensation for storm damage",
          details: [
            "Inspection of multiple affected areas",
            "Documentation of storm-related damage",
            "Negotiation of complex or multiple claims",
            "Representation in disputes with insurers",
            "Use of meteorological evidence",
          ],
        },
        {
          icon: Wrench,
          title: "Interior Damage",
          description: "Water damage, mold, and internal structural issues.",
          benefits: "Get full compensation for interior repairs",
          details: [
            "Evaluation of internal systems (plumbing, HVAC)",
            "Identification of mold and moisture damage",
            "Technical documentation of structural damage",
            "Negotiation of full repairs and replacements",
            "Coordination with specialized contractors",
          ],
        },
        {
          icon: DoorOpen,
          title: "Garage Damage",
          description: "Garage doors, roofs, and structures affected by external events.",
          benefits: "Ensure full coverage for garage damage",
          details: [
            "Evaluation of automatic doors and systems",
            "Inspection of garage roofs and walls",
            "Documentation of structural damage",
            "Negotiation for full coverage",
            "Repair and replacement coordination",
          ],
        },
        {
          icon: Flame,
          title: "Fire Damage",
          description: "Complete evaluation of fire, smoke, and extinguishing damage.",
          benefits: "Maximize your claim for total fire damage",
          details: [
            "Evaluation of structural fire damage",
            "Identification of smoke and soot damage",
            "Documentation of water damage from extinguishing",
            "Negotiation of contents and structure coverage",
            "Coordination with restoration specialists",
          ],
        },
        {
          icon: FileText,
          title: "Policy Guidance",
          description: "Detailed review and explanation of your insurance policy.",
          benefits: "Understand your coverage and maximize benefits",
          details: [
            "Full review of terms and coverage",
            "Explanation of exclusions and limitations",
            "Identification of additional coverages",
            "Guidance for future claims",
            "Representation in coverage disputes",
          ],
        },
        {
          icon: AlertCircle,
          title: "Denied Claim Evaluation",
          description: "Review of denied claims and professional appeal.",
          benefits: "Reverse denials and get the compensation you deserve",
          details: [
            "Analysis of denial reasons",
            "Collection of additional evidence",
            "Preparation of professional appeals",
            "Negotiation with insurers",
            "Legal representation if needed",
          ],
        },
      ],
    },
    es: {
      back: "Volver al Inicio",
      title: "Nuestros Servicios",
      intro:
        "Ofrecemos evaluacion profesional y negociacion experta para todos los tipos de danos cubiertos por polizas de seguros. Nuestro equipo identifica danos que las aseguradoras frecuentemente pasan por alto.",
      howTitle: "Como Funcionan Nuestros Servicios",
      howBlocks: [
        {
          title: "Evaluacion Profesional",
          body:
            "Realizamos una inspeccion completa y detallada de los danos. Usamos herramientas especializadas y tecnicas profesionales para identificar danos visibles y ocultos. Documentamos todo con fotos de alta calidad y reportes tecnicos.",
        },
        {
          title: "Negociacion Experta",
          body:
            "Nuestros ajustadores publicos certificados negocian directamente con las aseguradoras. Usamos codigos de construccion, estandares de la industria y precedentes legales para asegurar compensacion completa.",
        },
        {
          title: "Documentacion Completa",
          body:
            "Preparamos reportes profesionales con fotografia, mediciones, estimaciones de reparacion y analisis de danos. Esta documentacion es clave para respaldar tu reclamo.",
        },
        {
          title: "Representacion Legal",
          body:
            "Si es necesario, te representamos en disputas con la aseguradora. Trabajamos con abogados especializados para proteger tus derechos.",
        },
      ],
      servicesTitle: "Servicios Especificos",
      helpTitle: "Necesitas Ayuda?",
      formTitle: "Solicita una Evaluacion Gratuita",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      phone: "Telefono",
      damageType: "Tipo de Dano",
      damagePlaceholder: "Selecciona un tipo de dano",
      message: "Mensaje",
      messagePlaceholder: "Cuentanos sobre tu situacion...",
      sending: "Enviando...",
      submit: "Solicitar Evaluacion Gratuita",
      toastSuccess: "Solicitud enviada exitosamente. Nos pondremos en contacto pronto.",
      services: [
        {
          icon: HomeIcon,
          title: "Danos en Techos",
          description:
            "Evaluamos danos por granizo, viento y desgaste. Identificamos danos ocultos.",
          benefits: "Obten compensacion completa para reparacion o reemplazo de techo",
          details: [
            "Inspeccion completa de estructura y materiales",
            "Identificacion de danos ocultos bajo tejas",
            "Aplicacion de codigos de construccion actualizados",
            "Negociacion con aseguradoras para cobertura completa",
            "Documentacion profesional con fotos y reportes",
          ],
        },
        {
          icon: Shield,
          title: "Danos en Revestimiento",
          description: "Impactos en siding, grietas y desprendimientos por eventos climaticos.",
          benefits: "Asegura que tu hogar este protegido con revestimiento nuevo",
          details: [
            "Evaluacion de danos cosmeticos y estructurales",
            "Negociacion de reemplazos completos vs reparaciones",
            "Documentacion fotografica profesional",
            "Seguimiento de reclamos hasta aprobacion",
            "Coordinacion con contratistas de confianza",
          ],
        },
        {
          icon: Droplets,
          title: "Danos por Agua",
          description: "Mitigacion de agua, filtraciones y danos por drenaje.",
          benefits: "Previene dano por moho y obten compensacion por danos internos",
          details: [
            "Identificacion de fuentes de agua y filtraciones",
            "Evaluacion de danos estructurales y contenido",
            "Documentacion de moho y danos por humedad",
            "Negociacion de cobertura completa de mitigacion",
            "Coordinacion con especialistas en remediacion",
          ],
        },
        {
          icon: Wind,
          title: "Danos por Tormentas",
          description: "Evaluacion completa de danos causados por vientos fuertes.",
          benefits: "Recupera la maxima compensacion por danos de tormenta",
          details: [
            "Inspeccion de multiples areas afectadas",
            "Documentacion de danos relacionados con la tormenta",
            "Negociacion de reclamos complejos y multiples",
            "Representacion en disputas con aseguradoras",
            "Aplicacion de evidencia meteorologica",
          ],
        },
        {
          icon: Wrench,
          title: "Danos Interiores",
          description: "Danos por agua, moho y problemas estructurales internos.",
          benefits: "Obten compensacion completa para reparaciones interiores",
          details: [
            "Evaluacion de sistemas internos (plomeria, HVAC)",
            "Identificacion de dano por moho y humedad",
            "Documentacion tecnica de danos estructurales",
            "Negociacion de reparaciones y reemplazos completos",
            "Coordinacion con contratistas especializados",
          ],
        },
        {
          icon: DoorOpen,
          title: "Danos en Garajes",
          description: "Puertas, techos y estructuras de garaje afectadas.",
          benefits: "Asegura cobertura completa de danos en garaje",
          details: [
            "Evaluacion de puertas automaticas y sistemas",
            "Inspeccion de techos y paredes de garaje",
            "Documentacion de danos estructurales",
            "Negociacion de cobertura completa",
            "Coordinacion de reparaciones y reemplazos",
          ],
        },
        {
          icon: Flame,
          title: "Danos por Incendio",
          description: "Evaluacion completa de danos por incendio, humo y extincion.",
          benefits: "Maximiza tu reclamo por danos totales de incendio",
          details: [
            "Evaluacion de danos estructurales por fuego",
            "Identificacion de danos por humo y hollin",
            "Documentacion de danos de agua por extincion",
            "Negociacion de cobertura de contenido y estructura",
            "Coordinacion con especialistas en restauracion",
          ],
        },
        {
          icon: FileText,
          title: "Asesoramiento de Polizas",
          description: "Revision y explicacion detallada de tu poliza de seguros.",
          benefits: "Entiende tu cobertura y maximiza tus beneficios",
          details: [
            "Revision completa de terminos y cobertura",
            "Explicacion de exclusiones y limitaciones",
            "Identificacion de coberturas adicionales",
            "Asesoramiento sobre reclamaciones futuras",
            "Representacion en disputas de cobertura",
          ],
        },
        {
          icon: AlertCircle,
          title: "Evaluacion de Reclamos Negados",
          description: "Revision de reclamos rechazados y apelacion profesional.",
          benefits: "Revierte negaciones y obten la compensacion que mereces",
          details: [
            "Analisis de razones de negacion",
            "Recopilacion de evidencia adicional",
            "Preparacion de apelaciones profesionales",
            "Negociacion con aseguradoras",
            "Representacion legal si es necesario",
          ],
        },
      ],
    },
  };

  const text = copy[language];
  const services = text.services;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success(text.toastSuccess);
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
            {text.back}
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{text.title}</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">{text.intro}</p>

          {/* Detailed Service Explanations Section */}
          <div className="mb-16 bg-slate-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">{text.howTitle}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {text.howBlocks.map((block) => (
                <div key={block.title}>
                  <h3 className="text-xl font-bold mb-3 text-primary">{block.title}</h3>
                  <p className="text-muted-foreground mb-4">{block.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-8">{text.servicesTitle}</h2>
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
                      <p className="text-sm font-semibold text-green-700">OK - {service.benefits}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">-</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">{text.helpTitle}</h2>
            <Card>
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
                    <label className="block text-sm font-medium mb-2">{text.damageType}</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">{text.damagePlaceholder}</option>
                      {services.map((service) => (
                        <option key={service.title} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
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
                    {isSubmitting ? text.sending : text.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
