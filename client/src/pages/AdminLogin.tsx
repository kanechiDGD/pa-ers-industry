import { useState } from "react";
import { useLocation } from "wouter";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ADMIN_USERNAME = "andres";
const ADMIN_PASSWORD = "1234";

export default function AdminLogin() {
  const { language } = useLanguage();
  const [, navigate] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const copy = {
    en: {
      title: "Admin Panel",
      subtitle: "Restricted access. Authorized personnel only.",
      username: "Username",
      usernamePlaceholder: "Enter your username",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      loggingIn: "Logging in...",
      login: "Log In",
      success: "Login successful",
      error: "Invalid credentials. Try again.",
      warning:
        "This panel is for authorized administrators only. Unauthorized access is prohibited.",
    },
    es: {
      title: "Panel de Administracion",
      subtitle: "Acceso restringido. Solo personal autorizado.",
      username: "Usuario",
      usernamePlaceholder: "Ingresa tu usuario",
      password: "Contrasena",
      passwordPlaceholder: "Ingresa tu contrasena",
      loggingIn: "Ingresando...",
      login: "Ingresar",
      success: "Inicio de sesion exitoso",
      error: "Credenciales incorrectas. Intenta nuevamente.",
      warning:
        "Este panel es solo para administradores autorizados. El acceso no autorizado esta prohibido.",
    },
  };

  const text = copy[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a brief delay for UX
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("admin_auth", "true");
        toast.success(text.success);
        navigate("/admin/chat");
      } else {
        toast.error(text.error);
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">{text.title}</CardTitle>
          <CardDescription>{text.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                {text.username}
              </label>
              <Input
                id="username"
                type="text"
                placeholder={text.usernamePlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                {text.password}
              </label>
              <Input
                id="password"
                type="password"
                placeholder={text.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? text.loggingIn : text.login}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground text-center">{text.warning}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
