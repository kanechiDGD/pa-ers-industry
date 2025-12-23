import { useState } from "react";
import { MessageCircle, Shield, Award, FileCheck, Home as HomeIcon, Wrench, Wind, DoorOpen, Droplets, Car, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import ChatSection from "@/components/ChatSection";
import ContactModal from "@/components/ContactModal";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedDamageType, setSelectedDamageType] = useState<string | null>(null);
  const [damageModalOpen, setDamageModalOpen] = useState(false);

  const damageTypes = [
    {
      id: "techo",
      name: "Techo",
      icon: HomeIcon,
      description: "Daños por granizo, viento, o desgaste. Evaluamos la estructura completa.",
      details: "Los daños en techos son uno de los reclamos más comunes. Nuestros expertos identifican daños ocultos que las aseguradoras frecuentemente pasan por alto, incluyendo daños estructurales bajo la superficie y problemas de drenaje. Utilizamos códigos de construcción actualizados para maximizar tu reclamo.",
    },
    {
      id: "revestimiento",
      name: "Revestimiento",
      icon: Shield,
      description: "Impactos en siding, grietas, o desprendimientos por eventos climáticos.",
      details: "El revestimiento protege la estructura de tu hogar. Los daños pueden ser cosméticos o estructurales. Evaluamos el alcance completo del daño y negociamos el reemplazo total cuando sea apropiado, no solo reparaciones parciales.",
    },
    {
      id: "canaletas",
      name: "Canaletas",
      icon: Droplets,
      description: "Daños en sistemas de drenaje que pueden causar problemas estructurales.",
      details: "Las canaletas dañadas pueden causar daños por agua significativos en el futuro. Documentamos estos problemas y los incluimos en tu reclamo para evitar daños adicionales. Las aseguradoras a menudo intentan excluir estos daños, pero nosotros sabemos cómo argumentar su cobertura.",
    },
    {
      id: "ventanas",
      name: "Ventanas",
      icon: DoorOpen,
      description: "Roturas, filtraciones, o daños por impacto que comprometen la seguridad.",
      details: "Las ventanas rotas no solo afectan la seguridad, sino que también pueden causar daños por agua y pérdida de energía. Evaluamos todas las ventanas afectadas y negociamos reemplazos de calidad, no solo reparaciones temporales.",
    },
    {
      id: "interior",
      name: "Interior",
      icon: Wrench,
      description: "Daños por agua, moho, o problemas estructurales internos.",
      details: "Los daños interiores son frecuentemente subestimados. Identificamos daños por agua, moho, daños estructurales y problemas de sistemas (eléctricos, plomería). Documentamos todo profesionalmente para asegurar cobertura completa.",
    },
    {
      id: "garaje",
      name: "Garaje",
      icon: Car,
      description: "Puertas, techos, y estructuras de garaje afectadas por eventos externos.",
      details: "Los garajes sufren daños significativos en tormentas. Evaluamos puertas, techos, paredes y sistemas de apertura. Muchas aseguradoras intentan limitar la cobertura del garaje, pero nosotros aseguramos que recibas la compensación completa.",
    },
  ];

  const caseStudies = [
    {
      title: "Caso 1: Daño por Granizo",
      initial: "Negación Inicial",
      result: "Aprobación Completa",
      description:
        "La aseguradora negó el reclamo alegando desgaste normal. Identificamos daños ocultos en el techo y aplicamos códigos de construcción para obtener aprobación total.",
      image: "/case-hail-damage.jpg",
    },
    {
      title: "Caso 2: Daño por Incendio",
      initial: "Oferta Parcial",
      result: "Aumento del 250%",
      description:
        "Oferta inicial de $45,000. Documentamos daños estructurales, daños por humo en el interior, y daños en sistemas. Negociamos hasta $112,500 para reconstrucción completa de la vivienda.",
      image: "/case-fire-restoration.jpg",
    },
    {
      title: "Caso 3: Filtración de Agua",
      initial: "Exclusión Aplicada",
      result: "Reclamo Aprobado",
      description:
        "La aseguradora aplicó exclusión por mantenimiento. Demostramos que el daño fue por evento súbito cubierto por la póliza.",
      image: "/service-water.jpg",
    },
    {
      title: "Caso 4: Daño Interior",
      initial: "Negación por Documentación",
      result: "Pago Completo",
      description:
        "Reclamo negado por falta de evidencia. Realizamos inspección detallada, documentamos con fotos y reportes técnicos para lograr aprobación.",
      image: "/service-interior.jpg",
    },
  ];

  return (
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
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            Expertos en Reclamos de Seguros - Protegemos Tus Derechos
          </p>

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
              Iniciar Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              className="text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-slate-900"
            >
              Contactar
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section with Graphics */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Tipos de Daños que Evaluamos
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Hemos ayudado a cientos de familias a obtener la compensación que merecen. Nuestros expertos certificados evalúan cada tipo de daño con precisión, identificando problemas que las aseguradoras frecuentemente ignoran. Hacemos esto porque creemos que tienes derecho a una compensación justa y completa. Cuando trabajas con nosotros, trabajas con profesionales que conocen cada código de construcción, cada exclusión de póliza, y cada tácica que usan las aseguradoras para minimizar pagos.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Mitigación de Agua", image: "/service-water.jpg", icon: Droplets },
              { title: "Daños por Incendio", image: "/service-fire.jpg", icon: Shield },
              { title: "Daños por Tormentas", image: "/service-storm.jpg", icon: Wind },
              { title: "Daños Interiores", image: "/service-interior.jpg", icon: Wrench },
            ].map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Evaluación profesional y negociación experta para maximizar tu reclamo.
                    </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            ¿Qué es un Ajustador Público?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Ajustador Público
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trabaja para TI. Representa tus intereses y maximiza tu reclamo. Solo cobra si ganas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Ajustador de Seguros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trabaja para la ASEGURADORA. Su objetivo es minimizar el pago de tu reclamo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-primary" />
                  Ajustador Independiente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contratado por la aseguradora para evaluar daños. No representa tus intereses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-100 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">Exclusiones de Pólizas</h3>
            <p className="text-muted-foreground mb-4">
              Las aseguradoras a menudo intentan aplicar exclusiones incorrectamente. Conocemos las diferencias clave:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Daño súbito vs. desgaste gradual</li>
              <li>• Eventos cubiertos vs. mantenimiento diferido</li>
              <li>• Daños directos vs. indirectos</li>
              <li>• Aplicación correcta de códigos de construcción</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 p-8 rounded-lg text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4 shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes Preguntas?</h3>
            <div className="bg-white border-2 border-green-500 rounded-lg p-4 mb-6 shadow-md inline-block">
              <p className="text-base text-foreground mb-2 font-semibold text-green-700">
                ✓ Completamente Gratuito
              </p>
              <p className="text-base text-foreground mb-2 font-semibold text-green-700">
                ✓ 100% Anónimo - No necesitas darnos tus datos
              </p>
              <p className="text-base text-foreground font-semibold text-green-700">
                ✓ Sin Compromiso - Solo consulta y obtén asesoramiento
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              Inicia una consulta anónima y confidencial. Te asignaremos un PIN para que puedas continuar la conversación en cualquier momento, desde cualquier dispositivo.
            </p>
            <Button
              size="lg"
              onClick={() => {
                const chatSection = document.getElementById("chat");
                chatSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Iniciar Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Damage Types Modal Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Tipos de Daños Detallados
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Haz clic en cada tipo de daño para conocer más detalles sobre cómo podemos ayudarte
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
                    <p className="text-xs text-primary mt-4">Haz clic para más detalles →</p>
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
            <DialogTitle>
              {damageTypes.find((d) => d.id === selectedDamageType)?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {damageTypes.find((d) => d.id === selectedDamageType)?.details}
            </p>
            <Button onClick={() => setDamageModalOpen(false)} className="w-full">
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Credentials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Nuestras Credenciales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Licencias Estatales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Licenciados y certificados en múltiples estados para representarte legalmente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Permisos Municipales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conocimiento profundo de regulaciones locales y códigos de construcción.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Equipos de Construcción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acceso a herramientas especializadas para evaluación precisa de daños.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Códigos de Construcción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expertos en aplicación de códigos que pueden aumentar significativamente tu reclamo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Diferencia Clave</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A diferencia de contratistas, estamos certificados para negociar directamente con aseguradoras.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experiencia Comprobada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Años de experiencia maximizando reclamos y protegiendo los derechos de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Casos de Éxito
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Ajustador Público vs Contratista
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Ajustador Público</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Licenciado para negociar con aseguradoras
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Representa tus intereses legalmente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Maximiza el valor de tu reclamo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Conoce códigos y regulaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    Solo cobra si ganas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contratista</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <li>• Realiza reparaciones físicas</li>
                  </li>
                  <li className="flex items-center gap-2">
                    <li>• No puede negociar legalmente</li>
                  </li>
                  <li className="flex items-center gap-2">
                    <li>• Interés en obtener el trabajo</li>
                  </li>
                  <li className="flex items-center gap-2">
                    <li>• Puede subestimar daños</li>
                  </li>
                  <li className="flex items-center gap-2">
                    <li>• Cobra por servicios de reparación</li>
                  </li>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agenda Tu Consulta Gratuita
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No cobramos nada hasta que tu reclamo sea aprobado. Tu éxito es nuestro éxito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setContactModalOpen(true)}
              className="text-lg"
            >
              Contactar Ahora
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
              Iniciar Chat Anónimo
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
