import { Resend } from 'resend';
import { g as getEnv, v as validateEnvVariable, a as getEnvFieldType, c as createInvalidVariablesError, s as setOnSetGetEnv } from '../../chunks/astro/env-setup_DbGQAhkX.mjs';
export { renderers } from '../../renderers.mjs';

const schema = {"RESEND_API_KEY":{"context":"server","access":"secret","type":"string","optional":false}};

// @ts-check

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `reset` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `reset` is used by the generated code
setOnSetGetEnv((reset) => {
	RESEND_API_KEY = reset ? undefined : _internalGetSecret("RESEND_API_KEY");

});
let RESEND_API_KEY = _internalGetSecret("RESEND_API_KEY");

const resend = new Resend(RESEND_API_KEY);
const prerender = false;
const POST = async ({ request }) => {
  try {
    console.log("Request received");
    const formData = await request.formData();
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    const emailText = generateEmailTemplate(formValues);
    const { data: emailData, error } = await resend.emails.send({
      from: "Desarrollo <desarrollo@iantech.com.ar>",
      to: "info@bitcompay.ar",
      subject: "Suscripcion en Bitcompay",
      html: emailText
    });
    console.log("error", error);
    return new Response(JSON.stringify({ data: emailData }), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
