# Oposit&go

Plataforma de suscripción mensual para opositores a Policía Nacional
(Escala Básica): temario organizado por bloques, batería de preguntas tipo
test por tema, simulacros combinados cada 5 temas y (próximamente) esquemas
y resúmenes por tema.

Construida con [Next.js](https://nextjs.org) (App Router) + TypeScript +
Tailwind CSS v4, Prisma + PostgreSQL para cuentas y suscripciones, Auth.js
para el login y Stripe para el cobro recurrente.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Sin las variables de entorno configuradas, el sitio funciona igualmente
para navegar por el marketing y el temario público, pero el registro, el
pago y el acceso al contenido gated no estarán operativos hasta configurar
lo siguiente.

## Cómo funciona el alta de un opositor

1. El usuario va a `/precios` y pulsa "Suscribirme ahora": se crea una
   sesión de **Stripe Checkout en modo suscripción** (`/api/checkout`).
2. Al completar el pago, Stripe llama al webhook
   (`/api/webhooks/stripe`, evento `checkout.session.completed`), que crea
   (o actualiza) el usuario en base de datos con `subscriptionStatus: active`
   y le envía un email con un enlace de un solo uso para crear su
   contraseña (`/activar-cuenta?token=...`).
3. El usuario crea su contraseña y ya puede iniciar sesión en `/login`.
4. Mientras la suscripción esté activa en Stripe, tiene acceso al temario,
   las baterías de preguntas y los simulacros. Si cancela o el pago falla,
   los webhooks `customer.subscription.updated` / `.deleted` actualizan el
   estado y el acceso se revoca automáticamente (se comprueba en cada
   carga de página, no solo al iniciar sesión).
5. Desde `/cuenta` puede abrir el portal de facturación de Stripe para
   gestionar o cancelar su suscripción en cualquier momento.

## Puesta en marcha (variables de entorno)

Copia `.env.example` a `.env.local` y completa:

1. **Base de datos Postgres.** Crea una gratis en
   [Neon](https://neon.tech) o [Supabase](https://supabase.com), copia la
   cadena de conexión en `DATABASE_URL` y ejecuta:
   ```bash
   npx prisma migrate deploy   # o `npx prisma db push` en desarrollo
   ```
2. **`AUTH_SECRET`**: genera un valor aleatorio con `openssl rand -base64 32`.
3. **Stripe** ([crear cuenta](https://dashboard.stripe.com/register)):
   - Crea un producto con un precio recurrente mensual y copia su ID en
     `STRIPE_PRICE_ID`.
   - Copia la clave secreta en `STRIPE_SECRET_KEY`.
   - Configura el webhook (Developers → Webhooks → Add endpoint) apuntando
     a `https://tu-dominio/api/webhooks/stripe`, escuchando
     `checkout.session.completed`, `customer.subscription.updated` y
     `customer.subscription.deleted`. Copia el "Signing secret" en
     `STRIPE_WEBHOOK_SECRET`.
   - Activa el **Portal de clientes** de Stripe (Settings → Billing →
     Customer portal) para que `/cuenta` pueda abrirlo.
4. **Resend** ([crear cuenta](https://resend.com)): verifica tu dominio,
   copia la API key en `RESEND_API_KEY` y define `RESEND_FROM_EMAIL`.
   Sin esto configurado, el usuario paga pero no recibe el email de
   activación (tendríais que dárselo de alta manualmente desde la base de
   datos).

## Contenido: temario y preguntas

- `src/lib/temario.ts` — bloques y los 45 temas oficiales (26 jurídico +
  11 social + 8 técnico-científico). Añadir un tema nuevo es añadir una
  entrada al array `temas`.
- `src/content/preguntas/{slug}.ts` — batería de preguntas de cada tema
  (`src/content/preguntas/index.ts` las registra, concatenando varios
  bancos ya redactados cuando corresponden a un mismo tema real). De
  momento están redactados con contenido real y funcional 7 temas del
  bloque jurídico (temas 2, 3, 5, 6, 7, 8 y 9); el resto de temas aparecen
  en el temario pero muestran "batería en preparación" hasta que se
  redacten.
- `src/lib/simulacros.ts` — agrupa automáticamente los temas de 5 en 5 y
  construye el simulacro combinado con preguntas de cada tema del tramo;
  también expone el simulacro completo (`getPreguntasSimulacroCompleto`),
  que combina hasta 100 preguntas de todos los temas ya desbloqueados.
- `src/content/esquemas/{slug}.ts` y `src/content/resumenes/{slug}.ts` —
  esquema y resumen de cada tema (mismos 7 temas redactados por ahora);
  se pueden descargar en PDF desde `/api/temario/[slug]/pdf`
  (`src/lib/pdf/TemaPdfDocument.tsx`, con `@react-pdf/renderer`).
- `src/lib/desbloqueo.ts` — el temario no se abre entero al suscribirse:
  se desbloquea por lotes de 5 temas, uno al mes, acelerando el ritmo si
  la convocatoria vigente (`src/lib/convocatoria.ts`) deja poco margen.

**Importante sobre el temario:** el recuento (45 temas, 26/11/8 por
bloque) y los títulos de los bloques II y III están cotejados entre varias
academias independientes. Varios títulos del Bloque I (marcados con "⚠" en
su descripción en `temario.ts`) solo se han visto en una fuente. Antes de
vender el producto como "temario oficial de la convocatoria vigente" hay
que verificar el listado completo contra el temario exacto publicado en el
BOE de la convocatoria en curso.

## Marca

Colores: azul marino oscuro como color principal (`brand-*` en
`src/app/globals.css`) con acentos en dorado/ámbar (`accent-*`) para los
CTA. El logo es de momento un wordmark de texto ("Oposit&go") a la espera
del logo definitivo.

## Build

```bash
npm run build
npm run lint
```
