import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyES() {
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

          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

          <div className="prose prose-sm max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introducción</h2>
              <p>
                PA & ERS INDUSTRY ("nosotros", "nuestro" o "la Empresa") se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Información que Recopilamos</h2>
              <p>Recopilamos información de varias maneras:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Información que proporcionas:</strong> Nombre, correo electrónico, número de teléfono, dirección y otros detalles cuando completas formularios de contacto o consultas.</li>
                <li><strong>Información automática:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y otros datos de uso del sitio.</li>
                <li><strong>Cookies:</strong> Utilizamos cookies para mejorar tu experiencia de navegación.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Cómo Utilizamos Tu Información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a tus consultas y solicitudes</li>
                <li>Proporcionar servicios de evaluación de reclamos</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Enviar comunicaciones de marketing (con tu consentimiento)</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Prevenir fraude y actividades ilegales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Compartición de Información</h2>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o cumplir con la ley. Podemos compartir información con:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Aseguradoras cuando sea necesario para procesar reclamos</li>
                <li>Autoridades legales cuando sea requerido por ley</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Seguridad de la Información</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, no podemos garantizar seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Derechos del Usuario</h2>
              <p>Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Optar por no recibir comunicaciones de marketing</li>
                <li>Revocar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies y Tecnologías de Rastreo</h2>
              <p>
                Utilizamos cookies para mejorar tu experiencia. Puedes controlar las cookies a través de la configuración de tu navegador. La desactivación de cookies puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Enlaces a Sitios Externos</h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables por las prácticas de privacidad de estos sitios. Te recomendamos revisar sus políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Cambios a Esta Política</h2>
              <p>
                Podemos actualizar esta Política de Privacidad en cualquier momento. Los cambios serán efectivos cuando se publiquen en el sitio. Tu uso continuado del sitio constituye aceptación de los cambios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:
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
