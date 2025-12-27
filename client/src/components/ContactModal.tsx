import { useState } from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmailBuilder from "./EmailBuilder";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PHONE = "6305384741";
const EMAIL = "office@pa-ers-industry.com";

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [showEmailBuilder, setShowEmailBuilder] = useState(false);
  const { language } = useLanguage();

  const copy = {
    en: {
      builderTitle: "Build a Custom Email",
      builderBody: "We will guide you to create the perfect email",
      modalTitle: "Contact Us",
      modalBody: "Choose how you prefer to reach us",
      call: "Call",
      buildEmail: "Build Email",
      buildEmailBody: "We help you draft your email",
      directEmail: "Send Direct Email",
      footer: "We will respond as soon as possible",
    },
    es: {
      builderTitle: "Construir Email Personalizado",
      builderBody: "Te guiaremos para crear el email perfecto",
      modalTitle: "Contactanos",
      modalBody: "Elige como prefieres comunicarte con nosotros",
      call: "Llamar",
      buildEmail: "Construir Email",
      buildEmailBody: "Te ayudamos a redactar tu email",
      directEmail: "Enviar Email Directo",
      footer: "Responderemos tu consulta lo antes posible",
    },
  };

  const text = copy[language];

  if (showEmailBuilder) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{text.builderTitle}</DialogTitle>
            <DialogDescription>{text.builderBody}</DialogDescription>
          </DialogHeader>
          <EmailBuilder
            onClose={() => {
              setShowEmailBuilder(false);
              onOpenChange(false);
            }}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{text.modalTitle}</DialogTitle>
          <DialogDescription>{text.modalBody}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-4">
          {/* Call Option */}
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold">{text.call}</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                630-538-4741
              </p>
            </div>
          </a>

          {/* Smart Email Builder Option */}
          <button
            onClick={() => setShowEmailBuilder(true)}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold">{text.buildEmail}</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                {text.buildEmailBody}
              </p>
            </div>
          </button>

          {/* Email Option */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold">{text.directEmail}</p>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 break-all">
                {EMAIL}
              </p>
            </div>
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground pt-2">{text.footer}</p>
      </DialogContent>
    </Dialog>
  );
}
