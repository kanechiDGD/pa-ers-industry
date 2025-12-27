import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      company: {
        name: "PA & ERS INDUSTRY",
        description:
          "Certified public adjusters dedicated to protecting your rights and maximizing your compensation.",
      },
      navTitle: "Navigation",
      navLinks: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/servicios" },
        { label: "Projects", href: "/proyectos" },
        { label: "About Us", href: "/sobre-nosotros" },
        { label: "Contact", href: "/contacto" },
        { label: "Track Case", href: "/track-case" },
      ],
      servicesTitle: "Services",
      services: [
        "Roof Damage",
        "Water Damage",
        "Fire Damage",
        "Storm Damage",
        "Policy Guidance",
        "View All Services",
      ],
      legalTitle: "Legal",
      legalLinks: [
        { label: "Privacy Policy", href: "/privacy-policy-en" },
        { label: "Terms of Service", href: "/terms-en" },
        { label: "Legal Notice", href: "/legal-notice-en" },
      ],
      footerLinks: [
        { label: "Privacy", href: "/privacy-policy-en" },
        { label: "Terms", href: "/terms-en" },
        { label: "Legal", href: "/legal-notice-en" },
      ],
      rights: "All rights reserved.",
    },
    es: {
      company: {
        name: "PA & ERS INDUSTRY",
        description:
          "Ajustadores publicos certificados dedicados a proteger tus derechos y maximizar tu compensacion.",
      },
      navTitle: "Navegacion",
      navLinks: [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: "Proyectos", href: "/proyectos" },
        { label: "Sobre Nosotros", href: "/sobre-nosotros" },
        { label: "Contacto", href: "/contacto" },
        { label: "Rastrear Caso", href: "/track-case" },
      ],
      servicesTitle: "Servicios",
      services: [
        "Danos en Techos",
        "Danos por Agua",
        "Danos por Incendio",
        "Danos por Tormentas",
        "Asesoramiento de Polizas",
        "Ver Todos los Servicios",
      ],
      legalTitle: "Legal",
      legalLinks: [
        { label: "Politica de Privacidad", href: "/privacy-policy-es" },
        { label: "Terminos de Servicio", href: "/terms-es" },
        { label: "Aviso Legal", href: "/legal-notice-es" },
      ],
      footerLinks: [
        { label: "Privacidad", href: "/privacy-policy-es" },
        { label: "Terminos", href: "/terms-es" },
        { label: "Legal", href: "/legal-notice-es" },
      ],
      rights: "Todos los derechos reservados.",
    },
  };

  const copy = content[language];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{copy.company.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{copy.company.description}</p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:6305384741" className="hover:text-white">
                  630-538-4741
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:office@pa-ers-industry.com" className="hover:text-white">
                  office@pa-ers-industry.com
                </a>
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
            <h4 className="font-bold mb-4">{copy.navTitle}</h4>
            <ul className="space-y-2">
              {copy.navLinks.map((link) => (
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
            <h4 className="font-bold mb-4">{copy.servicesTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {copy.services.map((service) => (
                <li key={service}>
                  <a href="/servicios" className="hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">{copy.legalTitle}</h4>
            <ul className="space-y-2">
              {copy.legalLinks.map((link) => (
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
            <p>
              &copy; {currentYear} PA & ERS INDUSTRY. {copy.rights}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {copy.footerLinks.map((link) => (
                <button key={link.href} onClick={() => navigate(link.href)} className="hover:text-white">
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
