import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

type UserType = "homeowner" | "company" | null;
type EmailPurpose = "existing-claim" | "information" | "other" | null;
type Step = "user-type" | "email-purpose" | "questions" | "preview" | "sent";

interface EmailData {
  userType: UserType;
  emailPurpose: EmailPurpose;
  name: string;
  email: string;
  phone: string;
  propertyAddress?: string;
  claimNumber?: string;
  damageType?: string;
  damageDescription: string;
  customMessage?: string;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
}

export default function EmailBuilder({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage();
  const [step, setStep] = useState<Step>("user-type");
  const [userType, setUserType] = useState<UserType>(null);
  const [emailPurpose, setEmailPurpose] = useState<EmailPurpose>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    claimNumber: "",
    damageType: "",
    damageDescription: "",
    customMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copy = {
    en: {
      requiredError: "Please complete all required fields",
      sendSuccess: "Email sent successfully",
      sendError: "Error sending the email",
      processError: "Error processing your request",
      emailSubject: (name: string) => `New Client Email - ${name}`,
      emailLabels: {
        userType: "User Type",
        purpose: "Purpose",
        name: "Name",
        email: "Email",
        phone: "Phone",
        propertyAddress: "Property Address",
        claimNumber: "Claim Number",
        damageType: "Damage Type",
        damageDescription: "Damage Description",
        additionalMessage: "Additional Message",
      },
      userTypes: {
        homeowner: "Homeowner",
        company: "Company",
      },
      purposes: {
        "existing-claim": "Question about an existing claim",
        information: "Information request",
        other: "Other",
      },
      step1: {
        title: "Who are you?",
        body: "Select your user type to personalize your experience",
        homeownerTitle: "Homeowner",
        homeownerDesc: "I own a property",
        companyTitle: "Company",
        companyDesc: "I represent a business",
        cancel: "Cancel",
      },
      step2: {
        title: "What is your purpose?",
        body: "What type of inquiry do you have?",
        existingTitle: "I have an existing claim",
        existingDesc: "I want to ask about a claim I already started",
        infoTitle: "I need information",
        infoDesc: "I want to learn more about your services",
        otherTitle: "Other",
        otherDesc: "I have another question",
        back: "Back",
      },
      step3: {
        title: "Contact Information",
        name: "Name *",
        email: "Email *",
        phone: "Phone",
        propertyAddress: "Property Address",
        claimNumber: "Claim Number",
        damageType: "Damage Type",
        damageDescription: "Damage Description *",
        additionalMessage: "Additional Message",
        propertyPlaceholder: "1650 N Randall Rd, Aurora, IL 60506",
        claimPlaceholder: "Example: CLM-2024-001",
        damagePlaceholder: "Tell us about the damage you experienced...",
        messagePlaceholder: "Anything else you want to add?",
        selectDamage: "Select a damage type",
        damageOptions: [
          { value: "roof", label: "Roof Damage" },
          { value: "water", label: "Water Damage" },
          { value: "fire", label: "Fire Damage" },
          { value: "storm", label: "Storm Damage" },
          { value: "siding", label: "Siding Damage" },
          { value: "other", label: "Other" },
        ],
        back: "Back",
        next: "Next",
      },
      step4: {
        title: "Review Your Email",
        edit: "Edit",
        sending: "Sending...",
        send: "Send Email",
      },
      step5: {
        title: "Email Sent",
        body: "Your email was sent successfully. We will contact you soon.",
        close: "Close",
      },
    },
    es: {
      requiredError: "Por favor completa todos los campos requeridos",
      sendSuccess: "Email enviado exitosamente",
      sendError: "Error al enviar el email",
      processError: "Error al procesar tu solicitud",
      emailSubject: (name: string) => `Nuevo Email del Cliente - ${name}`,
      emailLabels: {
        userType: "Tipo de Usuario",
        purpose: "Proposito",
        name: "Nombre",
        email: "Email",
        phone: "Telefono",
        propertyAddress: "Direccion de Propiedad",
        claimNumber: "Numero de Reclamo",
        damageType: "Tipo de Dano",
        damageDescription: "Descripcion del Dano",
        additionalMessage: "Mensaje Adicional",
      },
      userTypes: {
        homeowner: "Propietario",
        company: "Empresa",
      },
      purposes: {
        "existing-claim": "Consulta sobre reclamo existente",
        information: "Solicitud de informacion",
        other: "Otro",
      },
      step1: {
        title: "Quien eres?",
        body: "Selecciona tu tipo de usuario para personalizar tu experiencia",
        homeownerTitle: "Propietario",
        homeownerDesc: "Soy dueno de una propiedad",
        companyTitle: "Empresa",
        companyDesc: "Represento una empresa",
        cancel: "Cancelar",
      },
      step2: {
        title: "Cual es tu proposito?",
        body: "Que tipo de consulta tienes?",
        existingTitle: "Tengo un reclamo existente",
        existingDesc: "Quiero consultar sobre un reclamo que ya he iniciado",
        infoTitle: "Solicito informacion",
        infoDesc: "Quiero saber mas sobre vuestros servicios",
        otherTitle: "Otro",
        otherDesc: "Tengo otra consulta",
        back: "Atras",
      },
      step3: {
        title: "Informacion de Contacto",
        name: "Nombre *",
        email: "Email *",
        phone: "Telefono",
        propertyAddress: "Direccion de la Propiedad",
        claimNumber: "Numero de Reclamo",
        damageType: "Tipo de Dano",
        damageDescription: "Descripcion del Dano *",
        additionalMessage: "Mensaje Adicional",
        propertyPlaceholder: "1650 N Randall Rd, Aurora, IL 60506",
        claimPlaceholder: "Ej: CLM-2024-001",
        damagePlaceholder: "Cuentanos sobre el dano que has sufrido...",
        messagePlaceholder: "Hay algo mas que quieras agregar?",
        selectDamage: "Selecciona un tipo de dano",
        damageOptions: [
          { value: "roof", label: "Dano en Techo" },
          { value: "water", label: "Dano por Agua" },
          { value: "fire", label: "Dano por Incendio" },
          { value: "storm", label: "Dano por Tormenta" },
          { value: "siding", label: "Dano en Revestimiento" },
          { value: "other", label: "Otro" },
        ],
        back: "Atras",
        next: "Siguiente",
      },
      step4: {
        title: "Revisa tu Email",
        edit: "Editar",
        sending: "Enviando...",
        send: "Enviar Email",
      },
      step5: {
        title: "Email Enviado",
        body: "Tu email ha sido enviado exitosamente. Nos pondremos en contacto pronto.",
        close: "Cerrar",
      },
    },
  };

  const text = copy[language];

  // Get user's IP and metadata
  const getClientMetadata = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return {
        ipAddress: data.ip,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };
    } catch {
      return {
        ipAddress: "Unknown",
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };
    }
  };

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep("email-purpose");
  };

  const handleEmailPurposeSelect = (purpose: EmailPurpose) => {
    setEmailPurpose(purpose);
    setStep("questions");
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.damageDescription) {
      toast.error(text.requiredError);
      return;
    }
    setStep("preview");
  };

  const handleBack = () => {
    if (step === "email-purpose") {
      setUserType(null);
      setStep("user-type");
    } else if (step === "questions") {
      setEmailPurpose(null);
      setStep("email-purpose");
    } else if (step === "preview") {
      setStep("questions");
    }
  };

  const generateEmailContent = () => {
    const userTypeLabel = userType ? text.userTypes[userType] : "";
    const purposeLabel = emailPurpose ? text.purposes[emailPurpose] : "";
    let content = `${text.emailLabels.userType}: ${userTypeLabel}\n`;
    content += `${text.emailLabels.purpose}: ${purposeLabel}\n\n`;

    content += `${text.emailLabels.name}: ${formData.name}\n`;
    content += `${text.emailLabels.email}: ${formData.email}\n`;
    content += `${text.emailLabels.phone}: ${formData.phone}\n\n`;

    if (formData.propertyAddress) {
      content += `${text.emailLabels.propertyAddress}: ${formData.propertyAddress}\n`;
    }
    if (formData.claimNumber) {
      content += `${text.emailLabels.claimNumber}: ${formData.claimNumber}\n`;
    }
    if (formData.damageType) {
      content += `${text.emailLabels.damageType}: ${formData.damageType}\n`;
    }

    content += `\n${text.emailLabels.damageDescription}:\n${formData.damageDescription}\n`;

    if (formData.customMessage) {
      content += `\n${text.emailLabels.additionalMessage}:\n${formData.customMessage}\n`;
    }

    return content;
  };

  const handleSendEmail = async () => {
    setIsSubmitting(true);

    try {
      const metadata = await getClientMetadata();

      const emailData: EmailData = {
        userType,
        emailPurpose,
        ...formData,
        ...metadata,
      };

      // Send to backend (you'll need to set up an API endpoint)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "andrescaro650@gmail.com",
          subject: text.emailSubject(formData.name),
          content: generateEmailContent(),
          metadata: emailData,
        }),
      });

      if (response.ok) {
        setStep("sent");
        toast.success(text.sendSuccess);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        toast.error(text.sendError);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(text.processError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step 1: User Type Selection */}
      {step === "user-type" && (
        <Card>
          <CardHeader>
            <CardTitle>{text.step1.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-6">{text.step1.body}</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleUserTypeSelect("homeowner")}
                className="p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-center"
              >
                <p className="font-bold text-lg mb-2">{text.step1.homeownerTitle}</p>
                <p className="text-sm text-muted-foreground">{text.step1.homeownerDesc}</p>
              </button>
              <button
                onClick={() => handleUserTypeSelect("company")}
                className="p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-center"
              >
                <p className="font-bold text-lg mb-2">{text.step1.companyTitle}</p>
                <p className="text-sm text-muted-foreground">{text.step1.companyDesc}</p>
              </button>
            </div>
            <Button onClick={onClose} variant="outline" className="w-full mt-4">
              {text.step1.cancel}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Email Purpose Selection */}
      {step === "email-purpose" && (
        <Card>
          <CardHeader>
            <CardTitle>{text.step2.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-6">{text.step2.body}</p>
            <div className="space-y-3">
              <button
                onClick={() => handleEmailPurposeSelect("existing-claim")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">{text.step2.existingTitle}</p>
                <p className="text-sm text-muted-foreground">{text.step2.existingDesc}</p>
              </button>
              <button
                onClick={() => handleEmailPurposeSelect("information")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">{text.step2.infoTitle}</p>
                <p className="text-sm text-muted-foreground">{text.step2.infoDesc}</p>
              </button>
              <button
                onClick={() => handleEmailPurposeSelect("other")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">{text.step2.otherTitle}</p>
                <p className="text-sm text-muted-foreground">{text.step2.otherDesc}</p>
              </button>
            </div>
            <Button onClick={handleBack} variant="outline" className="w-full mt-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {text.step2.back}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Questions */}
      {step === "questions" && (
        <Card>
          <CardHeader>
            <CardTitle>{text.step3.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{text.step3.name}</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder={text.step3.name.replace(" *", "")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{text.step3.email}</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder={text.step3.email.replace(" *", "").toLowerCase()}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{text.step3.phone}</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="(630) 538-4741"
              />
            </div>

            {userType === "homeowner" && (
              <div>
                <label className="block text-sm font-medium mb-2">{text.step3.propertyAddress}</label>
                <Input
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleFormChange}
                  placeholder={text.step3.propertyPlaceholder}
                />
              </div>
            )}

            {emailPurpose === "existing-claim" && (
              <div>
                <label className="block text-sm font-medium mb-2">{text.step3.claimNumber}</label>
                <Input
                  name="claimNumber"
                  value={formData.claimNumber}
                  onChange={handleFormChange}
                  placeholder={text.step3.claimPlaceholder}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">{text.step3.damageType}</label>
              <select
                name="damageType"
                value={formData.damageType}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="">{text.step3.selectDamage}</option>
                {text.step3.damageOptions.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{text.step3.damageDescription}</label>
              <Textarea
                name="damageDescription"
                value={formData.damageDescription}
                onChange={handleFormChange}
                placeholder={text.step3.damagePlaceholder}
                rows={5}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{text.step3.additionalMessage}</label>
              <Textarea
                name="customMessage"
                value={formData.customMessage}
                onChange={handleFormChange}
                placeholder={text.step3.messagePlaceholder}
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleBack} variant="outline" className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {text.step3.back}
              </Button>
              <Button onClick={handleNext} className="flex-1">
                {text.step3.next}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Preview */}
      {step === "preview" && (
        <Card>
          <CardHeader>
            <CardTitle>{text.step4.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 whitespace-pre-wrap text-sm font-mono max-h-96 overflow-y-auto">
              {generateEmailContent()}
            </div>

            <div className="flex gap-2">
              <Button onClick={handleBack} variant="outline" className="flex-1">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {text.step4.edit}
              </Button>
              <Button onClick={handleSendEmail} disabled={isSubmitting} className="flex-1">
                {isSubmitting ? text.step4.sending : text.step4.send}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 5: Sent Confirmation */}
      {step === "sent" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="h-6 w-6 text-green-600" />
              {text.step5.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{text.step5.body}</p>
            <Button onClick={onClose} className="w-full">
              {text.step5.close}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
