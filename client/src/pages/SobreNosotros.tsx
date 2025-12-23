import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Target, Heart } from "lucide-react";
import Header from "@/components/Header";

export default function SobreNosotros() {
  const [, navigate] = useLocation();

  const values = [
    {
      icon: Heart,
      title: "Dedicación",
      description: "Nos dedicamos completamente a proteger los derechos de nuestros clientes y maximizar sus reclamos.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada evaluación es realizada con máxima precisión utilizando herramientas y métodos profesionales.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de profesionalismo y certificación en la industria.",
    },
    {
      icon: Users,
      title: "Transparencia",
      description: "Comunicamos claramente cada paso del proceso y mantenemos a nuestros clientes informados.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Casos Resueltos" },
    { number: "$15M+", label: "Recuperados para Clientes" },
    { number: "98%", label: "Tasa de Éxito" },
    { number: "10+", label: "Años de Experiencia" },
  ];

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

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre PA & ERS INDUSTRY</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Somos un equipo de ajustadores públicos certificados dedicados a proteger los derechos de nuestros clientes y asegurar que reciban la compensación justa que merecen.
          </p>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground mb-4">
                Nuestra misión es simple pero poderosa: proteger los derechos de los asegurados y asegurar que reciban la compensación completa y justa que merecen por sus pérdidas.
              </p>
              <p className="text-muted-foreground mb-4">
                Creemos que las aseguradoras tienen recursos y experiencia para minimizar pagos, por lo que nuestros clientes necesitan un defensor igualmente preparado. Ese es nuestro rol.
              </p>
              <p className="text-muted-foreground">
                No cobramos nada hasta que tu reclamo sea aprobado. Tu éxito es nuestro éxito.
              </p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Nuestros Valores</h3>
              <div className="space-y-4">
                {values.map((value) => {
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
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Logros</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
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
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo está compuesto por ajustadores públicos certificados con años de experiencia en la industria de seguros. Cada miembro de nuestro equipo está comprometido con proporcionar el más alto nivel de servicio a nuestros clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Andres García",
                  title: "Ajustador Público Certificado",
                  experience: "12+ años",
                },
                {
                  name: "Carlos López",
                  title: "Especialista en Daños Estructurales",
                  experience: "10+ años",
                },
                {
                  name: "Maria Rodriguez",
                  title: "Coordinadora de Reclamos",
                  experience: "8+ años",
                },
              ].map((member) => (
                <Card key={member.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary mb-2">{member.title}</p>
                    <p className="text-sm text-muted-foreground">{member.experience} de experiencia</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">¿Por Qué Elegirnos?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Ajustadores públicos certificados y licenciados",
                "Representación legal profesional",
                "Experiencia en negociación con aseguradoras",
                "Acceso a herramientas especializadas de evaluación",
                "Conocimiento profundo de códigos de construcción",
                "Documentación profesional y fotográfica",
                "Sin cargos hasta que ganes tu reclamo",
                "Comunicación clara y transparente",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para Comenzar?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contáctanos hoy para una consulta gratuita. Evaluaremos tu caso sin compromiso.
            </p>
            <Button size="lg" onClick={() => navigate("/#contacto")}>
              Solicitar Consulta Gratuita
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
