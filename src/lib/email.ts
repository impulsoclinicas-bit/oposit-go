import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

let resendClient: Resend | null = null;

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);
}

function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY no está configurada.");
  }
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export async function sendActivationEmail(to: string, activationUrl: string) {
  const from = process.env.RESEND_FROM_EMAIL!;
  await getResend().emails.send({
    from,
    to,
    subject: `¡Pago recibido! Activa tu cuenta de ${siteConfig.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="color: #0f2140;">¡Bienvenido/a a ${siteConfig.name}!</h1>
        <p>Hemos recibido tu pago. Solo te falta un paso: crea tu contraseña para acceder a todo el temario, las baterías de preguntas y los simulacros.</p>
        <p style="margin: 24px 0;">
          <a href="${activationUrl}" style="background:#f59e0b;color:#0f2140;padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:bold;">
            Activar mi cuenta
          </a>
        </p>
        <p style="font-size: 12px; color: #666;">Si el botón no funciona, copia y pega este enlace en tu navegador:<br />${activationUrl}</p>
        <p style="font-size: 12px; color: #666;">Este enlace caduca en 7 días.</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />
        <p style="font-size: 13px; color: #444;"><strong>Cómo funciona el temario:</strong> se abre por un calendario único, igual para todos los alumnos (5 temas nuevos cada mes). Si te has apuntado cuando el calendario ya llevaba tiempo abierto, empezarás en el lote vigente ese mes, no en el tema 1. Si quieres los temas anteriores a tu alta, puedes comprarlos desde "Mi cuenta" con el pase de ponerse al día.</p>
      </div>
    `,
  });
}
