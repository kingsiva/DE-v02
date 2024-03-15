/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.c35989ab.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.db0b234b.mjs';

const $$Astro$3 = createAstro();
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Stats;
  const stats = [
    {
      name: "Years",
      value: "10+",
      icon: "M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325 10.6673 9.33325ZM11.4173 11.9999 9.18905 10.8115 8.00065 8.58325 6.81224 10.8115 4.58398 11.9999 6.81224 13.1883 8.00065 15.4166 9.18905 13.1883 11.4173 11.9999ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"
    },
    {
      name: "Projects",
      value: "700+",
      icon: "M15 3C15.5523 3 16 3.44772 16 4V6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H8V4C8 3.44772 8.44772 3 9 3H15ZM16 8H8V19H16V8ZM4 8V19H6V8H4ZM14 5H10V6H14V5ZM18 8V19H20V8H18Z"
    },
    {
      name: "Clientele",
      value: "50+",
      icon: "M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
    },
    {
      name: "Sq.ft.",
      value: "7M+",
      icon: "M17 19H19V14H10V5H5V7H7V9H5V11H8V13H5V15H7V17H5V19H7V17H9V19H11V16H13V19H15V17H17V19ZM12 12H20C20.5523 12 21 12.4477 21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H11C11.5523 3 12 3.44772 12 4V12Z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="flex flex-col gap-12 sm:gap-16">
            <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Insights</h2>
            <dl class="grid grid-cols-2 gap-6 sm:grid-cols-4">
                ${stats.map((stat) => renderTemplate`<div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
                        <div class="flex flex-row items-center justify-between">
                            <div class="flex flex-col">
                                <dt class="text-base">${stat.name}</dt>
                                <dd class="text-3xl text-navyBlue dark:text-bright-blue font-medium tracking-tight">
                                  ${stat.value}
                                </dd>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" class="fill-darkBlue/10 dark:fill-bright-blue/30">
                                    <path${addAttribute(stat.icon, "d")}></path>
                                </svg>
                            </div>
                        </div>
                    </div>`)}
            </dl>
        </div>
    </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Stats.astro", void 0);

const $$Astro$2 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="bg-darkBlue/10 dark:bg-bright-blue/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10 bg-[url(/assets/de-hero-bg-03.png)] bg-cover bg-no-repeat">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Still have questions?</h2>
        <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
          Please describe your case to receive the most accurate advice.
        </p>
      </div>
      <a href="/contact" class="bg-blue dark:bg-bright-blue hover:bg-bright-blue dark:hover:bg-blue focus-visible:outline-blue dark:focus-visible:outline-bright-blue dark:text-primary-950 hover:text-primary-950 dark:hover:text-white inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Contact Us
      </a>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/services/Cta.astro", void 0);

const $$Astro$1 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue dark:from-tropicalIndigo to-bright-blue dark:to-light-blue bg-clip-text text-transparent">Drone Services</h1>
      <p class="text-darkBlue dark:text-very-light-grey mx-auto max-w-xl text-lg sm:text-xl">
        Wide range of futurestic services are offered by Digital Endeavours. Consult with us for to provide a solution that best suits your business.
      </p>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/services/drone/Heading.astro", void 0);

const $$Astro = createAstro();
const $$Drone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Drone;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Our Matterport India 3D Virtual Tour services include 3D Scanning, 360\xB0 Virtual Tours for both Commercial, Residential properties.", "title": "Drone Services India \xB7 Digital Endeavours" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Heading", $$Heading, {})}
${renderComponent($$result2, "Stats", $$Stats, {})}
${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "/Users/185553/Desktop/DE-v02/src/pages/services/drone.astro", void 0);

const $$file = "/Users/185553/Desktop/DE-v02/src/pages/services/drone.astro";
const $$url = "/services/drone";

const drone = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Drone,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Stats as $, $$Cta as a, drone as d };
