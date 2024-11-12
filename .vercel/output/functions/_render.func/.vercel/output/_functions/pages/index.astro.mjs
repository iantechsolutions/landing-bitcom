/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderSlot, e as createAstro, f as renderComponent } from '../chunks/astro/server_DhRKUSpU.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BFs2xanO.mjs';
import { b as $$SectionTitle, $ as $$Header, a as $$OurNetworks } from '../chunks/OurNetworks_Rm5_fILX.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.9/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$ChevronRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ChevronRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m9 18 6-6-6-6"></path> ` })}`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.9/node_modules/lucide-astro/dist/ChevronRight.astro", void 0);

const $$Astro$3 = createAstro();
const $$ChevronUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ChevronUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-up", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m18 15-6-6-6 6"></path> ` })}`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/node_modules/.pnpm/lucide-astro@0.453.0_astro@4.16.9/node_modules/lucide-astro/dist/ChevronUp.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full flex flex-col md:flex-row justify-center gap-3 items-center md:mt-20 px-20 2xl:max-w-7xl 2xl:mx-auto" id="home" data-astro-cid-xhaoqxbd> <div class="header-home" data-astro-cid-xhaoqxbd> <h1 data-astro-cid-xhaoqxbd>
Simplifique la gestión de tesorería
<span data-astro-cid-xhaoqxbd>de su empresa</span> </h1> <p data-astro-cid-xhaoqxbd>
Acceda a un servicio integral de gestión de canales de recaudación y cash
      management de forma online con nuestra plataforma.
</p> <a href="/#contact" data-astro-cid-xhaoqxbd>
Consulte por nuestro sistema ${renderComponent($$result, "ChevronRight", $$ChevronRight, { "class": "h-4", "strokeWidth": 1, "data-astro-cid-xhaoqxbd": true })}</a> </div> <div data-astro-cid-xhaoqxbd> <img src="/images/mockup 1.png" class="40vw" alt="" data-astro-cid-xhaoqxbd> <div data-astro-cid-xhaoqxbd></div>  </div> </section>`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/Home.astro", void 0);

const $$Astro$2 = createAstro();
const $$PaymentCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PaymentCard;
  const { title, content, iconUrl, iconAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-[10px] bg-[#F7F7F7] pt-2 md:pt-4 pb-2 md:pb-6 px-4 md:px-6 dark:backdrop--blur__safari dark:backdrop-filter
      dark:backdrop-blur-4xl dark:bg-opacity-20" data-astro-cid-o66nzr2j> <div class="card-content" data-astro-cid-o66nzr2j> <div class="card-icon" data-astro-cid-o66nzr2j> <img${addAttribute(iconUrl, "src")}${addAttribute(iconAlt, "alt")} data-astro-cid-o66nzr2j> </div> <div class="flex flex-col gap-2" data-astro-cid-o66nzr2j> <h3 class="text-[0.9rem] font-[600] uppercase text-[#5034F2] dark:text-[#9D8CFD]" data-astro-cid-o66nzr2j>${title}</h3> <p class="card-text" data-astro-cid-o66nzr2j> ${content} </p> <div data-astro-cid-o66nzr2j></div> </div> </div></div>`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/PaymentCard.astro", void 0);

const $$CanalesRecaudacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="home-2 2xl:max-w-7xl 2xl:mx-auto" id="home-2" data-astro-cid-iyy4dquz> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Canales de Recaudaci\xF3n", "subtitle": "Ofrecemos una amplia variedad de canales de recaudaci\xF3n para que pueda cobrar de forma segura y eficiente.", "data-astro-cid-iyy4dquz": true })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 mt-8 w-[80%] max-w-[80%]" data-astro-cid-iyy4dquz> ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "D\xE9bito Directo Bancario", "content": "Ordene d\xE9bitos autom\xE1ticos en cajas de ahorro y/o cuentas corrientes de todos los bancos del sistema financiero.", "iconUrl": "/images/payment-icons/debito-directo-bancario.png", "iconAlt": "Icono Bancario", "data-astro-cid-iyy4dquz": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "D\xE9bito Autom\xE1tico en tarjetas", "content": "Sus clientes o afiliados podr\xE1n optar por el servicio de d\xE9bito autom\xE1tico en tarjetas de cr\xE9dito y/o d\xE9bito.", "iconUrl": "/images/payment-icons/debito-automatico.png", "iconAlt": "debito automatico icon", "data-astro-cid-iyy4dquz": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Recaudaci\xF3n en Efectivo", "content": "Habilite los Canales de Recaudaci\xF3n de Pago F\xE1cil y/o Rapipago en todo el Pa\xEDs, con la modalidad de su conveniencia.", "iconUrl": "/images/payment-icons/efectivo.png", "iconAlt": "icono efectivo", "data-astro-cid-iyy4dquz": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Canales Electr\xF3nicos de pagos", "content": "Ofrezca la opci\xF3n de pago de servicios en Home Banking y/o Billeteras Virtuales homologadas.", "iconUrl": "/images/payment-icons/canal-electronico.png", "iconAlt": "Icono canal eletronico", "data-astro-cid-iyy4dquz": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Gateway de Pagos", "content": "Incluye POS f\xEDsico para ventas presenciales, lectura de QR, generaci\xF3n de links de pago y env\xEDo por RRSS, Pos Web para venta telef\xF3nica y bot\xF3n de pago.", "iconUrl": "/images/payment-icons/gateway.png", "iconAlt": "icono gateway de pagos", "data-astro-cid-iyy4dquz": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Cobranzas Mayoristas", "content": "Reciba en nuestra Cuenta Recaudadora Mayorista el pago de Facturas de sus Clientes Corporativos.", "iconUrl": "/images/payment-icons/cobranzas.png", "iconAlt": "Icono cobranzas", "data-astro-cid-iyy4dquz": true })} </div> </section> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/CanalesRecaudacion.astro", void 0);

const $$Astro$1 = createAstro();
const $$CashCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CashCard;
  const { title, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 bg-[#DEF5DD] py-10 px-4 sm:px-12 rounded-xl bg-clip-padding dark:backdrop--blur__safari dark:backdrop-filter dark:backdrop-blur-4xl dark:bg-opacity-40" data-astro-cid-3xg6hwtx> <h1 class="font-bold sm:text-base md:text-lg lg:text-xl w-5/6 " data-astro-cid-3xg6hwtx>${title}</h1> <ul class="mt-4" data-astro-cid-3xg6hwtx> ${items.map((item) => renderTemplate`<li data-astro-cid-3xg6hwtx> <img src="/images/check.svg" data-astro-cid-3xg6hwtx> <span data-astro-cid-3xg6hwtx>${item}</span> </li>`)} </ul> </div> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/CashCard.astro", void 0);

const $$CashManagement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="home-3 rounded-xl bg-white dark:bg-[#1A1A18]" id="home-3" data-astro-cid-aglnp45o> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Cash Management", "subtitle": "Evite costos tercerizando los pagos a sus proveedores, servicios e impuestos", "color": "text-[#7059ec]", "data-astro-cid-aglnp45o": true })} <div class="flex flex-col md:flex-row w-full md:w-5/6 gap-3 mt-9 2xl:max-w-7xl mx-auto" data-astro-cid-aglnp45o> ${renderComponent($$result, "CashCard", $$CashCard, { "title": "Sin l\xEDmite en cuanto a volumen y cantidad de pagos.", "items": [
    "Pago a proveedores.",
    "Pago de honorarios y/o comisiones.",
    "Pago de servicios y/o impuestos mediante VEP."
  ], "data-astro-cid-aglnp45o": true })} ${renderComponent($$result, "CashCard", $$CashCard, { "title": "M\xE9todos de pago", "items": [
    "Transferencias programadas.",
    "Transferencias inmediatas.",
    "Emisi\xF3n de cheques f\xEDsicos y/o Echeqs."
  ], "data-astro-cid-aglnp45o": true })} </div> </section> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/CashManagement.astro", void 0);

const $$OurPlatform = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="home-4" id="home-4" data-astro-cid-w3z5xx6a> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Nuestra plataforma", "subtitle": "Gestione sus recaudaciones y pagos de forma online:", "data-astro-cid-w3z5xx6a": true })} <div class="home-4-container" data-astro-cid-w3z5xx6a> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 rounded-xl w-[80vw] max-w-[80vw] 2xl:max-w-7xl mx-auto" data-astro-cid-w3z5xx6a> ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Gestion multicanal", "content": "Env\xEDe instrucciones de cobranzas y pagos de manera f\xE1cil a trav\xE9s de nuestra plataforma, mediante transmisi\xF3n de archivos.", "iconUrl": "/images/platform-icons/gestion-multicanal.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Reportes Personalizados", "content": "Acceda a informes detallados sobre sus recaudaciones y/o pagos, con la posibilidad de exportar archivos en formato Excel o texto. ", "iconUrl": "/images/platform-icons/reportes-personalizados.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Consulta de Movimientos", "content": "Mant\xE9nganse informado sobre todos los movimientos, saldos disponibles y proyectados, registrados en su Cuenta BitcomPay. ", "iconUrl": "/images/platform-icons/consulta-movimientos.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Notificaciones Automatizadas", "content": "Personalice notificaciones automatizadas para su cartera de clientes y proveedores, utilizando plantillas con su marca.", "iconUrl": "/images/platform-icons/notificaciones-personalizadas.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "Distribuci\xF3n de Comprobantes", "content": "Facilite la recaudaci\xF3n de su cartera mediante la distribuci\xF3n de Comprobantes, con instrucciones claras de los canales habilitados para su pago.", "iconUrl": "/images/platform-icons/distribucion-comprobantes.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} ${renderComponent($$result, "PaymentCard", $$PaymentCard, { "title": "An\xE1lisis Estad\xEDstico", "content": "Utilice nuestro Dashboard para acceder a informaci\xF3n estad\xEDstica relevante que le ayudar\xE1 en la toma de decisiones.", "iconUrl": "/images/platform-icons/analisis-estadistico.svg", "iconAlt": "Icono gestion multicanal", "data-astro-cid-w3z5xx6a": true })} </div> </div>  </section>`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/OurPlatform.astro", void 0);

const $$Astro = createAstro();
const $$FieldFrom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FieldFrom;
  const { label, id, placeholder, textArea, tel, motive } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-2 items-start border-b-2 border-[#85CE81] px-0 my-4 pb-2 ${textArea ? "md:col-span-2" : ""}`, "class")} data-astro-cid-zlbxf6oy> <label${addAttribute(id, "for")} class="text-[#747474] text-left w-full" data-astro-cid-zlbxf6oy>${label}</label> ${textArea && renderTemplate`<textarea${addAttribute(id, "id")}${addAttribute(id, "name")} class="border-none bg-inherit focus:outline-none w-full h-14"${addAttribute(placeholder, "placeholder")} wrap="soft" data-astro-cid-zlbxf6oy></textarea>`} ${tel && renderTemplate`<div class="flex gap-2 items-center pl-4" data-astro-cid-zlbxf6oy> <select class="border-none bg-inherit focus:outline-none text-left truncate" data-astro-cid-zlbxf6oy> <option value="phone" class="dark:bg-black" data-astro-cid-zlbxf6oy>
Telefono
</option> <option value="cellphone" class="dark:bg-black" data-astro-cid-zlbxf6oy>
Celular
</option> </select> <input type="tel" placeholder="ej: 11 1234 5678"${addAttribute(id, "id")}${addAttribute(id, "name")} class="border-none bg-inherit focus:outline-none truncate" data-astro-cid-zlbxf6oy> </div>`} ${motive && renderTemplate`<select${addAttribute(id, "id")}${addAttribute(id, "name")} class="pl-4 border-none bg-inherit focus:outline-none w-full truncate" data-astro-cid-zlbxf6oy> <option value="consulta" class="dark:bg-black" data-astro-cid-zlbxf6oy>
Consulta
</option> <option value="reclamo" class="dark:bg-black" data-astro-cid-zlbxf6oy>
Reclamo
</option> <option value="sugerencia" class="dark:bg-black" data-astro-cid-zlbxf6oy>
Sugerencia
</option> </select>`} ${!textArea && !tel && !motive && renderTemplate`<input type="text"${addAttribute(id, "id")}${addAttribute(id, "name")} class="pl-4 border-none bg-inherit focus:outline-none w-full truncate"${addAttribute(placeholder, "placeholder")} required data-astro-cid-zlbxf6oy>`} </div> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/ui/FieldFrom.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center mt-20" id="contact" data-astro-cid-xmivup5a> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "CONT\xC1CTENOS", "subtitle": "Seleccione el medio de contacto preferido y conversemos", "data-astro-cid-xmivup5a": true })} <div class="2xl:max-w-7xl mx-auto md:px-10" data-astro-cid-xmivup5a> <form id="form" class="grid grid-cols2 md:grid-cols-2 md:gap-x-8" method="post" action="/api/send-email" enctype="application/x-www-form-urlencoded" data-astro-cid-xmivup5a> ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Nombre y apellido", "id": "name", "placeholder": "Ingrese su nombre completo", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "CUIT EMPRESA", "id": "cuil", "placeholder": "Ingrese su CUIL/CUIT", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Mail", "id": "email", "placeholder": "Ingrese su mail", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Empresa", "id": "company", "placeholder": "Ingrese el nombre de su empresa", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Tel\xE9fono", "id": "phone", "tel": true, "placeholder": "", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Motivo", "id": "motive", "motive": true, "placeholder": "", "data-astro-cid-xmivup5a": true })} ${renderComponent($$result, "FieldFrom", $$FieldFrom, { "label": "Mensaje", "id": "message", "placeholder": "Ingrese su mensaje", "textArea": true, "data-astro-cid-xmivup5a": true })} <button type="submit" data-astro-cid-xmivup5a>
Enviar ${renderComponent($$result, "ChevronRight", $$ChevronRight, { "class": "h-4", "strokeWidth": 1, "data-astro-cid-xmivup5a": true })} </button> </form> <div id="toast" class="toast hidden" data-astro-cid-xmivup5a>
¡Gracias por contactarnos! Le responderemos a la brevedad
</div> </div> </section>  `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/Contact.astro", void 0);

const $$BotonTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="btn-top" id="scrollToTopBtn" data-astro-cid-crmg2b45>${renderComponent($$result, "ChevronUp", $$ChevronUp, { "class": "h-10", "color": "#ffffff", "data-astro-cid-crmg2b45": true })}</button>  `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/BotonTop.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bitcom-Pay", "page": "home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "CanalesRecaudacion", $$CanalesRecaudacion, {})} ${renderComponent($$result2, "CashManagement", $$CashManagement, {})} ${renderComponent($$result2, "OurPlatform", $$OurPlatform, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "OurNetworks", $$OurNetworks, { "page": "home" })} ${renderComponent($$result2, "BotonTop", $$BotonTop, {})} </main> ` })}`;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
