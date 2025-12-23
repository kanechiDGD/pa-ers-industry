import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

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
      toast.error("Por favor completa todos los campos requeridos");
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
    let content = `Tipo de Usuario: ${userType === "homeowner" ? "Propietario" : "Empresa"}\n`;
    content += `Propósito: ${
      emailPurpose === "existing-claim"
        ? "Consulta sobre reclamo existente"
        : emailPurpose === "information"
          ? "Solicitud de información"
          : "Otro"
    }\n\n`;

    content += `Nombre: ${formData.name}\n`;
    content += `Email: ${formData.email}\n`;
    content += `Teléfono: ${formData.phone}\n\n`;

    if (formData.propertyAddress) {
      content += `Dirección de Propiedad: ${formData.propertyAddress}\n`;
    }
    if (formData.claimNumber) {
      content += `Número de Reclamo: ${formData.claimNumber}\n`;
    }
    if (formData.damageType) {
      content += `Tipo de Daño: ${formData.damageType}\n`;
    }

    content += `\nDescripción del Daño:\n${formData.damageDescription}\n`;

    if (formData.customMessage) {
      content += `\nMensaje Adicional:\n${formData.customMessage}\n`;
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
          subject: `Nuevo Email del Cliente - ${formData.name}`,
          content: generateEmailContent(),
          metadata: emailData,
        }),
      });

      if (response.ok) {
        setStep("sent");
        toast.success("Email enviado exitosamente");
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        toast.error("Error al enviar el email");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al procesar tu solicitud");
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
            <CardTitle>¿Quién eres?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-6">
              Selecciona tu tipo de usuario para personalizar tu experiencia
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleUserTypeSelect("homeowner")}
                className="p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-center"
              >
                <p className="font-bold text-lg mb-2">🏠 Propietario</p>
                <p className="text-sm text-muted-foreground">
                  Soy dueño de una propiedad
                </p>
              </button>
              <button
                onClick={() => handleUserTypeSelect("company")}
                className="p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-center"
              >
                <p className="font-bold text-lg mb-2">🏢 Empresa</p>
                <p className="text-sm text-muted-foreground">
                  Represento una empresa
                </p>
              </button>
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full mt-4"
            >
              Cancelar
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Email Purpose Selection */}
      {step === "email-purpose" && (
        <Card>
          <CardHeader>
            <CardTitle>¿Cuál es tu propósito?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-6">
              ¿Qué tipo de consulta tienes?
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleEmailPurposeSelect("existing-claim")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">📋 Tengo un reclamo existente</p>
                <p className="text-sm text-muted-foreground">
                  Quiero consultar sobre un reclamo que ya he iniciado
                </p>
              </button>
              <button
                onClick={() => handleEmailPurposeSelect("information")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">ℹ️ Solicito información</p>
                <p className="text-sm text-muted-foreground">
                  Quiero saber más sobre vuestros servicios
                </p>
              </button>
              <button
                onClick={() => handleEmailPurposeSelect("other")}
                className="w-full p-4 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition text-left"
              >
                <p className="font-bold mb-1">❓ Otro</p>
                <p className="text-sm text-muted-foreground">
                  Tengo otra consulta
                </p>
              </button>
            </div>
            <Button
              onClick={handleBack}
              variant="outline"
              className="w-full mt-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Atrás
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Questions */}
      {step === "questions" && (
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Teléfono
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="(630) 538-4741"
              />
            </div>

            {userType === "homeowner" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Dirección de la Propiedad
                </label>
                <Input
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleFormChange}
                  placeholder="1650 N Randall Rd, Aurora, IL 60506"
                />
              </div>
            )}

            {emailPurpose === "existing-claim" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Número de Reclamo
                </label>
                <Input
                  name="claimNumber"
                  value={formData.claimNumber}
                  onChange={handleFormChange}
                  placeholder="Ej: CLM-2024-001"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">
                Tipo de Daño
              </label>
              <select
                name="damageType"
                value={formData.damageType}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="">Selecciona un tipo de daño</option>
                <option value="techo">Daño en Techo</option>
                <option value="agua">Daño por Agua</option>
                <option value="incendio">Daño por Incendio</option>
                <option value="tormenta">Daño por Tormenta</option>
                <option value="revestimiento">Daño en Revestimiento</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Descripción del Daño *
              </label>
              <Textarea
                name="damageDescription"
                value={formData.damageDescription}
                onChange={handleFormChange}
                placeholder="Cuéntanos sobre el daño que has sufrido..."
                rows={5}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Mensaje Adicional
              </label>
              <Textarea
                name="customMessage"
                value={formData.customMessage}
                onChange={handleFormChange}
                placeholder="¿Hay algo más que quieras agregar?"
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Atrás
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Siguiente
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Preview */}
      {step === "preview" && (
        <Card>
          <CardHeader>
            <CardTitle>Revisa tu Email</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 whitespace-pre-wrap text-sm font-mono max-h-96 overflow-y-auto">
              {generateEmailContent()}
            </div>



            <div className="flex gap-2">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Editar
              </Button>
              <Button
                onClick={handleSendEmail}
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Enviando..." : "Enviar Email"}
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
              Email Enviado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Tu email ha sido enviado exitosamente. Nos pondremos en contacto pronto.
            </p>
            <Button onClick={onClose} className="w-full">
              Cerrar
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
