/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.c35989ab.mjs';
import 'html-escaper';
/* empty css                         */
const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true">
<meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>
`;
}, "/Users/185553/Desktop/DE-v02/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const bottomLinks = [
    {
      header: "Services",
      links: [
        {
          name: "Matterport",
          href: "/services/matterport",
          isExternal: false
        },
        {
          name: "Virtual Tours",
          href: "/services/virtual_tours",
          isExternal: false
        },
        {
          name: "Drone",
          href: "/services/drone",
          isExternal: false
        },
        {
          name: "Google Street View",
          href: "/services/google_street_view",
          isExternal: false
        },
        {
          name: "Virtual Reality",
          href: "/services/virtual_reality",
          isExternal: false
        },
        {
          name: "Project Timelapse",
          href: "/services/project_timelapse",
          isExternal: false
        }
      ]
    },
    {
      header: "Company",
      links: [
        {
          name: "Home",
          href: "/",
          isExternal: false
        },
        {
          name: "About",
          href: "/about",
          isExternal: false
        },
        {
          name: "Services",
          href: "/our_services",
          isExternal: false
        },
        {
          name: "Contact",
          href: "/contact",
          isExternal: false
        }
      ]
    },
    {
      header: "Social",
      links: [
        {
          name: "Matterport",
          href: "https://matterport.com/discover/account/LY4pDsLCZVL",
          isExternal: true
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/company/digital-endeavours/about/",
          isExternal: true
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/digitalendeavours/",
          isExternal: true
        },
        {
          name: "YouTube",
          href: "https://www.youtube.com/@digitalendeavours",
          isExternal: true
        }
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-darkBlue/10 dark:bg-bright-blue/10 mt-16 py-16 lg:mt-20 lg:py-20" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col justify-between gap-12 sm:gap-16 lg:flex-row">
      <div class="flex max-w-sm flex-col items-start gap-6 sm:gap-8">
        <img class="h-8 w-auto" width="65" height="40" :src="$store.theme.isDark ? '/assets/logo-inverted.svg' : '/assets/logo.svg'" alt="Stone">
        <p class="text-darkBlue dark:text-very-light-grey text-base">
          Digital Endeavours offers premier 3D scanning and virtual tours across India, utilizing advanced Matterport technology to create immersive digital experiences for real estate, retail, and architecture.
        </p>
        <p class="text-darkBlue dark:text-very-light-grey text-sm" x-data="{ year: new Date().getFullYear() }">© <span x-text="year"></span> Digital Endeavours. All Rights Reserved.</p>
      </div>

      <!-- Bottom links -->
      <div class="grid max-w-xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3">
        ${bottomLinks.map((group) => renderTemplate`<div class="flex flex-col gap-4">
              <p class="text-base font-bold">${group.header}</p>
              <ul role="list" class="flex flex-col gap-3">
                ${group.links.map((link) => renderTemplate`<li>
                    <a${addAttribute(link.href, "href")} class="focus-visible:outline-primary-950 dark:focus-visible:outline-primary-200 inline-flex items-center gap-1 rounded-md text-base hover:underline focus-visible:outline focus-visible:outline-2"${addAttribute(link.isExternal ? "_blank" : void 0, "target")}${addAttribute(link.isExternal ? "noopener" : void 0, "rel")}>
                      ${link.name}
                      ${link.isExternal && renderTemplate`<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                        </svg>`}
                    </a>
                  </li>`)}
              </ul>
            </div>`)}
      </div>
    </div>
  </div>
</footer>`;
}, "/Users/185553/Desktop/DE-v02/src/components/layout/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    {
      ref: "01",
      name: "Home",
      href: "/"
    },
    {
      ref: "02",
      name: "About",
      href: "/about"
    },
    {
      ref: "03",
      name: "Services",
      href: "/our_services"
    },
    {
      ref: "04",
      name: "Blog",
      href: "/"
    },
    {
      ref: "05",
      name: "Contact",
      href: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header x-data="{ open: false }" class="transition" :class="{ 'bg-primary-500/10 dark:bg-primary-400/10': open, 'bg-primary-50 dark:bg-darkBlue': !(open) }">
  <div class="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
    <!-- Brand logo -->
    <div class="flex">
      <a href="/" class="focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 rounded-md focus-visible:outline focus-visible:outline-2">
        <span class="sr-only">Digital Endeavours</span>
        <img class="h-8 w-auto" width="65" height="40" :src="$store.theme.isDark ? '/assets/logo-inverted.svg' : '/assets/logo.svg'" alt="DE">
      </a>
    </div>

    <!-- Actions -->
    <div class="-mr-2 flex items-center space-x-2 sm:space-x-3">
      <!-- Whatsapp icon -->
      <a type="button" class="text-whatapps-green dark:text-whatapps-green hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" href="https://wa.me/917710771360" target="_blank">
      <span class="sr-only">Whatsapp button</span>
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>
    </a>
      <!-- Phone icon -->
      <a type="button" class="text-blue dark:text-bright-blue hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" href="tel:+917710771360" target="_blank">
      <span class="sr-only">Call button</span>
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
    </a>
      <!-- Toggle theme mode -->
      <button type="button" class="text-primary-950 dark:text-orange hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" x-data @click="$store.theme.toggle()">
        <span class="sr-only">Toggle theme mode</span>
        <svg x-cloak class="h-6 w-6" :class="{ 'hidden': !($store.theme.isDark) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
        </svg>
        <svg x-cloak class="h-6 w-6" :class="{ 'hidden': $store.theme.isDark }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"></path>
        </svg>
      </button>

      <!-- Toggle menu -->
      <button type="button" class="text-primary-950 dark:text-primary-200 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 ring-primary-950 inline-flex h-14 w-14 items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2" @click="open = !open" @mousedown="if (open) $event.preventDefault()" aria-controls="website-menu" aria-expanded="false" :aria-expanded="open.toString()">
        <span class="sr-only">Toggle menu</span>
        <svg x-cloak class="h-8 w-8" :class="{ 'hidden': open, 'block': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 8H5V10H19V8ZM19 14H5V16H19V14Z"></path>
        </svg>
        <svg x-cloak class="h-8 w-8" :class="{ 'block': open, 'hidden': !(open) }" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Menu content -->
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8" id="website-menu" x-cloak x-show="open" x-collapse x-collapse.duration.500ms>
    <div class="grid grid-cols-1 gap-16 pb-24 pt-6 lg:grid-cols-2 lg:pt-12">
      <div class="bg-primary-500/10 dark:bg-bright-blue/10 hidden items-center justify-center rounded-3xl px-6 py-8 lg:flex bg-[url(/assets/de-hero-bg-03.png)] bg-cover bg-no-repeat">
        <p class="text-primary-950/70 dark:text-primary-200/70 max-w-sm text-xl italic leading-loose">
        Experience the art of digital precision with <span class="font-medium">Digital Endeavours</span>, where every space becomes a canvas for our advanced 3D scanning and virtual tours. Providing services Pan India.
        </p>
      </div>

      <!-- Navigation -->
      <nav class="divide-primary-900/10 dark:divide-primary-300/10 flex flex-col gap-1 divide-y">
        ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-primary-950 dark:text-primary-200 group inline-flex py-6 text-3xl font-medium tracking-tight transition focus-visible:outline-none sm:py-8 sm:text-4xl">
              <div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex flex-1 items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                <div class="flex items-center gap-6">
                  <span class="text-xs">${link.ref}</span>
                  <span class="group-hover:underline">${link.name}</span>
                </div>
                <svg class="text-navyBlue dark:text-bright-blue h-6 w-6 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </div>
            </a>`)}
      </nav>
    </div>
  </div>
</header>`;
}, "/Users/185553/Desktop/DE-v02/src/components/layout/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en" x-cloak x-data :class="{ 'dark': $store.theme.isDark }" class="astro-SCKKX6R4">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="generator"`, '>\n    <meta name="description"', '>\n    <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"><\/script>\n    \n    <title>', "</title>\n    ", "\n  ", '</head>\n  <body class="bg-very-light-grey text-primary-950 dark:bg-darkBlue dark:text-very-light-grey antialiased transition astro-SCKKX6R4">\n    ', '\n    <main class="astro-SCKKX6R4">\n      ', "\n    </main>\n    ", "\n    \n    \n  </body>\n</html>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "class": "astro-SCKKX6R4" }), renderHead(), renderComponent($$result, "Header", $$Header, { "class": "astro-SCKKX6R4" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-SCKKX6R4" }));
}, "/Users/185553/Desktop/DE-v02/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Page not found. Please check the URL in the address bar and try again.", "title": "Not found \xB7 Stone" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col items-start gap-8 sm:gap-10">
        <div class="flex flex-col gap-4 sm:gap-6">
          <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            <div class="bg-gradient-to-r from-blue dark:from-tropicalIndigo to-bright-blue dark:to-light-blue bg-clip-text text-transparent">404</div>
            <div>Page not found</div>
          </h1>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
            Please check the URL in the address bar and try again.
          </p>
        </div>
        <a href="/" class="bg-blue dark:bg-bright-blue hover:bg-bright-blue dark:hover:bg-blue focus-visible:outline-blue dark:focus-visible:outline-bright-blue dark:text-primary-950 hover:text-primary-950 dark:hover:text-white inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Go back home
        </a>
      </div>
    </div>
  </section>
` })}`;
}, "/Users/185553/Desktop/DE-v02/src/pages/404.astro", void 0);

const $$file = "/Users/185553/Desktop/DE-v02/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
