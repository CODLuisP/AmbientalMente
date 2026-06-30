# AmbientalMente LV E.I.R.L. — Sitio Web Corporativo

Sitio web institucional de **AmbientalMente LV E.I.R.L.**, empresa peruana especializada en gestión ambiental, consultoría, monitoreo, recolección de residuos sólidos y capacitaciones en SST.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** como bundler
- **Tailwind CSS v4** para estilos
- **Framer Motion** (`motion/react`) para animaciones scroll y hover
- **Lucide React** para iconografía

## Secciones

| Sección | Descripción |
|---|---|
| Hero | Presentación principal con CTA y degradado de marca |
| Nosotros | Misión, visión y datos del planeta en cifras |
| Servicios | 5 servicios con cards interactivas y hover animado |
| Valores | Filosofía de trabajo y cita inspiracional |
| ¿Por qué elegirnos? | Diferenciales de valor y garantías |
| Identidad de Marca | Aplicaciones de marca corporativa |
| Contacto | Formulario de cotización y mapa de ubicación |
| Footer | Datos de contacto, navegación y redes sociales |

## Cómo correr el proyecto

**Prerequisito:** Node.js 18+

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

El servidor de desarrollo corre en `http://localhost:5173` por defecto.

## Estructura de carpetas relevante

```
src/
├── components/       # Componentes de cada sección
│   └── Reveal.tsx    # Wrapper reutilizable de animación scroll
├── public/           # Imágenes y assets (servidos como /src/public/...)
│   ├── cifras/       # Fotos para cards "El Planeta en Cifras"
│   └── servicios/    # Imágenes por servicio
├── data.ts           # Contenido estático (servicios, valores, stats, etc.)
├── types.ts          # Interfaces TypeScript
└── App.tsx           # Composición principal de secciones
```

## Notas importantes

- Las imágenes en `src/public/` se referencian con la ruta `/src/public/nombre.ext` (no desde `/public/` raíz de Vite).
- Los gradientes usan sintaxis de **Tailwind v4**: `bg-linear-to-r`, `bg-linear-to-t` — no `bg-gradient-*`.
- Las animaciones de hover en cards usan **exclusivamente Framer Motion** (`whileHover`). No mezclar con `hover:-translate-*` de Tailwind para evitar conflictos de `transform`.
- Colores de marca definidos en `tailwind.config` como `brand-bosque`, `brand-hoja`, `brand-claro`, `brand-agua`, `brand-tierra`.

## Contacto empresa

- **RUC:** 20614968665
- **Email:** ambientalmente531@gmail.com
- **WhatsApp:** +51 958 671 088
- **Ubicación:** Jr. Villa Tres Molinos Mz. C Lote 16 E, Cajamarca – Perú
