import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsES() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al Inicio
          </button>

          <h1 className="text-4xl font-bold mb-8">Términos de Servicio</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceptación de Términos</h2>
              <p>
                Al acceder y utilizar este sitio web, aceptas estar vinculado por estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso del Sitio Web</h2>
              <p>Te comprometes a utilizar este sitio web únicamente para propósitos legales y de manera que no infrinja los derechos de otros ni restrinja su uso y disfrute del sitio web.</p>
              <p>Específicamente, te comprometes a no:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acosar o causar vergüenza, alarma o angustia a cualquier persona</li>
                <li>Transmitir obscenidades u contenido ofensivo</li>
                <li>Interrumpir el flujo normal de diálogo dentro del sitio web</li>
                <li>Intentar obtener acceso no autorizado a sistemas informáticos</li>
                <li>Recopilar o rastrear información personal de otros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Contenido del Sitio Web</h2>
              <p>
                Todo el contenido en este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de PA & ERS INDUSTRY o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Servicios de Evaluación</h2>
              <p>
                Las evaluaciones proporcionadas por PA & ERS INDUSTRY son estimaciones basadas en información disponible. No constituyen asesoramiento legal ni garantías de resultados. Cada caso es único y los resultados pueden variar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitación de Responsabilidad</h2>
              <p>
                PA & ERS INDUSTRY no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de ganancias, datos o uso, incluso si se ha advertido de la posibilidad de tales daños.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Exención de Garantías</h2>
              <p>
                Este sitio web se proporciona "tal cual" sin garantías de ningún tipo, expresas o implícitas. PA & ERS INDUSTRY no garantiza que el sitio sea libre de errores, virus o componentes dañinos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Enlaces Externos</h2>
              <p>
                Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables por el contenido, precisión o prácticas de estos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Modificación de Términos</h2>
              <p>
                PA & ERS INDUSTRY se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de la publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Ley Aplicable</h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes del Estado de Illinois, sin considerar sus disposiciones sobre conflictos de leyes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: office@pa-ers-industry.com</li>
                <li>Teléfono: 630-538-4741</li>
                <li>Dirección: 1650 N Randall Rd, Aurora, Illinois 60506</li>
              </ul>
            </section>

            <section>
              <p className="text-sm text-muted-foreground mt-8">
                Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
