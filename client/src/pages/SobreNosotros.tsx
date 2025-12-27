import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Target, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SobreNosotros() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();

  const copy = {
    en: {
      back: "Back to Home",
      title: "About PA & ERS INDUSTRY",
      intro:
        "We are a team of certified public adjusters dedicated to protecting client rights and ensuring they receive the fair compensation they deserve.",
      missionTitle: "Our Mission",
      missionBody: [
        "Our mission is simple but powerful: protect policyholder rights and ensure full and fair compensation for losses.",
        "We believe insurers have resources and experience to minimize payouts, so our clients need an equally prepared advocate. That is our role.",
        "We do not charge anything until your claim is approved. Your success is our success.",
      ],
      valuesTitle: "Our Values",
      values: [
        {
          icon: Heart,
          title: "Dedication",
          description: "We fully commit to protecting client rights and maximizing claims.",
        },
        {
          icon: Target,
          title: "Precision",
          description: "Every evaluation is done with maximum precision using professional tools.",
        },
        {
          icon: Award,
          title: "Excellence",
          description: "We uphold the highest standards of professionalism and certification.",
        },
        {
          icon: Users,
          title: "Transparency",
          description: "We communicate clearly at every step and keep clients informed.",
        },
      ],
      achievementsTitle: "Our Achievements",
      achievements: [
        { number: "500+", label: "Cases Resolved" },
        { number: "$15M+", label: "Recovered for Clients" },
        { number: "98%", label: "Success Rate" },
        { number: "10+", label: "Years of Experience" },
      ],
      teamTitle: "Our Team",
      teamBody:
        "Our team consists of certified public adjusters with years of experience in the insurance industry. Each member is committed to providing the highest level of service.",
      team: [
        {
          name: "Andres Garcia",
          title: "Certified Public Adjuster",
          experience: "12+ years",
        },
        {
          name: "Carlos Lopez",
          title: "Structural Damage Specialist",
          experience: "10+ years",
        },
        {
          name: "Maria Rodriguez",
          title: "Claims Coordinator",
          experience: "8+ years",
        },
      ],
      whyTitle: "Why Choose Us?",
      reasons: [
        "Certified and licensed public adjusters",
        "Professional legal representation",
        "Experience negotiating with insurers",
        "Access to specialized evaluation tools",
        "Deep knowledge of building codes",
        "Professional photo documentation",
        "No fees until you win your claim",
        "Clear and transparent communication",
      ],
      ctaTitle: "Ready to Get Started?",
      ctaBody: "Contact us today for a free consultation. We will evaluate your case with no obligation.",
      ctaButton: "Request Free Consultation",
    },
    es: {
      back: "Volver al Inicio",
      title: "Sobre PA & ERS INDUSTRY",
      intro:
        "Somos un equipo de ajustadores publicos certificados dedicados a proteger los derechos de nuestros clientes y asegurar que reciban la compensacion justa que merecen.",
      missionTitle: "Nuestra Mision",
      missionBody: [
        "Nuestra mision es simple pero poderosa: proteger los derechos de los asegurados y asegurar compensacion completa y justa.",
        "Creemos que las aseguradoras tienen recursos y experiencia para minimizar pagos, por lo que nuestros clientes necesitan un defensor igualmente preparado.",
        "No cobramos nada hasta que tu reclamo sea aprobado. Tu exito es nuestro exito.",
      ],
      valuesTitle: "Nuestros Valores",
      values: [
        {
          icon: Heart,
          title: "Dedicacion",
          description: "Nos dedicamos a proteger los derechos de nuestros clientes y maximizar sus reclamos.",
        },
        {
          icon: Target,
          title: "Precision",
          description: "Cada evaluacion se realiza con maxima precision usando herramientas profesionales.",
        },
        {
          icon: Award,
          title: "Excelencia",
          description: "Mantenemos los mas altos estandares de profesionalismo y certificacion.",
        },
        {
          icon: Users,
          title: "Transparencia",
          description: "Comunicamos claramente cada paso del proceso y mantenemos informados a nuestros clientes.",
        },
      ],
      achievementsTitle: "Nuestros Logros",
      achievements: [
        { number: "500+", label: "Casos Resueltos" },
        { number: "$15M+", label: "Recuperados para Clientes" },
        { number: "98%", label: "Tasa de Exito" },
        { number: "10+", label: "Anos de Experiencia" },
      ],
      teamTitle: "Nuestro Equipo",
      teamBody:
        "Nuestro equipo esta compuesto por ajustadores publicos certificados con anos de experiencia en la industria de seguros.",
      team: [
        {
          name: "Andres Garcia",
          title: "Ajustador Publico Certificado",
          experience: "12+ anos",
        },
        {
          name: "Carlos Lopez",
          title: "Especialista en Danos Estructurales",
          experience: "10+ anos",
        },
        {
          name: "Maria Rodriguez",
          title: "Coordinadora de Reclamos",
          experience: "8+ anos",
        },
      ],
      whyTitle: "Por Que Elegirnos?",
      reasons: [
        "Ajustadores publicos certificados y licenciados",
        "Representacion legal profesional",
        "Experiencia en negociacion con aseguradoras",
        "Acceso a herramientas especializadas de evaluacion",
        "Conocimiento profundo de codigos de construccion",
        "Documentacion profesional y fotografica",
        "Sin cargos hasta que ganes tu reclamo",
        "Comunicacion clara y transparente",
      ],
      ctaTitle: "Listo para Comenzar?",
      ctaBody: "Contactanos hoy para una consulta gratuita. Evaluaremos tu caso sin compromiso.",
      ctaButton: "Solicitar Consulta Gratuita",
    },
  };

  const text = copy[language];

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

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">{text.missionTitle}</h2>
              {text.missionBody.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">{text.valuesTitle}</h3>
              <div className="space-y-4">
                {text.values.map((value) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{text.achievementsTitle}</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {text.achievements.map((achievement) => (
                <Card key={achievement.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                    <p className="text-muted-foreground">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-slate-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4">{text.teamTitle}</h2>
            <p className="text-muted-foreground mb-6">{text.teamBody}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {text.team.map((member) => (
                <Card key={member.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary mb-2">{member.title}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{text.whyTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {text.reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="text-primary font-bold">OK</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{text.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{text.ctaBody}</p>
            <Button size="lg" onClick={() => navigate("/#contacto")}>
              {text.ctaButton}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
