import { useState } from "react";
import { useLocation, useRoute, Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderProps {
  onLogout?: () => void;
}

export default function Header({ onLogout }: HeaderProps) {
  const [location, navigate] = useLocation();
  const [isAdminChat] = useRoute("/admin/chat");
  const [isAdminLogin] = useRoute("/admin/login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const isPublicPage = !isAdminChat && !isAdminLogin;

  const content = {
    en: {
      brandTitle: "Public Adjuster",
      brandSubtitle: "Claims Experts",
      navItems: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/servicios" },
        { label: "Projects", href: "/proyectos" },
        { label: "About Us", href: "/sobre-nosotros" },
        { label: "Contact", href: "/contacto" },
      ],
      actions: {
        trackCase: "Track Case",
        admin: "Admin",
        logout: "Log out",
      },
      languageLabel: "ES",
      languageAria: "Switch language to Spanish",
    },
    es: {
      brandTitle: "Ajustador Publico",
      brandSubtitle: "Expertos en Reclamos",
      navItems: [
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: "Proyectos Realizados", href: "/proyectos" },
        { label: "Sobre Nosotros", href: "/sobre-nosotros" },
        { label: "Contacto", href: "/contacto" },
      ],
      actions: {
        trackCase: "Rastrear Caso",
        admin: "Admin",
        logout: "Cerrar Sesion",
      },
      languageLabel: "EN",
      languageAria: "Cambiar idioma a ingles",
    },
  };

  const copy = content[language];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">{copy.brandTitle}</h1>
              <p className="text-xs text-muted-foreground">{copy.brandSubtitle}</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {isPublicPage && (
          <nav className="hidden md:flex items-center gap-6">
            {copy.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {isPublicPage && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/track-case")}
                className="hidden sm:flex"
              >
                {copy.actions.trackCase}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/admin/login")}
                className="hidden sm:flex"
              >
                {copy.actions.admin}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                aria-label={copy.languageAria}
                className="hidden sm:flex"
              >
                {copy.languageLabel}
              </Button>
              <Button
                variant="default"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </>
          )}

          {isAdminChat && onLogout && (
            <Button variant="destructive" size="sm" onClick={onLogout}>
              {copy.actions.logout}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isPublicPage && mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-3">
            {copy.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="justify-start"
              aria-label={copy.languageAria}
            >
              {copy.languageLabel}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/admin/login");
              }}
              className="justify-start"
            >
              {copy.actions.admin}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
