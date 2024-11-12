import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as createAstro, f as renderComponent } from './astro/server_DhRKUSpU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="absolute flex items-center justify-between mx-auto top-0 lg:top-12 w-full lg:w-[86%] max-w-screen-xl bg-white dark:bg-[#212121] shadow-lg z-50 lg:rounded-full px-7 lg:px-[2.7rem] py-4 lg:left-1/2 lg:transform lg:-translate-x-1/2"> <figure class="flex items-center"> <img id="bitcom-logo" class="h-auto w-32 lg:w-40" src="./images/logo-bitcom-dark.png" alt=""> </figure> <div class="flex gap-4 lg:contents"> <nav class="flex items-center order-last lg:order-none"> <span class="nav-label" hidden>Navigation</span> <button id="btnOpen" aria-expanded="false" aria-labelledby="nav-label" class="lg:hidden"> <img class="h-6" id="abrir" src="./images/menu.svg"> </button> <div id="topnav_menu" class="fixed flex flex-col inset-0 translate-x-full bg-white
        transition-transform duration-500 ease-in-out p-6 lg:relative
        lg:inset-auto lg:translate-x-0 lg:p-0 dark:bg-[#212121]" aria-labelledby="nav-label" role="dialog"> <button id="btnClose" aria-label="Close" class="self-end lg:hidden"> <img class="h-6" id="cerrar" src="./images/close-menu.svg"> </button> <ul class="flex flex-col items-center gap-6 lg:flex-row lg:gap-4" id="topnav_links"> <li class="link dark:text-[#ffffff]"> <a href="/#home-2" class="font-medium opacity-70 text-base">Servicios</a> </li> <li class="link dark:text-[#ffffff]"> <a href="/#home-3" class="font-medium opacity-70 text-base">Cash Managment</a> </li> <li class="link dark:text-[#ffffff]"> <a href="/#home-4" class="font-medium opacity-70 text-base">Plataforma</a> </li> <li class="link dark:text-[#ffffff]"> <a href="/#contact" class="font-medium opacity-70 text-base">Contacto</a> </li> </ul> </div> </nav> <div class="flex items-center gap-4 lg:gap-6"> <a href="https://bitcompay.vercel.app/" class="border-[3px] border-[#6952EB] text-[#6952EB] dark:text-[#9D8DF9] dark:border-[#9D8DF9] text-xs lg:text-sm font-[625] rounded-full px-2 lg:px-4 py-1 lg:py-2 tracking-wide
        hidden min-[1130px]:inline"> <span class="text-[#6952EB] dark:text-[#9D8DF9] hidden lg:inline">Acceso
</span>Entidades
</a> <button id="theme-switcher"> <img id="theme-switcher-img" class="h-8 w-8 lg:h-[2.7rem] lg:w-[2.7rem]" src="./images/theme-switcher.png" alt="theme-switcher"> </button> </div> </div> </header>   `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, subtitle, subColor, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-center" data-astro-cid-azbpcp4f> <h2 id="title"${addAttribute(`text-[#85ce81] uppercase font-[600] ${color}`, "class")} data-astro-cid-azbpcp4f> ${title} </h2> <p id="subtitle"${addAttribute(`font-[500] w-[85%] md:w-[66%] ${subColor}`, "class")} data-astro-cid-azbpcp4f> ${subtitle} </p> </div> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/SectionTitle.astro", void 0);

const $$Astro = createAstro();
const $$OurNetworks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurNetworks;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="home-5 2xl:max-w-7xl 2xl:mx-auto" id="home-5" data-astro-cid-al3cxhnz> ${page === "home" && renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Redes habilitadas", "subtitle": "Nuestros principales Partners", "subColor": "text-white", "data-astro-cid-al3cxhnz": true })}

    <div class="flex flex-wrap gap-12 justify-center items-center mt-14" data-astro-cid-al3cxhnz> <div class="slide" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/visa.png" alt="visa" data-astro-cid-al3cxhnz> </div> <div class="slide" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/mastercard.png" alt="mastercard" data-astro-cid-al3cxhnz> </div> <div class="slide" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/american-express.png" alt="express" data-astro-cid-al3cxhnz> </div> <div class="slide" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/pago-facil.png" alt="pago facil" data-astro-cid-al3cxhnz> </div> <div class="slide-small" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/rapipago.png" alt="rapipago" id="rapipago" data-astro-cid-al3cxhnz> </div> <div class="slide-small" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/pagomiscuentas.png" alt="pagomiscuentas" data-astro-cid-al3cxhnz> </div> <div class="slide-small" data-astro-cid-al3cxhnz> <img src="/images/networks-logo/payway.png" alt="payway" data-astro-cid-al3cxhnz> </div> </div>

    <hr class="w-full mt-10 mb-8 sm:mt-20 sm:mb-16 bg-[#ffffff] opacity-80" data-astro-cid-al3cxhnz>`} <div class="w-full flex flex-col items-center" data-astro-cid-al3cxhnz> <figure class="mb-10" data-astro-cid-al3cxhnz> <img src="/images/logo-bitcom-light.png" alt="logo-bitcompay" class="h-6" data-astro-cid-al3cxhnz> </figure> <ul class="flex justify-center gap-6" data-astro-cid-al3cxhnz> <li class="text-[#FFFFFF] underline text-xs text-center opacity-80 cursor-pointer" data-astro-cid-al3cxhnz> <a href="/politics" data-astro-cid-al3cxhnz>Términos y Condiciones</a> </li> <li class="text-[#FFFFFF] underline text-xs text-center opacity-80 cursor-pointer" data-astro-cid-al3cxhnz> <a href="/politics" data-astro-cid-al3cxhnz>Políticas de Privacidad</a> </li> </ul> <p class="text-[#FFFFFF] w-full text-center mt-6 mb-2" data-astro-cid-al3cxhnz>
© 2024 Bitcompay. Todos los derechos reservados
</p> </div> </section> `;
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/components/OurNetworks.astro", void 0);

export { $$Header as $, $$OurNetworks as a, $$SectionTitle as b };
