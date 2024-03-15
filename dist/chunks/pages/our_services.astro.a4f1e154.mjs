/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.c35989ab.mjs';
import 'html-escaper';
import { $ as $$Services } from './index.astro.a10289ff.mjs';
import { a as $$Cta } from './drone.astro.84310174.mjs';
import { $ as $$Layout } from './404.astro.db0b234b.mjs';
/* empty css                           *//* empty css                         */
const $$Astro$1 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue dark:from-tropicalIndigo to-bright-blue dark:to-light-blue bg-clip-text text-transparent">We Offer</h1>
      <p class="text-darkBlue dark:text-very-light-grey mx-auto max-w-xl text-lg sm:text-xl">
        Wide range of futurestic services are offered by Digital Endeavours. Consult with us for to provide a solution that best suits your business.
      </p>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/services/Heading.astro", void 0);

const $$Astro = createAstro();
const $$OurServices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurServices;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Explore more about our services. We bring the real estate 3d scanning services at your door step.", "title": "Services \xB7 Digital Endeavours" }, { "default": ($$result2) => renderTemplate`
${renderComponent($$result2, "Heading", $$Heading, {})}
${renderComponent($$result2, "Services", $$Services, {})}
${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "/Users/185553/Desktop/DE-v02/src/pages/our_services.astro", void 0);

const $$file = "/Users/185553/Desktop/DE-v02/src/pages/our_services.astro";
const $$url = "/our_services";

export { $$OurServices as default, $$file as file, $$url as url };
