# Guía de Configuración de Analytics - PA & ERS

## ¿Qué son Analytics y por qué los necesitas?

**Analytics** son herramientas que te permiten rastrear y analizar el tráfico de tu sitio web. Te ayudan a entender:

- 📊 **Cuántas personas** visitan tu sitio
- 📍 **De dónde vienen** (Google, redes sociales, directo)
- 📱 **Qué dispositivos usan** (móvil, desktop, tablet)
- ⏱️ **Cuánto tiempo permanecen** en cada página
- 🎯 **Qué páginas son más populares**
- 🔄 **Tasas de conversión** (formularios, contactos)

---

## Opciones de Analytics

### Opción 1: Umami (Recomendado - Privacidad y Simplicidad)

**Ventajas:**
- ✅ Respetuoso con la privacidad (no requiere cookie consent)
- ✅ Interfaz simple y clara
- ✅ Cumple con GDPR automáticamente
- ✅ Ligero y rápido
- ✅ No rastrea información personal

**Desventajas:**
- ❌ Menos funciones que Google Analytics
- ❌ Requiere hosting propio o pagar por cloud

**Costo:**
- **Gratis** si lo hosteas tú mismo
- **$9-20/mes** en Umami Cloud

---

### Opción 2: Google Analytics 4 (GA4)

**Ventajas:**
- ✅ Completamente gratis
- ✅ Muy completo y detallado
- ✅ Integración con Google Ads
- ✅ Reportes avanzados
- ✅ Integración con Search Console

**Desventajas:**
- ❌ Más complejo de configurar
- ❌ Requiere banner de cookies (GDPR)
- ❌ Rastrea más información personal
- ❌ Curva de aprendizaje más alta

**Costo:**
- **Gratis** para la mayoría de sitios

---

## Configuración Paso a Paso

### OPCIÓN A: Configurar Umami

#### Paso 1: Crear Cuenta en Umami Cloud
1. Ve a https://cloud.umami.is/
2. Crea una cuenta (email + contraseña)
3. Verifica tu email

#### Paso 2: Agregar tu Sitio Web
1. En el dashboard, haz clic en **"Add Website"**
2. Ingresa:
   - **Name**: PA & ERS Industry
   - **Domain**: pa-ers-industry.com
3. Haz clic en **"Save"**

#### Paso 3: Obtener el Código de Tracking
1. Después de crear el sitio, verás un **Website ID** (ejemplo: `abc123def456`)
2. También verás un **Script URL** (ejemplo: `https://cloud.umami.is/script.js`)

#### Paso 4: Actualizar tu .env
Abre el archivo `.env` y actualiza estas líneas:

```bash
# Analytics - Umami
VITE_ANALYTICS_ENDPOINT=https://cloud.umami.is
VITE_ANALYTICS_WEBSITE_ID=abc123def456  # Tu Website ID aquí
```

#### Paso 5: Rebuild y Deploy
```bash
pnpm build
# Luego sube el contenido de dist/ a tu servidor
```

#### Paso 6: Verificar
1. Visita tu sitio web
2. Ve al dashboard de Umami
3. Deberías ver tu visita en tiempo real

---

### OPCIÓN B: Configurar Google Analytics 4

#### Paso 1: Crear Cuenta de Google Analytics
1. Ve a https://analytics.google.com/
2. Inicia sesión con tu cuenta de Google
3. Haz clic en **"Start measuring"**

#### Paso 2: Configurar Propiedad
1. **Account name**: PA & ERS
2. Haz clic en **"Next"**
3. **Property name**: PA & ERS Website
4. **Time zone**: Central Time (US & Canada)
5. **Currency**: US Dollar
6. Haz clic en **"Next"**

#### Paso 3: Detalles del Negocio
1. **Industry**: Insurance
2. **Business size**: Small
3. Selecciona tus objetivos de medición
4. Haz clic en **"Create"**

#### Paso 4: Configurar Data Stream
1. Selecciona **"Web"**
2. **Website URL**: https://pa-ers-industry.com
3. **Stream name**: PA & ERS Main Site
4. Haz clic en **"Create stream"**

#### Paso 5: Obtener el Measurement ID
1. Verás un **Measurement ID** (formato: `G-XXXXXXXXXX`)
2. Copia este ID

#### Paso 6: Instalar el Script
Hay dos formas:

**Forma 1: Usando Google Tag Manager (Recomendado)**
1. Ve a https://tagmanager.google.com/
2. Crea una cuenta y contenedor
3. Sigue las instrucciones para instalar GTM
4. Agrega Google Analytics 4 como tag en GTM

**Forma 2: Script Directo**
1. Copia el código de tracking que te da GA4
2. Pégalo en `client/index.html` antes del `</head>`

Ejemplo del código:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Paso 7: Rebuild y Deploy
```bash
pnpm build
# Sube dist/ a tu servidor
```

#### Paso 8: Verificar
1. Visita tu sitio
2. En GA4, ve a **Reports > Realtime**
3. Deberías ver tu visita en tiempo real

---

## Comparación Rápida

| Característica | Umami | Google Analytics 4 |
|----------------|-------|-------------------|
| **Costo** | $9-20/mes (cloud) o gratis (self-hosted) | Gratis |
| **Privacidad** | ⭐⭐⭐⭐⭐ Excelente | ⭐⭐⭐ Buena |
| **Facilidad** | ⭐⭐⭐⭐⭐ Muy fácil | ⭐⭐⭐ Moderada |
| **Funciones** | ⭐⭐⭐ Básicas | ⭐⭐⭐⭐⭐ Completas |
| **GDPR** | ✅ Cumple automáticamente | ⚠️ Requiere banner |
| **Velocidad** | ⭐⭐⭐⭐⭐ Muy rápido | ⭐⭐⭐⭐ Rápido |

---

## Mi Recomendación

### Para PA & ERS, recomiendo **Umami** porque:

1. **No necesitas banner de cookies** - Menos fricción para usuarios
2. **Más rápido** - No afecta la velocidad del sitio
3. **Suficiente para tus necesidades** - Verás todo lo importante
4. **Fácil de usar** - Dashboard simple y claro
5. **Profesional** - Respeta la privacidad de tus clientes

### Usa Google Analytics 4 si:
- Necesitas reportes muy detallados
- Vas a usar Google Ads
- Quieres integración con otros servicios de Google
- No te importa el banner de cookies

---

## Métricas Importantes para Monitorear

### Tráfico
- **Visitantes únicos** por día/semana/mes
- **Páginas vistas** totales
- **Páginas por sesión** (promedio)

### Fuentes de Tráfico
- **Orgánico** (Google, Bing) - Tu SEO funcionando
- **Directo** - Personas que escriben tu URL
- **Referral** - Enlaces desde otros sitios
- **Social** - Facebook, Instagram, etc.

### Comportamiento
- **Páginas más visitadas** - ¿Qué interesa más?
- **Tiempo en página** - ¿Leen tu contenido?
- **Tasa de rebote** - ¿Se van rápido?

### Conversiones
- **Formularios enviados** - Leads generados
- **Clics en teléfono** - Llamadas potenciales
- **Clics en email** - Contactos por email

---

## Configuración Avanzada (Opcional)

### Eventos Personalizados

Puedes rastrear acciones específicas como:
- Clics en "Start Chat"
- Clics en "Contact Us"
- Envío de formularios
- Descargas de documentos

**Ejemplo para Umami:**
```javascript
// En tu código React
const handleContactClick = () => {
  if (window.umami) {
    window.umami.track('contact-click', { page: 'home' });
  }
  // Tu lógica normal
};
```

---

## Preguntas Frecuentes

### ¿Necesito ambos?
No, elige uno. Umami es suficiente para la mayoría de negocios.

### ¿Afecta la velocidad del sitio?
Mínimamente. Umami es más ligero que GA4.

### ¿Es legal sin banner de cookies?
- **Umami**: Sí, cumple con GDPR sin banner
- **GA4**: Necesitas banner de cookies en Europa

### ¿Cuánto cuesta?
- **Umami Cloud**: $9-20/mes según tráfico
- **GA4**: Gratis

### ¿Puedo cambiar después?
Sí, puedes cambiar en cualquier momento.

---

## Próximos Pasos

1. **Decide qué analytics usar** (Umami o GA4)
2. **Sigue los pasos de configuración** arriba
3. **Actualiza tu .env** con los datos correctos
4. **Rebuild y deploy** tu sitio
5. **Verifica** que funcione visitando tu sitio
6. **Monitorea** tus métricas semanalmente

---

## Ayuda Adicional

Si necesitas ayuda:
- **Umami Docs**: https://umami.is/docs
- **GA4 Help**: https://support.google.com/analytics
- **Video Tutorial GA4**: Busca "Google Analytics 4 setup tutorial" en YouTube

---

**Nota**: El código de analytics ya está preparado en tu sitio. Solo necesitas:
1. Elegir tu plataforma
2. Crear cuenta
3. Actualizar las variables en `.env`
4. Rebuild y deploy

¡Es así de simple! 🎉
