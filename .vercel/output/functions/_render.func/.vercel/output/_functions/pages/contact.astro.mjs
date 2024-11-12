/* empty css                                   */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DhRKUSpU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BFs2xanO.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="header" data-astro-cid-uw5kdbxl> <div class="logo-container" data-astro-cid-uw5kdbxl> <figure data-astro-cid-uw5kdbxl> <a href="/index" data-astro-cid-uw5kdbxl><img class="logo" src="images/logo bitcom.png" alt="" data-astro-cid-uw5kdbxl></a> </figure> </div> </header> <section class="contacto" data-astro-cid-uw5kdbxl> <div class="contact-container" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Contactanos</h1> <p data-astro-cid-uw5kdbxl>Dejanos tu mensaje y consultanos tus dudas!</p> <form data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Nombre y apellido*</label> <input type="text" id="name" name="name" required data-astro-cid-uw5kdbxl> <label for="cuil" data-astro-cid-uw5kdbxl>CUIL/CUIT*</label> <input type="text" id="cuil" name="cuil" required data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Mail*</label> <input type="email" id="email" name="email" required data-astro-cid-uw5kdbxl> <label for="company" data-astro-cid-uw5kdbxl>Empresa*</label> <input type="text" id="company" name="company" required data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Mensaje*</label> <textarea id="message" name="message" required data-astro-cid-uw5kdbxl></textarea> </form> </div> </section>  ` })}`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
