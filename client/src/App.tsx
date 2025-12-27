import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import TrackCase from "./pages/TrackCase";
import Servicios from "./pages/Servicios";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import PrivacyPolicyES from "./pages/PrivacyPolicyES";
import PrivacyPolicyEN from "./pages/PrivacyPolicyEN";
import TermsES from "./pages/TermsES";
import TermsEN from "./pages/TermsEN";
import LegalNoticeES from "./pages/LegalNoticeES";
import LegalNoticeEN from "./pages/LegalNoticeEN";
import AdminLogin from "./pages/AdminLogin";
import AdminChat from "./pages/AdminChat";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/track-case"} component={TrackCase} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/sobre-nosotros" component={SobreNosotros} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/privacy-policy-es" component={PrivacyPolicyES} />
      <Route path="/privacy-policy-en" component={PrivacyPolicyEN} />
      <Route path="/terms-es" component={TermsES} />
      <Route path="/terms-en" component={TermsEN} />
      <Route path="/legal-notice-es" component={LegalNoticeES} />
      <Route path="/legal-notice-en" component={LegalNoticeEN} />
      <Route path={"/admin/login"} component={AdminLogin} />
      <Route path={"/admin/chat"} component={AdminChat} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
