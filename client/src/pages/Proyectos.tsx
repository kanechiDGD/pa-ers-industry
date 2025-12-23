import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Home as HomeIcon, AlertCircle } from "lucide-react";
import Header from "@/components/Header";

type ComplexityLevel = "Fácil" | "Moderado" | "Complejo" | "Muy Complejo";

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
  const [, navigate] = useLocation();

  const projects: Project[] = [
    {
      id: "1",
      title: "Daño por Granizo - Residencia Unifamiliar",
      description: "Evaluación y negociación de daño por granizo en techo y revestimiento de vivienda unifamiliar.",
      complexity: "Fácil",
      initialOffer: "$12,000",
      finalAmount: "$28,500",
      damageType: "Granizo",
      details: [
        "Inspección visual de techo y siding",
        "Documentación fotográfica",
        "Negociación directa con aseguradora",
        "Aprobación en 2 semanas",
      ],
    },
    {
      id: "2",
      title: "Daño por Incendio - Casa de Dos Pisos",
      description: "Evaluación compleja de daño estructural, humo y agua en casa de dos pisos.",
      complexity: "Muy Complejo",
      initialOffer: "$45,000",
      finalAmount: "$127,500",
      damageType: "Incendio",
      details: [
        "Evaluación estructural completa",
        "Análisis de daño por humo y hollín",
        "Documentación de daño por agua de extinción",
        "Negociación de contenido y estructura",
        "Aprobación en 6 semanas",
      ],
    },
    {
      id: "3",
      title: "Filtración de Agua - Apartamento",
      description: "Caso de filtración de agua con exclusión de mantenimiento que fue revertida.",
      complexity: "Moderado",
      initialOffer: "$0 (Negado)",
      finalAmount: "$18,750",
      damageType: "Agua",
      details: [
        "Análisis de causa de filtración",
        "Demostración de evento súbito",
        "Apelación de exclusión",
        "Documentación técnica",
        "Aprobación en 4 semanas",
      ],
    },
    {
      id: "4",
      title: "Daño por Tormenta - Múltiples Propiedades",
      description: "Evaluación de daños por tormenta severa en propiedad comercial y residencial.",
      complexity: "Muy Complejo",
      initialOffer: "$65,000",
      finalAmount: "$185,000",
      damageType: "Tormenta",
      details: [
        "Inspección de múltiples edificios",
        "Documentación de daños relacionados",
        "Análisis de evidencia meteorológica",
        "Negociación de reclamos múltiples",
        "Representación en disputa",
        "Aprobación en 8 semanas",
      ],
    },
    {
      id: "5",
      title: "Daño Interior por Agua - Casa Antigua",
      description: "Evaluación de daño interior extenso por agua en casa histórica.",
      complexity: "Complejo",
      initialOffer: "$22,000",
      finalAmount: "$62,300",
      damageType: "Agua Interior",
      details: [
        "Evaluación de daño por moho",
        "Documentación de sistemas dañados",
        "Análisis de construcción histórica",
        "Negociación de reparación vs. reemplazo",
        "Aprobación en 5 semanas",
      ],
    },
    {
      id: "6",
      title: "Daño en Garaje - Puerta Automática",
      description: "Caso de daño en puerta automática de garaje y techo por evento climático.",
      complexity: "Fácil",
      initialOffer: "$5,500",
      finalAmount: "$11,200",
      damageType: "Garaje",
      details: [
        "Evaluación de puerta automática",
        "Inspección de techo de garaje",
        "Documentación de daños",
        "Negociación rápida",
        "Aprobación en 1.5 semanas",
      ],
    },
    {
      id: "7",
      title: "Daño por Revestimiento - Comunidad Cerrada",
      description: "Evaluación de daño extenso en siding de múltiples unidades en comunidad cerrada.",
      complexity: "Complejo",
      initialOffer: "$35,000",
      finalAmount: "$94,750",
      damageType: "Revestimiento",
      details: [
        "Inspección de múltiples unidades",
        "Documentación de daños uniformes",
        "Negociación de reemplazo completo",
        "Coordinación con HOA",
        "Aprobación en 6 semanas",
      ],
    },
    {
      id: "8",
      title: "Reclamo Negado - Apelación Exitosa",
      description: "Apelación de reclamo negado por falta de documentación inicial.",
      complexity: "Moderado",
      initialOffer: "$0 (Negado)",
      finalAmount: "$35,600",
      damageType: "Múltiple",
      details: [
        "Análisis de razón de negación",
        "Recopilación de evidencia adicional",
        "Preparación de apelación profesional",
        "Negociación post-apelación",
        "Aprobación en 7 semanas",
      ],
    },
  ];

  const getComplexityColor = (complexity: ComplexityLevel) => {
    switch (complexity) {
      case "Fácil":
        return "bg-green-100 text-green-800 border-green-300";
      case "Moderado":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Complejo":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "Muy Complejo":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getComplexityIcon = (complexity: ComplexityLevel) => {
    switch (complexity) {
      case "Fácil":
        return "✓";
      case "Moderado":
        return "✓✓";
      case "Complejo":
        return "✓✓✓";
      case "Muy Complejo":
        return "✓✓✓✓";
      default:
        return "?";
    }
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Realizados</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Explora una selección de nuestros casos exitosos. Cada proyecto demuestra nuestra experiencia en negociación y capacidad para maximizar compensaciones para nuestros clientes.
          </p>

          {/* Complexity Legend */}
          <Card className="mb-12 bg-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Niveles de Complejidad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">Fácil</span>
                  <span className="text-sm text-muted-foreground">Casos simples con negociación directa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">Moderado</span>
                  <span className="text-sm text-muted-foreground">Casos con algunos desafíos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">Complejo</span>
                  <span className="text-sm text-muted-foreground">Múltiples áreas de daño</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800">Muy Complejo</span>
                  <span className="text-sm text-muted-foreground">Casos con múltiples desafíos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => {
              const increase = (
                ((parseFloat(project.finalAmount.replace(/[^0-9.]/g, "")) -
                  parseFloat(project.initialOffer.replace(/[^0-9.]/g, ""))) /
                  parseFloat(project.initialOffer.replace(/[^0-9.]/g, ""))) *
                100
              ).toFixed(0);

              return (
                <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border ${getComplexityColor(project.complexity)}`}>
                        {project.complexity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Offer Comparison */}
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Oferta Inicial</p>
                          <p className="font-bold text-red-600">{project.initialOffer}</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Monto Final</p>
                          <p className="font-bold text-green-600">{project.finalAmount}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t text-center">
                        <p className="text-sm font-bold text-green-700">Aumento: +{increase}%</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">DETALLES DEL CASO</p>
                      <ul className="space-y-2">
                        {project.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-0.5">✓</span>
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
                Estadísticas de Nuestros Proyectos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{projects.length}</p>
                  <p className="text-sm text-muted-foreground">Casos Mostrados</p>
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
                  <p className="text-sm text-muted-foreground">Recuperado Adicional</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {(
                      projects.reduce((sum, p) => {
                        const initial = parseFloat(p.initialOffer.replace(/[^0-9.]/g, "")) || 0;
                        const final = parseFloat(p.finalAmount.replace(/[^0-9.]/g, "")) || 0;
                        if (initial === 0) return sum;
                        return sum + ((final - initial) / initial) * 100;
                      }, 0) / projects.length
                    ).toFixed(0)}
                    %
                  </p>
                  <p className="text-sm text-muted-foreground">Aumento Promedio</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Tasa de Éxito</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Tu Caso Podría Ser el Siguiente?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estos son solo algunos de nuestros casos exitosos. Si tienes un reclamo de seguros, déjanos evaluarlo de forma gratuita.
            </p>
            <button
              onClick={() => navigate("/contacto")}
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Solicitar Evaluación Gratuita
            </button>
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
