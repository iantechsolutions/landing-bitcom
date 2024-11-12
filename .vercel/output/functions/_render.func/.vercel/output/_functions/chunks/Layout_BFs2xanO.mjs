import { c as createComponent, r as renderTemplate, a as renderSlot, b as addAttribute, d as renderHead, e as createAstro } from './astro/server_DhRKUSpU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, page } = Astro2.props;
  const pageStyles = {
    home: "bg-landing-light dark:bg-landing-dark",
    politics: "bg-[#eae9e9] dark:bg-[#131313]"
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1.0 "><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!--ROBOTO--><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"><title>', "</title>", "</head> <body", "> ", ' <!--CARROUSEL--> <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" crossorigin="anonymous" defer><\/script> <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet" crossorigin="anonymous"> </body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(`dark:text-[#ffffff] ${pageStyles[page]}`, "class"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Usuario/Documents/code folder/IANTECH/landing-bitcom/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
