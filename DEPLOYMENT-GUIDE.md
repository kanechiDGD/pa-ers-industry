# Guía de Deployment - PA & ERS

¡Felicidades! Tu sitio web está 100% optimizado y listo para ser desplegado en producción. Esta guía te explica cómo hacerlo paso a paso.

---

## ¿Qué es Deployment?

**Deployment** (o despliegue) es el proceso de tomar el código de tu sitio web y subirlo a un servidor de hosting para que sea visible públicamente en tu dominio: `https://pa-ers-industry.com`.

---

## 📦 Archivos a Desplegar

Todo lo que necesitas está en la carpeta `dist/` que se genera después de compilar el proyecto. Esta carpeta contiene:

- `dist/public/` - Tu sitio web (HTML, CSS, JS, imágenes)
- `dist/index.js` - El servidor backend (Node.js)

---

## 🚀 Opciones de Hosting

### Opción 1: Vercel (Recomendado - Fácil y Rápido)

**Ideal para:** Sitios modernos con frontend y backend.

**Ventajas:**
- ✅ **Gratis** para la mayoría de proyectos
- ✅ Despliegue automático desde GitHub
- ✅ Muy fácil de configurar
- ✅ Excelente rendimiento

**Pasos:**
1. **Crear cuenta en Vercel**: Ve a https://vercel.com y regístrate con tu cuenta de GitHub.
2. **Importar Proyecto**: En el dashboard de Vercel, haz clic en "Add New..." -> "Project".
3. **Seleccionar Repositorio**: Elige tu repositorio `pa-ers-industry`.
4. **Configurar Proyecto**:
   - **Framework Preset**: Vercel debería detectar `Vite` automáticamente.
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `pnpm install`
   - **Environment Variables**: Copia y pega el contenido de tu archivo `.env` en la sección de variables de entorno de Vercel.
5. **Hacer clic en "Deploy"**.

¡Y listo! Vercel construirá y desplegará tu sitio. Cada vez que hagas un `git push` a la rama `main`, Vercel desplegará los cambios automáticamente.

---

### Opción 2: Netlify (Alternativa a Vercel)

**Similar a Vercel, también muy recomendado.**

**Pasos:**
1. **Crear cuenta en Netlify**: Ve a https://www.netlify.com y regístrate con GitHub.
2. **Importar Proyecto**: En tu dashboard, haz clic en "Add new site" -> "Import an existing project".
3. **Seleccionar Repositorio**: Elige `pa-ers-industry`.
4. **Configurar Build**:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist/public`
   - **Environment Variables**: Ve a "Site settings" -> "Build & deploy" -> "Environment" y agrega tus variables del `.env`.
5. **Hacer clic en "Deploy site"**.

---

### Opción 3: Servidor Propio (VPS - Avanzado)

**Ideal si ya tienes un servidor (ej. DigitalOcean, Linode, AWS).**

**Requisitos:**
- Servidor con Node.js y `npm` o `pnpm` instalado.
- Acceso SSH a tu servidor.

**Pasos en tu servidor:**
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/kanechiDGD/pa-ers-industry.git
   cd pa-ers-industry
   ```
2. **Instalar dependencias**:
   ```bash
   pnpm install
   ```
3. **Crear archivo `.env`**:
   - Copia el contenido de tu `.env` local al servidor.
4. **Construir el proyecto**:
   ```bash
   pnpm build
   ```
5. **Iniciar el servidor**:
   ```bash
   node dist/index.js
   ```
   Tu sitio estará corriendo en el puerto 3000.

6. **Configurar un Reverse Proxy (con Nginx o Apache)**:
   - Esto es para que tu dominio `https://pa-ers-industry.com` apunte al puerto 3000.
   - Configura un certificado SSL con Let's Encrypt para HTTPS.

---

## 🎯 Mi Recomendación

Usa **Vercel**. Es la opción más moderna, rápida y sencilla. Te olvidas de la configuración del servidor y obtienes despliegues automáticos gratis.

---

## 🔍 Pasos Post-Deployment (MUY IMPORTANTE)

Una vez que tu sitio esté en línea en `https://pa-ers-industry.com`:

### 1. **Configurar Google Search Console**
1. Ve a https://search.google.com/search-console
2. Agrega tu propiedad: `https://pa-ers-industry.com`
3. **Verificación**: Google te pedirá verificar que eres el dueño. Elige la opción **"HTML tag"**.
4. **Pásame el código meta tag** que te den. Se verá así:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
5. Yo lo agregaré al código y haré un último push. Vercel/Netlify lo desplegará automáticamente.
6. Vuelve a Search Console y haz clic en "Verificar".

### 2. **Enviar Sitemap a Google**
1. En Google Search Console, ve a la sección "Sitemaps".
2. Ingresa la URL de tu sitemap: `sitemap.xml`
3. Haz clic en "Enviar".

### 3. **Configurar Analytics (Opcional)**
1. Elige entre Umami o Google Analytics (ver `ANALYTICS-SETUP.md`).
2. Sigue los pasos para obtener tu ID.
3. Agrega las variables `VITE_ANALYTICS_ENDPOINT` y `VITE_ANALYTICS_WEBSITE_ID` a las variables de entorno en Vercel/Netlify.
4. Vercel/Netlify reconstruirá y desplegará el sitio con analytics.

---

## ❓ Preguntas Frecuentes

**¿Qué pasa si mi dominio no funciona?**
- Asegúrate de que los DNS de tu dominio apunten a Vercel/Netlify o a tu servidor.

**¿Tengo que hacer esto cada vez que hay un cambio?**
- **No**. Si usas Vercel o Netlify, cada `git push` a la rama `main` se despliega automáticamente.

**¿Qué son las variables de entorno en Vercel/Netlify?**
- Es una forma segura de guardar tus datos del `.env` sin subirlos a GitHub.

**¿Necesito ayuda?**
- La documentación de Vercel y Netlify es excelente. Si te atascas, puedes consultarla o preguntarme.

---

¡Estás a solo unos clics de tener tu sitio en línea! Si eliges Vercel, el proceso no debería tomar más de 10 minutos.
