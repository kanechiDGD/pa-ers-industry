import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [, navigate] = useLocation();

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Sobre Nosotros", href: "/sobre-nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Rastrear Caso", href: "/track-case" },
  ];

  const legalLinks = [
    { label: "Política de Privacidad (ES)", href: "/privacy-policy-es" },
    { label: "Privacy Policy (EN)", href: "/privacy-policy-en" },
    { label: "Términos de Servicio (ES)", href: "/terms-es" },
    { label: "Terms of Service (EN)", href: "/terms-en" },
    { label: "Aviso Legal (ES)", href: "/legal-notice-es" },
    { label: "Legal Notice (EN)", href: "/legal-notice-en" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">PA & ERS INDUSTRY</h3>
            <p className="text-slate-400 text-sm mb-4">
              Ajustadores Públicos Certificados dedicados a proteger tus derechos y maximizar tu compensación.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:6305384741" className="hover:text-white">630-538-4741</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:office@pa-ers-industry.com" className="hover:text-white">office@pa-ers-industry.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <p>1650 N Randall Rd</p>
                  <p>Aurora, Illinois 60506</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/servicios" className="hover:text-white">Daños en Techos</a></li>
              <li><a href="/servicios" className="hover:text-white">Daños por Agua</a></li>
              <li><a href="/servicios" className="hover:text-white">Daños por Incendio</a></li>
              <li><a href="/servicios" className="hover:text-white">Daños por Tormentas</a></li>
              <li><a href="/servicios" className="hover:text-white">Asesoramiento de Pólizas</a></li>
              <li><a href="/servicios" className="hover:text-white">Ver Todos los Servicios</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {currentYear} PA & ERS INDUSTRY. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => navigate("/privacy-policy-es")} className="hover:text-white">
                Privacidad
              </button>
              <button onClick={() => navigate("/terms-es")} className="hover:text-white">
                Términos
              </button>
              <button onClick={() => navigate("/legal-notice-es")} className="hover:text-white">
                Legal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
