import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalNoticeES() {
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

          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Identificación</h2>
              <p>
                Denominación Social: PA & ERS INDUSTRY
              </p>
              <p>
                Domicilio: 1650 N Randall Rd, Aurora, Illinois 60506, Estados Unidos
              </p>
              <p>
                Teléfono: 630-538-4741
              </p>
              <p>
                Email: office@pa-ers-industry.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Objeto de la Empresa</h2>
              <p>
                PA & ERS INDUSTRY es una empresa de ajustadores públicos certificados que proporciona servicios de evaluación de reclamos de seguros, negociación con aseguradoras y asesoramiento sobre pólizas de seguros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos, diseños, textos, gráficos, imágenes, videos y demás materiales disponibles en este sitio web son propiedad de PA & ERS INDUSTRY o están debidamente autorizados. Está prohibida su reproducción, distribución o transmisión sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Responsabilidad del Contenido</h2>
              <p>
                PA & ERS INDUSTRY se esfuerza por mantener la información del sitio web actualizada y precisa. Sin embargo, no garantiza la exactitud, integridad o actualidad de los contenidos. El usuario utiliza la información bajo su propia responsabilidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Servicios Profesionales</h2>
              <p>
                Los servicios de evaluación y asesoramiento proporcionados por PA & ERS INDUSTRY son estimaciones profesionales basadas en información disponible. No constituyen garantías de resultados específicos. La compensación final dependerá de factores fuera de nuestro control, incluyendo decisiones de aseguradoras y autoridades judiciales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Cumplimiento Legal</h2>
              <p>
                PA & ERS INDUSTRY opera en cumplimiento con todas las leyes y regulaciones aplicables del Estado de Illinois y las leyes federales de los Estados Unidos. Nuestros ajustadores poseen las certificaciones y licencias requeridas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Protección de Datos</h2>
              <p>
                La información personal recopilada a través de este sitio web se trata de acuerdo con nuestra Política de Privacidad. Consulta esa política para más información sobre cómo protegemos tus datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitación de Responsabilidad</h2>
              <p>
                PA & ERS INDUSTRY no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso de este sitio web o de los servicios proporcionados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Enlaces Externos</h2>
              <p>
                Este sitio web puede contener enlaces a sitios web de terceros. PA & ERS INDUSTRY no es responsable del contenido, disponibilidad o prácticas de estos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Modificaciones</h2>
              <p>
                PA & ERS INDUSTRY se reserva el derecho de modificar este Aviso Legal en cualquier momento. Los cambios serán efectivos cuando se publiquen en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">11. Ley Aplicable</h2>
              <p>
                Este Aviso Legal se rige por las leyes del Estado de Illinois, sin considerar sus disposiciones sobre conflictos de leyes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">12. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal, contáctanos en:
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
