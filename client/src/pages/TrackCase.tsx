import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrackCase() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();
  const [caseNumber, setCaseNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [caseData, setCaseData] = useState<any>(null);

  const copy = {
    en: {
      back: "Back to Home",
      title: "Track Your Case",
      subtitle: "Enter your case number to see the current status of your claim",
      searchTitle: "Search Case",
      searchBody: "Use the case number you received when you started your consultation",
      searchPlaceholder: "Example: CASE-2024-001234",
      searchButton: "Search",
      detailsTitle: "Case Details",
      detailsNumber: "Number",
      status: "Status",
      damageType: "Damage Type",
      dateOpened: "Date Opened",
      initialOffer: "Initial Offer",
      currentNegotiation: "Current Negotiation",
      notes: "Notes",
      nextStep: "Next Step",
      contactAdjuster: "Contact Your Adjuster",
      notFound: (num: string) =>
        `No case was found with the number "${num}". Please verify the number and try again.`,
      caseSample: {
        status: "Under Review",
        damageType: "Storm Damage",
        notes: "Evaluation completed. Negotiating with the insurer.",
        nextStep: "Expected response from the insurer in 5-7 days",
      },
      validation: "Please enter a case number",
    },
    es: {
      back: "Volver al Inicio",
      title: "Rastrear Tu Caso",
      subtitle: "Ingresa tu numero de caso para ver el estado actual de tu reclamo",
      searchTitle: "Buscar Caso",
      searchBody: "Usa el numero de caso que recibiste cuando iniciaste tu consulta",
      searchPlaceholder: "Ej: CASE-2024-001234",
      searchButton: "Buscar",
      detailsTitle: "Detalles del Caso",
      detailsNumber: "Numero",
      status: "Estado",
      damageType: "Tipo de Dano",
      dateOpened: "Fecha de Apertura",
      initialOffer: "Oferta Inicial",
      currentNegotiation: "Negociacion Actual",
      notes: "Notas",
      nextStep: "Proximo Paso",
      contactAdjuster: "Contactar con tu Ajustador",
      notFound: (num: string) =>
        `No se encontro un caso con el numero "${num}". Por favor verifica el numero e intenta nuevamente.`,
      caseSample: {
        status: "En Revision",
        damageType: "Dano por Tormenta",
        notes: "Evaluacion completada. Negociando con aseguradora.",
        nextStep: "Respuesta esperada de la aseguradora en 5-7 dias",
      },
      validation: "Por favor ingresa un numero de caso",
    },
  };

  const text = copy[language];

  const handleSearch = () => {
    if (!caseNumber.trim()) {
      window.alert(text.validation);
      return;
    }

    // Simulate case lookup - in a real app, this would query a database
    setSearched(true);
    setCaseData({
      caseNumber: caseNumber,
      status: text.caseSample.status,
      dateOpened: "2024-10-15",
      damageType: text.caseSample.damageType,
      initialOffer: "$15,000",
      currentNegotiation: "$32,500",
      notes: text.caseSample.notes,
      nextStep: text.caseSample.nextStep,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-2xl">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            {text.back}
          </button>

          <h1 className="text-4xl font-bold mb-2">{text.title}</h1>
          <p className="text-muted-foreground mb-8">{text.subtitle}</p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{text.searchTitle}</CardTitle>
              <CardDescription>{text.searchBody}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder={text.searchPlaceholder}
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <Button onClick={handleSearch} className="px-6">
                  <Search className="h-4 w-4 mr-2" />
                  {text.searchButton}
                </Button>
              </div>
            </CardContent>
          </Card>

          {searched && caseData && (
            <Card>
              <CardHeader>
                <CardTitle>{text.detailsTitle}</CardTitle>
                <CardDescription>
                  {text.detailsNumber}: {caseData.caseNumber}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.status}</p>
                    <p className="text-lg font-semibold text-blue-600">{caseData.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.damageType}</p>
                    <p className="text-lg font-semibold">{caseData.damageType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.dateOpened}</p>
                    <p className="text-lg font-semibold">{caseData.dateOpened}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{text.initialOffer}</p>
                    <p className="text-lg font-semibold text-red-600">{caseData.initialOffer}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">{text.currentNegotiation}</p>
                  <p className="text-2xl font-bold text-green-600">{caseData.currentNegotiation}</p>
                  <p className="text-sm text-green-700 mt-2">
                    {language === "en"
                      ? `Increase of ${(((32500 - 15000) / 15000) * 100).toFixed(0)}% from the initial offer`
                      : `Aumento de ${(((32500 - 15000) / 15000) * 100).toFixed(0)}% desde la oferta inicial`}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">{text.notes}</p>
                  <p className="text-foreground">{caseData.notes}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">{text.nextStep}</p>
                  <p className="text-foreground font-semibold">{caseData.nextStep}</p>
                </div>

                <Button className="w-full" variant="outline">
                  {text.contactAdjuster}
                </Button>
              </CardContent>
            </Card>
          )}

          {searched && !caseData && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-700">{text.notFound(caseNumber)}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
