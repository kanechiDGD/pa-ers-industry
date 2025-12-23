import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";

export default function TrackCase() {
  const [, navigate] = useLocation();
  const [caseNumber, setCaseNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [caseData, setCaseData] = useState<any>(null);

  const handleSearch = () => {
    if (!caseNumber.trim()) {
      alert("Por favor ingresa un número de caso");
      return;
    }

    // Simulate case lookup - in a real app, this would query a database
    setSearched(true);
    setCaseData({
      caseNumber: caseNumber,
      status: "En Revisión",
      dateOpened: "2024-10-15",
      damageType: "Daño por Tormenta",
      initialOffer: "$15,000",
      currentNegotiation: "$32,500",
      notes: "Evaluación completada. Negociando con aseguradora.",
      nextStep: "Respuesta esperada de la aseguradora en 5-7 días",
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
            Volver al Inicio
          </button>

          <h1 className="text-4xl font-bold mb-2">Rastrear Tu Caso</h1>
          <p className="text-muted-foreground mb-8">
            Ingresa tu número de caso para ver el estado actual de tu reclamo
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Buscar Caso</CardTitle>
              <CardDescription>
                Usa el número de caso que recibiste cuando iniciaste tu consulta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Ej: CASE-2024-001234"
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
                  Buscar
                </Button>
              </div>
            </CardContent>
          </Card>

          {searched && caseData && (
            <Card>
              <CardHeader>
                <CardTitle>Detalles del Caso</CardTitle>
                <CardDescription>Número: {caseData.caseNumber}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Estado</p>
                    <p className="text-lg font-semibold text-blue-600">{caseData.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tipo de Daño</p>
                    <p className="text-lg font-semibold">{caseData.damageType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fecha de Apertura</p>
                    <p className="text-lg font-semibold">{caseData.dateOpened}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Oferta Inicial</p>
                    <p className="text-lg font-semibold text-red-600">{caseData.initialOffer}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Negociación Actual</p>
                  <p className="text-2xl font-bold text-green-600">{caseData.currentNegotiation}</p>
                  <p className="text-sm text-green-700 mt-2">
                    Aumento de {((32500 - 15000) / 15000 * 100).toFixed(0)}% desde la oferta inicial
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Notas</p>
                  <p className="text-foreground">{caseData.notes}</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Próximo Paso</p>
                  <p className="text-foreground font-semibold">{caseData.nextStep}</p>
                </div>

                <Button className="w-full" variant="outline">
                  Contactar con tu Ajustador
                </Button>
              </CardContent>
            </Card>
          )}

          {searched && !caseData && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-700">
                  No se encontró un caso con el número "{caseNumber}". Por favor verifica el número e intenta nuevamente.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-white">
        <div className="container text-center text-sm text-slate-400">
          <p>© 2024 PA & ERS INDUSTRY. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
