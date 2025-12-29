import { useState } from "react";
import SEO from "@/components/SEO";
import {
  MessageCircle,
  Shield,
  Award,
  FileCheck,
  Home as HomeIcon,
  Wrench,
  Wind,
  DoorOpen,
  Droplets,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import ChatSection from "@/components/ChatSection";
import ContactModal from "@/components/ContactModal";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  
  const seoTitle = language === 'es' 
    ? 'Inicio - Expertos en Reclamos de Seguros'
    : 'Home - Insurance Claim Experts';
  
  const seoDescription = language === 'es'
    ? 'PA & ERS - Ajustadores públicos certificados que maximizan tu compensación por daños de agua, incendio, tormentas y más. Consulta gratuita y anónima. Protegemos tus derechos.'
    : 'PA & ERS - Certified public adjusters maximizing your compensation for water, fire, storm, and interior damage. Free anonymous consultation. Protecting your rights.';
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedDamageType, setSelectedDamageType] = useState<string | null>(null);
  const [damageModalOpen, setDamageModalOpen] = useState(false);

  const copy = {
    en: {
      heroSubtitle: "Insurance Claim Experts - Protecting Your Rights",
      heroStartChat: "Start Chat",
      heroContact: "Contact Us",
      servicesTitle: "Types of Damage We Evaluate",
      servicesBody:
        "We have helped hundreds of families get the compensation they deserve. Our certified experts evaluate every type of damage with precision, identifying issues insurers often ignore. We do this because you deserve fair and complete compensation. When you work with us, you work with professionals who know every building code, every policy exclusion, and every tactic insurers use to minimize payouts.",
      serviceCards: [
        { title: "Water Mitigation", image: "/service-water.jpg", icon: Droplets },
        { title: "Fire Damage", image: "/service-fire.jpg", icon: Shield },
        { title: "Storm Damage", image: "/service-storm.jpg", icon: Wind },
        { title: "Interior Damage", image: "/service-interior.jpg", icon: Wrench },
      ],
      serviceCardBody: "Professional evaluation and expert negotiation to maximize your claim.",
      educationTitle: "What Is a Public Adjuster?",
      adjusterCards: [
        {
          title: "Public Adjuster",
          icon: Shield,
          body: "Works for YOU. Represents your interests and maximizes your claim. Only gets paid if you win.",
        },
        {
          title: "Insurance Adjuster",
          icon: Award,
          body: "Works for the INSURANCE COMPANY. Their goal is to minimize your claim payout.",
        },
        {
          title: "Independent Adjuster",
          icon: FileCheck,
          body: "Hired by the insurer to evaluate damage. Does not represent your interests.",
        },
      ],
      exclusionsTitle: "Policy Exclusions",
      exclusionsBody:
        "Insurers often try to apply exclusions incorrectly. We know the key differences:",
      exclusions: [
        "Sudden damage vs gradual wear",
        "Covered events vs deferred maintenance",
        "Direct damage vs indirect damage",
        "Correct application of building codes",
      ],
      questionsTitle: "Have Questions?",
      questionsBullets: [
        "Completely Free",
        "100% Anonymous - No personal data required",
        "No Commitment - Ask and get guidance",
      ],
      questionsBody:
        "Start an anonymous and confidential consultation. We will assign a PIN so you can continue the conversation anytime, from any device.",
      questionsCta: "Start Chat",
      detailedDamageTitle: "Detailed Damage Types",
      detailedDamageBody: "Click each damage type to learn how we can help",
      detailedDamageAction: "Click for details",
      close: "Close",
      credentialsTitle: "Our Credentials",
      credentials: [
        {
          title: "State Licenses",
          body: "Licensed and certified in multiple states to represent you legally.",
        },
        {
          title: "Municipal Permits",
          body: "Deep knowledge of local regulations and building codes.",
        },
        {
          title: "Construction Teams",
          body: "Access to specialized tools for precise damage evaluation.",
        },
        {
          title: "Building Codes",
          body: "Experts in code application that can significantly increase your claim.",
        },
        {
          title: "Key Difference",
          body: "Unlike contractors, we are certified to negotiate directly with insurers.",
        },
        {
          title: "Proven Experience",
          body: "Years of experience maximizing claims and protecting client rights.",
        },
      ],
      casesTitle: "Success Stories",
      cases: [
        {
          title: "Case 1: Hail Damage",
          initial: "Initial Denial",
          result: "Full Approval",
          description:
            "The insurer denied the claim citing normal wear. We found hidden roof damage and used building codes to secure full approval.",
          image: "/case-hail-damage.jpg",
        },
        {
          title: "Case 2: Fire Damage",
          initial: "Partial Offer",
          result: "250% Increase",
          description:
            "Initial offer was $45,000. We documented structural damage, smoke damage, and system damage to negotiate $112,500 for a full rebuild.",
          image: "/case-fire-restoration.jpg",
        },
        {
          title: "Case 3: Water Leak",
          initial: "Exclusion Applied",
          result: "Claim Approved",
          description:
            "The insurer applied a maintenance exclusion. We proved the damage came from a covered sudden event.",
          image: "/service-water.jpg",
        },
        {
          title: "Case 4: Interior Damage",
          initial: "Denied for Lack of Proof",
          result: "Full Payment",
          description:
            "Claim denied due to missing evidence. We performed a detailed inspection and provided technical reports to secure approval.",
          image: "/service-interior.jpg",
        },
      ],
      comparisonTitle: "Public Adjuster vs Contractor",
      publicAdjuster: {
        title: "Public Adjuster",
        items: [
          "Licensed to negotiate with insurers",
          "Legally represents your interests",
          "Maximizes claim value",
          "Knows codes and regulations",
          "Only gets paid if you win",
        ],
      },
      contractor: {
        title: "Contractor",
        items: [
          "Performs physical repairs",
          "Cannot legally negotiate",
          "Interested in getting the job",
          "May underestimate damage",
          "Charges for repair services",
        ],
      },
      finalTitle: "Schedule Your Free Consultation",
      finalBody:
        "We do not charge anything until your claim is approved. Your success is our success.",
      finalContact: "Contact Now",
      finalChat: "Start Anonymous Chat",
    },
    es: {
      heroSubtitle: "Expertos en Reclamos de Seguros - Protegemos Tus Derechos",
      heroStartChat: "Iniciar Chat",
      heroContact: "Contactar",
      servicesTitle: "Tipos de Danos que Evaluamos",
      servicesBody:
        "Hemos ayudado a cientos de familias a obtener la compensacion que merecen. Nuestros expertos certificados evalan cada tipo de dano con precision, identificando problemas que las aseguradoras frecuentemente ignoran. Hacemos esto porque creemos que tienes derecho a una compensacion justa y completa. Cuando trabajas con nosotros, trabajas con profesionales que conocen cada codigo de construccion, cada exclusion de poliza, y cada tactica que usan las aseguradoras para minimizar pagos.",
      serviceCards: [
        { title: "Mitigacion de Agua", image: "/service-water.jpg", icon: Droplets },
        { title: "Danos por Incendio", image: "/service-fire.jpg", icon: Shield },
        { title: "Danos por Tormentas", image: "/service-storm.jpg", icon: Wind },
        { title: "Danos Interiores", image: "/service-interior.jpg", icon: Wrench },
      ],
      serviceCardBody: "Evaluacion profesional y negociacion experta para maximizar tu reclamo.",
      educationTitle: "Que es un Ajustador Publico?",
      adjusterCards: [
        {
          title: "Ajustador Publico",
          icon: Shield,
          body: "Trabaja para TI. Representa tus intereses y maximiza tu reclamo. Solo cobra si ganas.",
        },
        {
          title: "Ajustador de Seguros",
          icon: Award,
          body: "Trabaja para la ASEGURADORA. Su objetivo es minimizar el pago de tu reclamo.",
        },
        {
          title: "Ajustador Independiente",
          icon: FileCheck,
          body: "Contratado por la aseguradora para evaluar danos. No representa tus intereses.",
        },
      ],
      exclusionsTitle: "Exclusiones de Polizas",
      exclusionsBody:
        "Las aseguradoras a menudo intentan aplicar exclusiones incorrectamente. Conocemos las diferencias clave:",
      exclusions: [
        "Dano subito vs desgaste gradual",
        "Eventos cubiertos vs mantenimiento diferido",
        "Danos directos vs indirectos",
        "Aplicacion correcta de codigos de construccion",
      ],
      questionsTitle: "Tienes Preguntas?",
      questionsBullets: [
        "Completamente Gratuito",
        "100% Anonimo - No necesitas darnos tus datos",
        "Sin Compromiso - Solo consulta y obten asesoramiento",
      ],
      questionsBody:
        "Inicia una consulta anonima y confidencial. Te asignaremos un PIN para que puedas continuar la conversacion en cualquier momento, desde cualquier dispositivo.",
      questionsCta: "Iniciar Chat",
      detailedDamageTitle: "Tipos de Danos Detallados",
      detailedDamageBody: "Haz clic en cada tipo de dano para conocer mas detalles",
      detailedDamageAction: "Haz clic para mas detalles",
      close: "Cerrar",
      credentialsTitle: "Nuestras Credenciales",
      credentials: [
        {
          title: "Licencias Estatales",
          body: "Licenciados y certificados en multiples estados para representarte legalmente.",
        },
        {
          title: "Permisos Municipales",
          body: "Conocimiento profundo de regulaciones locales y codigos de construccion.",
        },
        {
          title: "Equipos de Construccion",
          body: "Acceso a herramientas especializadas para evaluacion precisa de danos.",
        },
        {
          title: "Codigos de Construccion",
          body: "Expertos en aplicacion de codigos que pueden aumentar tu reclamo.",
        },
        {
          title: "Diferencia Clave",
          body: "A diferencia de contratistas, estamos certificados para negociar con aseguradoras.",
        },
        {
          title: "Experiencia Comprobada",
          body: "Anos de experiencia maximizando reclamos y protegiendo los derechos.",
        },
      ],
      casesTitle: "Casos de Exito",
      cases: [
        {
          title: "Caso 1: Dano por Granizo",
          initial: "Negacion Inicial",
          result: "Aprobacion Completa",
          description:
            "La aseguradora nego el reclamo alegando desgaste normal. Identificamos danos ocultos en el techo y aplicamos codigos para obtener aprobacion total.",
          image: "/case-hail-damage.jpg",
        },
        {
          title: "Caso 2: Dano por Incendio",
          initial: "Oferta Parcial",
          result: "Aumento del 250%",
          description:
            "Oferta inicial de $45,000. Documentamos danos estructurales, danos por humo y sistemas para negociar $112,500.",
          image: "/case-fire-restoration.jpg",
        },
        {
          title: "Caso 3: Filtracion de Agua",
          initial: "Exclusion Aplicada",
          result: "Reclamo Aprobado",
          description:
            "La aseguradora aplico exclusion por mantenimiento. Demostramos que el dano fue por evento subito cubierto.",
          image: "/service-water.jpg",
        },
        {
          title: "Caso 4: Dano Interior",
          initial: "Negacion por Documentacion",
          result: "Pago Completo",
          description:
            "Reclamo negado por falta de evidencia. Realizamos inspeccion detallada y reportes tecnicos para lograr aprobacion.",
          image: "/service-interior.jpg",
        },
      ],
      comparisonTitle: "Ajustador Publico vs Contratista",
      publicAdjuster: {
        title: "Ajustador Publico",
        items: [
          "Licenciado para negociar con aseguradoras",
          "Representa tus intereses legalmente",
          "Maximiza el valor de tu reclamo",
          "Conoce codigos y regulaciones",
          "Solo cobra si ganas",
        ],
      },
      contractor: {
        title: "Contratista",
        items: [
          "Realiza reparaciones fisicas",
          "No puede negociar legalmente",
          "Interes en obtener el trabajo",
          "Puede subestimar danos",
          "Cobra por servicios de reparacion",
        ],
      },
      finalTitle: "Agenda Tu Consulta Gratuita",
      finalBody:
        "No cobramos nada hasta que tu reclamo sea aprobado. Tu exito es nuestro exito.",
      finalContact: "Contactar Ahora",
      finalChat: "Iniciar Chat Anonimo",
    },
  };

  const text = copy[language];

  const damageTypes = [
    {
      id: "roof",
      name: language === "en" ? "Roof" : "Techo",
      icon: HomeIcon,
      description:
        language === "en"
          ? "Damage from hail, wind, or wear. We evaluate the full structure."
          : "Danos por granizo, viento, o desgaste. Evaluamos la estructura completa.",
      details:
        language === "en"
          ? "Roof damage is one of the most common claims. Our experts identify hidden issues that insurers often overlook, including structural damage under the surface and drainage problems. We use up-to-date building codes to maximize your claim."
          : "Los danos en techos son de los reclamos mas comunes. Identificamos danos ocultos que las aseguradoras pasan por alto, incluyendo danos estructurales y problemas de drenaje. Usamos codigos actualizados para maximizar tu reclamo.",
    },
    {
      id: "siding",
      name: language === "en" ? "Siding" : "Revestimiento",
      icon: Shield,
      description:
        language === "en"
          ? "Impacts, cracks, or detachment from weather events."
          : "Impactos en siding, grietas, o desprendimientos por eventos climaticos.",
      details:
        language === "en"
          ? "Siding protects your home. Damage can be cosmetic or structural. We evaluate the full scope and negotiate full replacement when appropriate, not just partial repairs."
          : "El revestimiento protege tu hogar. Los danos pueden ser cosmeticos o estructurales. Evaluamos el alcance completo y negociamos reemplazos totales cuando corresponde.",
    },
    {
      id: "gutters",
      name: language === "en" ? "Gutters" : "Canaletas",
      icon: Droplets,
      description:
        language === "en"
          ? "Drainage system damage that can cause structural issues."
          : "Danos en sistemas de drenaje que pueden causar problemas estructurales.",
      details:
        language === "en"
          ? "Damaged gutters can lead to serious water issues. We document these problems and include them in your claim to prevent further damage."
          : "Canaletas danadas pueden causar danos por agua. Documentamos estos problemas y los incluimos en tu reclamo para evitar danos adicionales.",
    },
    {
      id: "windows",
      name: language === "en" ? "Windows" : "Ventanas",
      icon: DoorOpen,
      description:
        language === "en"
          ? "Breaks, leaks, or impact damage that compromises safety."
          : "Roturas, filtraciones o danos por impacto que comprometen la seguridad.",
      details:
        language === "en"
          ? "Broken windows affect security and can cause water damage and energy loss. We evaluate all affected windows and negotiate quality replacements."
          : "Ventanas rotas afectan la seguridad y pueden causar danos por agua y perdida de energia. Evaluamos todas las ventanas y negociamos reemplazos de calidad.",
    },
    {
      id: "interior",
      name: language === "en" ? "Interior" : "Interior",
      icon: Wrench,
      description:
        language === "en"
          ? "Water damage, mold, or internal structural issues."
          : "Danos por agua, moho o problemas estructurales internos.",
      details:
        language === "en"
          ? "Interior damage is often underestimated. We identify water damage, mold, structural issues, and system problems (electrical, plumbing) and document everything professionally."
          : "Los danos interiores suelen subestimarse. Identificamos danos por agua, moho, danos estructurales y problemas de sistemas y lo documentamos todo.",
    },
    {
      id: "garage",
      name: language === "en" ? "Garage" : "Garaje",
      icon: Car,
      description:
        language === "en"
          ? "Garage doors, roofs, and structures impacted by external events."
          : "Puertas, techos y estructuras de garaje afectadas por eventos externos.",
      details:
        language === "en"
          ? "Garages suffer significant storm damage. We evaluate doors, roofs, walls, and openers to ensure full compensation."
          : "Los garajes sufren danos significativos en tormentas. Evaluamos puertas, techos, paredes y sistemas de apertura para asegurar compensacion completa.",
    },
  ];

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        url="https://paers.com/"
      />
      <div className="min-h-screen flex flex-col">
        <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/office-building.jpg')] bg-cover bg-center opacity-40" />
        </div>

        <div className="container relative z-10 py-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">PA & ERS INDUSTRY</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">{text.heroSubtitle}</p>

          {/* Animated Logo Carousel */}
          <LogoCarousel />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => {
                const chatSection = document.getElementById("chat");
                chatSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {text.heroStartChat}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-slate-900"
            >
              {text.heroContact}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section with Graphics */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{text.servicesTitle}</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            {text.servicesBody}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {text.serviceCards.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - PA & ERS Insurance Claim Services`}
                      loading="lazy"
                      width="400"
                      height="300"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{text.serviceCardBody}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{text.educationTitle}</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {text.adjusterCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Card key={card.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{card.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-slate-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">{text.exclusionsTitle}</h3>
            <p className="text-muted-foreground mb-4">{text.exclusionsBody}</p>
            <ul className="space-y-2 text-muted-foreground">
              {text.exclusions.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 p-8 rounded-lg text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{text.questionsTitle}</h3>
            <div className="bg-white border-2 border-green-500 rounded-lg p-4 mb-6 shadow-md inline-block">
              {text.questionsBullets.map((bullet) => (
                <p key={bullet} className="text-base text-foreground mb-2 font-semibold text-green-700">
                  OK - {bullet}
                </p>
              ))}
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">{text.questionsBody}</p>
            <Button
              size="lg"
              onClick={() => {
                const chatSection = document.getElementById("chat");
                chatSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              {text.questionsCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Damage Types Modal Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{text.detailedDamageTitle}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {text.detailedDamageBody}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {damageTypes.map((damage) => {
              const IconComponent = damage.icon;
              return (
                <Card
                  key={damage.id}
                  className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                  onClick={() => {
                    setSelectedDamageType(damage.id);
                    setDamageModalOpen(true);
                  }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      {damage.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{damage.description}</p>
                    <p className="text-xs text-primary mt-4">{text.detailedDamageAction}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Damage Type Detail Modal */}
      <Dialog open={damageModalOpen} onOpenChange={setDamageModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{damageTypes.find((d) => d.id === selectedDamageType)?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {damageTypes.find((d) => d.id === selectedDamageType)?.details}
            </p>
            <Button onClick={() => setDamageModalOpen(false)} className="w-full">
              {text.close}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Credentials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{text.credentialsTitle}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {text.credentials.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{text.casesTitle}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {text.cases.map((caseStudy) => (
              <Card key={caseStudy.title} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={`${caseStudy.title} - PA & ERS Success Story`}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-red-600">{caseStudy.initial}</p>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-sm font-semibold text-green-600">{caseStudy.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">{text.comparisonTitle}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">{text.publicAdjuster.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {text.publicAdjuster.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-600">OK</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{text.contractor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {text.contractor.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-amber-600">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <ChatSection />

      {/* Final CTA */}
      <section id="contacto" className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{text.finalTitle}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{text.finalBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setContactModalOpen(true)}
              className="text-lg"
            >
              {text.finalContact}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const chatSection = document.getElementById("chat");
                chatSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
            >
              {text.finalChat}
            </Button>
          </div>
        </div>
      </section>

       <Footer />
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
    </>
  );
}
