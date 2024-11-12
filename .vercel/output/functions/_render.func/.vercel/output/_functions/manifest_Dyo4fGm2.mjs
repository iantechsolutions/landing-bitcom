import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CVbklIzm.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DhRKUSpU.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Documents/code%20folder/IANTECH/landing-bitcom/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.9_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.o-fX7Ao7.css"},{"type":"external","src":"/_astro/contact.DJNKZYOY.css"},{"type":"inline","content":"body{background-image:url(/images/1440.png);background-size:cover}.header[data-astro-cid-uw5kdbxl]{height:auto;display:grid;grid-template-columns:repeat(2,2fr);align-items:center;background-color:#212121}.logo-container[data-astro-cid-uw5kdbxl]{height:100%;background-color:#212121;padding-left:8vw}.logo-container[data-astro-cid-uw5kdbxl] figure[data-astro-cid-uw5kdbxl]{border-left:.3vh dotted #1bdfb7;border-radius:0 3vh;padding-top:3.5vh;padding-bottom:3vh;border-bottom:.3vh dotted #1bdfb7;display:flex;align-items:center;height:100%}.logo[data-astro-cid-uw5kdbxl]{height:4vh;margin-left:10dvw}.nav[data-astro-cid-uw5kdbxl]{padding-top:11vh;border-bottom:.3vh dotted #1bdfb7}.contacto[data-astro-cid-uw5kdbxl]{display:flex;justify-content:center;margin-top:8vh}.contact-container[data-astro-cid-uw5kdbxl]{background-color:#fff;padding:3vw;border-radius:40px;text-align:center}h1[data-astro-cid-uw5kdbxl]{color:#1bdfb7;font-weight:500;font-size:2.3vw}p[data-astro-cid-uw5kdbxl]{font-size:1.1vw;font-weight:500;color:#666;margin-bottom:2vh}form[data-astro-cid-uw5kdbxl]{display:flex;flex-direction:column;align-items:start;border-top:.8px solid #666}label[data-astro-cid-uw5kdbxl]{width:25vw;margin-top:10px;text-align:left;font-size:0vw;color:gray}input[data-astro-cid-uw5kdbxl],textarea[data-astro-cid-uw5kdbxl]{width:100%;padding:10px;background-color:#e6e6e6;margin-top:1vh;border:.2px solid #ccc;border-radius:5px}textarea[data-astro-cid-uw5kdbxl]{height:15vh}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.o-fX7Ao7.css"}],"routeData":{"route":"/ejemplo","isIndex":false,"type":"page","pattern":"^\\/ejemplo\\/?$","segments":[[{"content":"ejemplo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ejemplo.html","pathname":"/ejemplo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.av4Oha6s.js"}],"styles":[{"type":"external","src":"/_astro/contact.o-fX7Ao7.css"},{"type":"external","src":"/_astro/contact.DJNKZYOY.css"},{"type":"inline","content":"#title[data-astro-cid-azbpcp4f]{font-size:.8rem;font-size:clamp(.8rem,.8rem + .5999999999999999vw,1.4rem)}#subtitle[data-astro-cid-azbpcp4f]{font-size:.9rem;font-size:clamp(.9rem,.76rem + .9001vw,1.8rem)}.home-5[data-astro-cid-al3cxhnz]{background-color:#212121;margin-top:10rem;border-top-left-radius:90px;border-top-right-radius:90px;padding:4rem 2rem .5rem}.slide[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:5vw;height:auto}.slide-small[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:12vw;max-width:157px;height:auto}#rapipago[data-astro-cid-al3cxhnz]{width:8vw;max-width:104px;height:auto}@media (max-width: 768px){.home-5[data-astro-cid-al3cxhnz]{margin-top:5rem;border-top-left-radius:40px;border-top-right-radius:40px}.slide[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:10vw;height:auto}.slide-small[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:20vw;height:auto}#rapipago[data-astro-cid-al3cxhnz]{width:11vw;height:auto}}\n.content[data-astro-cid-5zgiwn3a]{padding-left:8rem;padding-right:8rem;margin-bottom:10rem;margin-top:13rem;display:flex;@media (max-width: 1024px){margin-top:7rem;padding-left:2rem;padding-right:2rem;flex-direction:column}}h3[data-astro-cid-5zgiwn3a]{margin-botton:1.5rem;font-weight:500}.legales[data-astro-cid-5zgiwn3a]{padding:1rem 2.5rem 1rem .5rem;@media (max-width: 678px){padding-left:0;padding-right:0}}.legales-title[data-astro-cid-5zgiwn3a]{font-size:1.25rem;font-weight:600;text-transform:uppercase;color:#85ce81;@media (max-width: 678px){font-size:1rem}}.legales-list[data-astro-cid-5zgiwn3a]{margin-top:1.5rem;list-style-type:none;@media (max-width: 1024px){display:flex;gap:3rem}@media ((max-width: 678px)){gap:1rem}}.legales-item[data-astro-cid-5zgiwn3a]{font-weight:500;color:#9b9999;font-size:1.25rem;margin-bottom:1.5rem;@media (max-width: 1024px){margin-bottom:.7rem}@media (max-width: 678px){font-size:.9rem}}.legales-item[data-astro-cid-5zgiwn3a].active{color:#3e3e3e;font-weight:700}.legales-item[data-astro-cid-5zgiwn3a]:hover{cursor:pointer}.content-body[data-astro-cid-5zgiwn3a]{flex:1;padding-left:2.5rem;padding-top:1rem;padding-bottom:1rem;@media (max-width: 1024px){padding-left:0}display:none}.content-body[data-astro-cid-5zgiwn3a].show{display:block}.content-title[data-astro-cid-5zgiwn3a]{font-size:2rem;font-weight:700;@media (max-width: 1024px){font-size:1.5rem}@media (max-width: 678px){font-size:1.3rem}}.content-text[data-astro-cid-5zgiwn3a]{margin-top:1.25rem;font-size:1.25rem;@media screen and (max-width: 1024px){font-size:1rem}@media screen and (max-width: 678px){font-size:.9rem}}\n"}],"routeData":{"route":"/politics","isIndex":false,"type":"page","pattern":"^\\/politics\\/?$","segments":[[{"content":"politics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politics.astro","pathname":"/politics","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.XJYZo_8y.js"}],"styles":[{"type":"external","src":"/_astro/contact.o-fX7Ao7.css"},{"type":"external","src":"/_astro/contact.DJNKZYOY.css"},{"type":"external","src":"/_astro/index.BZiEfgbE.css"},{"type":"inline","content":"#title[data-astro-cid-azbpcp4f]{font-size:.8rem;font-size:clamp(.8rem,.8rem + .5999999999999999vw,1.4rem)}#subtitle[data-astro-cid-azbpcp4f]{font-size:.9rem;font-size:clamp(.9rem,.76rem + .9001vw,1.8rem)}.home-5[data-astro-cid-al3cxhnz]{background-color:#212121;margin-top:10rem;border-top-left-radius:90px;border-top-right-radius:90px;padding:4rem 2rem .5rem}.slide[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:5vw;height:auto}.slide-small[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:12vw;max-width:157px;height:auto}#rapipago[data-astro-cid-al3cxhnz]{width:8vw;max-width:104px;height:auto}@media (max-width: 768px){.home-5[data-astro-cid-al3cxhnz]{margin-top:5rem;border-top-left-radius:40px;border-top-right-radius:40px}.slide[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:10vw;height:auto}.slide-small[data-astro-cid-al3cxhnz] img[data-astro-cid-al3cxhnz]{width:20vw;height:auto}#rapipago[data-astro-cid-al3cxhnz]{width:11vw;height:auto}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/pages/politics.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/ejemplo@_@html":"pages/ejemplo.astro.mjs","\u0000@astro-page:src/pages/politics@_@astro":"pages/politics.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.9_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-manifest":"manifest_Dyo4fGm2.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.av4Oha6s.js","/astro/hoisted.js?q=1":"_astro/hoisted.XJYZo_8y.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contact.DJNKZYOY.css","/_astro/contact.o-fX7Ao7.css","/_astro/index.BZiEfgbE.css","/favicon.svg","/images/Bitcompay-BACKGROUND-Black-entero.jpg","/images/Bitcompay-BACKGROUND-White.jpg","/images/btntop.png","/images/cerrar menu.png","/images/check.svg","/images/close-menu-dark.svg","/images/close-menu.svg","/images/data-fiscal.png","/images/logo-bitcom-dark.png","/images/logo-bitcom-light.png","/images/menu-dark.svg","/images/menu-svgrepo-com.svg","/images/menu.svg","/images/mockup 1.png","/images/open-menu.svg","/images/theme-switcher-dark.png","/images/theme-switcher.png","/_astro/Header.astro_astro_type_script_index_2_lang.DnVVPPq6.js","/_astro/hoisted.av4Oha6s.js","/_astro/hoisted.XJYZo_8y.js","/images/networks-logo/american-express.png","/images/networks-logo/mastercard.png","/images/networks-logo/pago-facil.png","/images/networks-logo/pagomiscuentas.png","/images/networks-logo/payway.png","/images/networks-logo/rapipago.png","/images/networks-logo/visa.png","/images/payment-icons/canal-electronico.png","/images/payment-icons/cobranzas.png","/images/payment-icons/debito-automatico.png","/images/payment-icons/debito-directo-bancario.png","/images/payment-icons/efectivo.png","/images/payment-icons/gateway.png","/images/platform-icons/analisis-estadistico.svg","/images/platform-icons/consulta-movimientos.svg","/images/platform-icons/distribucion-comprobantes.svg","/images/platform-icons/gestion-multicanal.svg","/images/platform-icons/notificaciones-personalizadas.svg","/images/platform-icons/reportes-personalizados.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"jLaaEPzJECksK0dbjd7cUjbPjORddB8ABcXfhhGpHBA=","experimentalEnvGetSecretEnabled":true});

export { manifest };
