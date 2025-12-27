import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Home as HomeIcon, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

type ComplexityLevel = "easy" | "moderate" | "complex" | "very-complex";

interface Project {
  id: string;
  title: string;
  description: string;
  complexity: ComplexityLevel;
  initialOffer: string;
  finalAmount: string;
  damageType: string;
  details: string[];
}

export default function Proyectos() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();

  const copy = {
    en: {
      back: "Back to Home",
      title: "Completed Projects",
      intro:
        "Explore a selection of our successful cases. Each project demonstrates our negotiation expertise and our ability to maximize compensation for clients.",
      complexityTitle: "Complexity Levels",
      complexityLegend: {
        easy: "Simple cases with direct negotiation",
        moderate: "Cases with some challenges",
        complex: "Multiple areas of damage",
        "very-complex": "Cases with multiple challenges",
      },
      projectLabels: {
        initialOffer: "Initial Offer",
        finalAmount: "Final Amount",
        increase: "Increase",
        details: "CASE DETAILS",
        statsTitle: "Project Statistics",
        shown: "Cases Shown",
        recovered: "Additional Recovered",
        avgIncrease: "Average Increase",
        successRate: "Success Rate",
      },
      ctaTitle: "Could Your Case Be Next?",
      ctaBody:
        "These are just some of our successful cases. If you have an insurance claim, let us evaluate it for free.",
      ctaButton: "Request Free Evaluation",
      complexities: {
        easy: "Easy",
        moderate: "Moderate",
        complex: "Complex",
        "very-complex": "Very Complex",
      },
      projects: [
        {
          id: "1",
          title: "Hail Damage - Single Family Residence",
          description: "Evaluation and negotiation of hail damage on roof and siding.",
          complexity: "easy",
          initialOffer: "$12,000",
          finalAmount: "$28,500",
          damageType: "Hail",
          details: [
            "Visual inspection of roof and siding",
            "Photo documentation",
            "Direct negotiation with insurer",
            "Approval in 2 weeks",
          ],
        },
        {
          id: "2",
          title: "Fire Damage - Two Story Home",
          description: "Complex evaluation of structural, smoke, and water damage.",
          complexity: "very-complex",
          initialOffer: "$45,000",
          finalAmount: "$127,500",
          damageType: "Fire",
          details: [
            "Complete structural evaluation",
            "Smoke and soot damage analysis",
            "Documentation of extinguishing water damage",
            "Content and structure negotiation",
            "Approval in 6 weeks",
          ],
        },
        {
          id: "3",
          title: "Water Leak - Apartment",
          description: "Leak case with maintenance exclusion overturned.",
          complexity: "moderate",
          initialOffer: "$0 (Denied)",
          finalAmount: "$18,750",
          damageType: "Water",
          details: [
            "Analysis of leak cause",
            "Proof of sudden event",
            "Appeal of exclusion",
            "Technical documentation",
            "Approval in 4 weeks",
          ],
        },
        {
          id: "4",
          title: "Storm Damage - Multiple Properties",
          description: "Storm damage evaluation for commercial and residential properties.",
          complexity: "very-complex",
          initialOffer: "$65,000",
          finalAmount: "$185,000",
          damageType: "Storm",
          details: [
            "Inspection of multiple buildings",
            "Damage documentation",
            "Meteorological evidence analysis",
            "Negotiation of multiple claims",
            "Dispute representation",
            "Approval in 8 weeks",
          ],
        },
        {
          id: "5",
          title: "Interior Water Damage - Historic Home",
          description: "Extensive interior water damage in a historic property.",
          complexity: "complex",
          initialOffer: "$22,000",
          finalAmount: "$62,300",
          damageType: "Interior Water",
          details: [
            "Mold damage evaluation",
            "Documentation of damaged systems",
            "Historic construction analysis",
            "Repair vs replacement negotiation",
            "Approval in 5 weeks",
          ],
        },
        {
          id: "6",
          title: "Garage Damage - Automatic Door",
          description: "Garage door and roof damage from a weather event.",
          complexity: "easy",
          initialOffer: "$5,500",
          finalAmount: "$11,200",
          damageType: "Garage",
          details: [
            "Automatic door evaluation",
            "Garage roof inspection",
            "Damage documentation",
            "Fast negotiation",
            "Approval in 1.5 weeks",
          ],
        },
        {
          id: "7",
          title: "Siding Damage - Gated Community",
          description: "Extensive siding damage across multiple units.",
          complexity: "complex",
          initialOffer: "$35,000",
          finalAmount: "$94,750",
          damageType: "Siding",
          details: [
            "Inspection of multiple units",
            "Uniform damage documentation",
            "Full replacement negotiation",
            "HOA coordination",
            "Approval in 6 weeks",
          ],
        },
        {
          id: "8",
          title: "Denied Claim - Successful Appeal",
          description: "Appeal of a denied claim due to missing documentation.",
          complexity: "moderate",
          initialOffer: "$0 (Denied)",
          finalAmount: "$35,600",
          damageType: "Multiple",
          details: [
            "Denial reason analysis",
            "Additional evidence collection",
            "Professional appeal preparation",
            "Post-appeal negotiation",
            "Approval in 7 weeks",
          ],
        },
      ],
    },
    es: {
      back: "Volver al Inicio",
      title: "Proyectos Realizados",
      intro:
        "Explora una seleccion de nuestros casos exitosos. Cada proyecto demuestra nuestra experiencia en negociacion y capacidad para maximizar compensaciones.",
      complexityTitle: "Niveles de Complejidad",
      complexityLegend: {
        easy: "Casos simples con negociacion directa",
        moderate: "Casos con algunos desafios",
        complex: "Multiples areas de dano",
        "very-complex": "Casos con multiples desafios",
      },
      projectLabels: {
        initialOffer: "Oferta Inicial",
        finalAmount: "Monto Final",
        increase: "Aumento",
        details: "DETALLES DEL CASO",
        statsTitle: "Estadisticas de Nuestros Proyectos",
        shown: "Casos Mostrados",
        recovered: "Recuperado Adicional",
        avgIncrease: "Aumento Promedio",
        successRate: "Tasa de Exito",
      },
      ctaTitle: "Tu Caso Podria Ser el Siguiente?",
      ctaBody:
        "Estos son solo algunos de nuestros casos exitosos. Si tienes un reclamo de seguros, dejanos evaluarlo de forma gratuita.",
      ctaButton: "Solicitar Evaluacion Gratuita",
      complexities: {
        easy: "Facil",
        moderate: "Moderado",
        complex: "Complejo",
        "very-complex": "Muy Complejo",
      },
      projects: [
        {
          id: "1",
          title: "Dano por Granizo - Residencia Unifamiliar",
          description: "Evaluacion y negociacion de dano por granizo en techo y revestimiento.",
          complexity: "easy",
          initialOffer: "$12,000",
          finalAmount: "$28,500",
          damageType: "Granizo",
          details: [
            "Inspeccion visual de techo y siding",
            "Documentacion fotografica",
            "Negociacion directa con aseguradora",
            "Aprobacion en 2 semanas",
          ],
        },
        {
          id: "2",
          title: "Dano por Incendio - Casa de Dos Pisos",
          description: "Evaluacion compleja de dano estructural, humo y agua.",
          complexity: "very-complex",
          initialOffer: "$45,000",
          finalAmount: "$127,500",
          damageType: "Incendio",
          details: [
            "Evaluacion estructural completa",
            "Analisis de dano por humo y hollin",
            "Documentacion de dano por agua de extincion",
            "Negociacion de contenido y estructura",
            "Aprobacion en 6 semanas",
          ],
        },
        {
          id: "3",
          title: "Filtracion de Agua - Apartamento",
          description: "Caso de filtracion de agua con exclusion de mantenimiento revertida.",
          complexity: "moderate",
          initialOffer: "$0 (Negado)",
          finalAmount: "$18,750",
          damageType: "Agua",
          details: [
            "Analisis de causa de filtracion",
            "Demostracion de evento subito",
            "Apelacion de exclusion",
            "Documentacion tecnica",
            "Aprobacion en 4 semanas",
          ],
        },
        {
          id: "4",
          title: "Dano por Tormenta - Multiples Propiedades",
          description: "Evaluacion de danos por tormenta severa en propiedad comercial y residencial.",
          complexity: "very-complex",
          initialOffer: "$65,000",
          finalAmount: "$185,000",
          damageType: "Tormenta",
          details: [
            "Inspeccion de multiples edificios",
            "Documentacion de danos relacionados",
            "Analisis de evidencia meteorologica",
            "Negociacion de reclamos multiples",
            "Representacion en disputa",
            "Aprobacion en 8 semanas",
          ],
        },
        {
          id: "5",
          title: "Dano Interior por Agua - Casa Antigua",
          description: "Evaluacion de dano interior extenso por agua en casa historica.",
          complexity: "complex",
          initialOffer: "$22,000",
          finalAmount: "$62,300",
          damageType: "Agua Interior",
          details: [
            "Evaluacion de dano por moho",
            "Documentacion de sistemas danados",
            "Analisis de construccion historica",
            "Negociacion de reparacion vs reemplazo",
            "Aprobacion en 5 semanas",
          ],
        },
        {
          id: "6",
          title: "Dano en Garaje - Puerta Automatica",
          description: "Caso de dano en puerta automatica de garaje y techo por evento climatico.",
          complexity: "easy",
          initialOffer: "$5,500",
          finalAmount: "$11,200",
          damageType: "Garaje",
          details: [
            "Evaluacion de puerta automatica",
            "Inspeccion de techo de garaje",
            "Documentacion de danos",
            "Negociacion rapida",
            "Aprobacion en 1.5 semanas",
          ],
        },
        {
          id: "7",
          title: "Dano por Revestimiento - Comunidad Cerrada",
          description: "Evaluacion de dano extenso en siding de multiples unidades.",
          complexity: "complex",
          initialOffer: "$35,000",
          finalAmount: "$94,750",
          damageType: "Revestimiento",
          details: [
            "Inspeccion de multiples unidades",
            "Documentacion de danos uniformes",
            "Negociacion de reemplazo completo",
            "Coordinacion con HOA",
            "Aprobacion en 6 semanas",
          ],
        },
        {
          id: "8",
          title: "Reclamo Negado - Apelacion Exitosa",
          description: "Apelacion de reclamo negado por falta de documentacion inicial.",
          complexity: "moderate",
          initialOffer: "$0 (Negado)",
          finalAmount: "$35,600",
          damageType: "Multiple",
          details: [
            "Analisis de razon de negacion",
            "Recopilacion de evidencia adicional",
            "Preparacion de apelacion profesional",
            "Negociacion post-apelacion",
            "Aprobacion en 7 semanas",
          ],
        },
      ],
    },
  };

  const text = copy[language];
  const projects = text.projects;

  const getComplexityColor = (complexity: ComplexityLevel) => {
    switch (complexity) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-300";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "complex":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "very-complex":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formatIncrease = (initial: string, final: string) => {
    const initialValue = parseFloat(initial.replace(/[^0-9.]/g, "")) || 0;
    const finalValue = parseFloat(final.replace(/[^0-9.]/g, "")) || 0;
    if (initialValue === 0) return "N/A";
    return `${(((finalValue - initialValue) / initialValue) * 100).toFixed(0)}%`;
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

          {/* Complexity Legend */}
          <Card className="mb-12 bg-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                {text.complexityTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {(["easy", "moderate", "complex", "very-complex"] as ComplexityLevel[]).map(
                  (level) => (
                    <div key={level} className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold border ${getComplexityColor(level)}`}
                      >
                        {text.complexities[level]}
                      </span>
                      <span className="text-sm text-muted-foreground">{text.complexityLegend[level]}</span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => {
              const increase = formatIncrease(project.initialOffer, project.finalAmount);

              return (
                <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border ${getComplexityColor(
                          project.complexity
                        )}`}
                      >
                        {text.complexities[project.complexity]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Offer Comparison */}
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{text.projectLabels.initialOffer}</p>
                          <p className="font-bold text-red-600">{project.initialOffer}</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">{text.projectLabels.finalAmount}</p>
                          <p className="font-bold text-green-600">{project.finalAmount}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t text-center">
                        <p className="text-sm font-bold text-green-700">
                          {text.projectLabels.increase}: {increase}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        {text.projectLabels.details}
                      </p>
                      <ul className="space-y-2">
                        {project.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-0.5">-</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Damage Type Badge */}
                    <div className="pt-2 border-t">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {project.damageType}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Stats */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HomeIcon className="h-5 w-5 text-primary" />
                {text.projectLabels.statsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{projects.length}</p>
                  <p className="text-sm text-muted-foreground">{text.projectLabels.shown}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">
                    {(
                      projects.reduce((sum, p) => {
                        const initial = parseFloat(p.initialOffer.replace(/[^0-9.]/g, "")) || 0;
                        const final = parseFloat(p.finalAmount.replace(/[^0-9.]/g, "")) || 0;
                        return sum + (final - initial);
                      }, 0) / 1000000
                    ).toFixed(1)}
                    M
                  </p>
                  <p className="text-sm text-muted-foreground">{text.projectLabels.recovered}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {(() => {
                      const increases = projects
                        .map((p) => {
                          const initial = parseFloat(p.initialOffer.replace(/[^0-9.]/g, "")) || 0;
                          const final = parseFloat(p.finalAmount.replace(/[^0-9.]/g, "")) || 0;
                          if (initial === 0) return null;
                          return ((final - initial) / initial) * 100;
                        })
                        .filter((val): val is number => val !== null);
                      if (!increases.length) return "0";
                      const avg = increases.reduce((sum, val) => sum + val, 0) / increases.length;
                      return avg.toFixed(0);
                    })()}
                    %
                  </p>
                  <p className="text-sm text-muted-foreground">{text.projectLabels.avgIncrease}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">{text.projectLabels.successRate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{text.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{text.ctaBody}</p>
            <button
              onClick={() => navigate("/contacto")}
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {text.ctaButton}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
