import { Resend } from "resend";
import { RESEND_API_KEY } from "astro:env/server";
import type { APIRoute } from "astro";

const resend = new Resend(RESEND_API_KEY);
export const prerender = false
export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("Request received");
    // if (!request.body) {
    //   return new Response(JSON.stringify({ error: "Request body is missing" }), { status: 400 });
    // }
    const formData = await request.formData();
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    const emailText = generateEmailTemplate(formValues);

    const { data: emailData, error } = await resend.emails.send({
      from: "Desarrollo <desarrollo@iantech.com.ar>",
      to: "sesto@iantech.com.ar",
      subject: "Suscripcion en Bitcompay",
      html: emailText,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data: emailData }), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

function generateEmailTemplate(formData) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <h3 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">Nuevo Mensaje de Contacto</h3>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Nombre y apellido:</p>
          <p style="margin: 5px 0; color: #555;">${formData.name}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">CUIL/CUIT:</p>
          <p style="margin: 5px 0; color: #555;">${formData.cuil}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Mail:</p>
          <p style="margin: 5px 0; color: #555;">${formData.email}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Empresa:</p>
          <p style="margin: 5px 0; color: #555;">${formData.company}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Teléfono:</p>
          <p style="margin: 5px 0; color: #555;">${formData.phone}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Motivo:</p>
          <p style="margin: 5px 0; color: #555;">${formData.motive}</p>
        </div>
        <div style="padding: 15px; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; background-color: #fff;">
          <p style="color: #007bff; margin-bottom: 5px; font-weight: bold;">Mensaje:</p>
          <p style="margin: 5px 0; color: #555;">${formData.message}</p>
        </div>
      </div>
    `;
  
    return html;
  }
  