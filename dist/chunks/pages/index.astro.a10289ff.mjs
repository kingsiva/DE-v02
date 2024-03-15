/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.c35989ab.mjs';
import 'html-escaper';
/* empty css                           */import { $ as $$Stats } from './drone.astro.84310174.mjs';
import { $ as $$Layout } from './404.astro.db0b234b.mjs';

const $$Astro$7 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">About DE</h2>
      <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
        <p class="text-dark-grey dark:text-very-light-grey text-base sm:text-lg">
          Digital Endeavours is an established company with a rich history spanning Ten years. We specialize in creating high-quality assets for Digital and Virtual Marketing, utilizing cutting-edge technologies such as Matterport 3D tours, 360° Virtual Tours, Google Street View, 360° Land and drone photography. Our extensive portfolio includes the successful delivery of over 700 projects, covering a staggering 4 Million+ square feet of 3D scanned spatial data across Globe for various industries.
        </p>
        <a href="/about" class="bg-blue dark:bg-bright-blue hover:bg-bright-blue dark:hover:bg-blue focus-visible:outline-blue dark:focus-visible:outline-bright-blue dark:text-primary-950 hover:text-primary-950 dark:hover:text-white inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Read about us
        </a>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/About.astro", void 0);

const $$Astro$6 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="bg-darkBlue/10 dark:bg-bright-blue/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10 bg-[url(/assets/de-hero-bg-03.png)] bg-cover bg-no-repeat">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
          Let's make something amazing together
        </h2>
        <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-2xl text-lg">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
          sagittis vel nulla nec.
        </p>
      </div>
      <a href="/contact" class="bg-blue dark:bg-bright-blue hover:bg-bright-blue dark:hover:bg-blue focus-visible:outline-blue dark:focus-visible:outline-bright-blue dark:text-primary-950 hover:text-primary-950 dark:hover:text-white inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Contact us
      </a>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Cta.astro", void 0);

const $$Astro$5 = createAstro();
const $$Expertise = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Expertise;
  const features = [
    {
      id: "expertise-1",
      name: "What is Matterport 3D scanning? How can it benefit my business?",
      description: "Matterport 3D scanning creates a digital replica of a physical space. This allows potential customers to virtually tour your location, improving accessibility and showcasing your offerings in an immersive way."
    },
    {
      id: "expertise-2",
      name: "360\xB0 virtual tours vs. photos: What are the advantages?",
      description: "360-degree virtual tours offer a more interactive experience, allowing viewers to explore a space at their own pace. They provide a more complete picture compared to static photos."
    },
    {
      id: "expertise-3",
      name: "Drone services: Beyond aerial photography?",
      description: "Drone services can be used for roof inspections, surveying land, capturing event footage, and even thermal imaging."
    },
    {
      id: "expertise-4",
      name: "Google Street View integration: How does it help businesses?",
      description: "Having your business showcased on Google Street View increases online visibility and allows potential customers to virtually explore your storefront before visiting in person."
    },
    {
      id: "expertise-5",
      name: "VR experiences: What can you create?",
      description: "Digital Endeavours can create virtual reality experiences for training purposes, product demonstrations, or even architectural walkthroughs, allowing viewers to interact with a space in a fully immersive way."
    },
    {
      id: "expertise-6",
      name: "Project timelapse videos: Benefit for construction projects?",
      description: "Project timelapse videos provide a compelling visual record of your construction progress, perfect for marketing purposes, client updates, and showcasing your teams capabilities."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
      <div class="lg:col-span-2">
        <dl class="-mt-3" x-data="{ selected: null, toggle(value) { this.selected = this.selected === value ? null : value } }">
          ${features.map((feature, index) => renderTemplate`<div class="rounded-3xl px-4 transition"${addAttribute(`{ id: ${index}, get isOpen() { return this.id === this.selected }, get isNextOpen() { return (this.id + 1) === this.selected } }`, "x-data")} x-bind:class="{ 'bg-primary-500/10 dark:bg-primary-400/10': isOpen }">
                <dt class="border-b text-lg transition" x-cloak x-bind:class="{ 'border-transparent': isOpen || isNextOpen, 'border-primary-900/10 dark:border-primary-300/10': !(isOpen || isNextOpen) }">
                  <button type="button" class="group block w-full py-6 text-left transition focus-visible:outline-none"${addAttribute(feature.id, "aria-controls")} x-on:click="toggle(id)" aria-expanded="false" x-bind:aria-expanded="isOpen.toString()">
                    <div class="group-focus-visible:outline-primary-950 dark:group-focus-visible:outline-primary-200 flex items-center justify-between rounded-3xl group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-2">
                      <span class="font-medium">${feature.name}</span>
                      <span class="ml-6 flex h-7 items-center">
                        <svg class="text-primary-600 dark:text-primary-400 h-6 w-6 rotate-0 transform transition duration-200 ease-in-out" x-bind:class="{ '-rotate-180': isOpen, 'rotate-0': !isOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </dt>
                <dd class="pb-6 pr-6"${addAttribute(feature.id, "id")} x-show="isOpen" x-cloak x-collapse>
                  <p class="text-primary-950/70 dark:text-primary-200/70 text-base">
                    ${feature.description}
                  </p>
                </dd>
              </div>`)}
        </dl>
      </div>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Expertise.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 bg-cover bg-bottom bg-no-repeat bg-[url('/assets/de-web-banner-light.jpg')] dark:bg-[url('/assets/de-web-banner-dark.jpg')]">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-start gap-8 sm:gap-10">
        <div class="flex max-w-3xl flex-col items-start gap-4 sm:gap-6">
          <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            <span class="bg-gradient-to-r from-blue dark:from-tropicalIndigo to-bright-blue dark:to-light-blue bg-clip-text text-transparent">Recalibrate</span> your Business with Digital & Virtual Reality Technologies
          </h1>
          <p class="text-dark-grey dark:text-very-light-grey text-lg sm:text-xl">
            Matterport India 3D Scanning, 360° Virtual Tours, Google Street
            View, 3D/360° Real Estate VR Tours & VR Walkthrough, Google, SEO,
            SMM, Affiliate Marketing.
          </p>
        </div>
        <div class="flex flex-row gap-5 max-sm:flex-col">
          <a href="/our_services" class="bg-blue dark:bg-bright-blue hover:bg-bright-blue dark:hover:bg-blue focus-visible:outline-blue dark:focus-visible:outline-bright-blue dark:text-primary-950 hover:text-primary-950 dark:hover:text-white inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Explore Our Services
          </a>
          <a href="/contact" class="bg-orange dark:bg-orange hover:bg-orange/80 dark:hover:bg-orange/80 focus-visible:outline-orange dark:focus-visible:outline-orange dark:text-darkBlue hover:text-darkBlue dark:hover:text-darkBlue inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-darkBlue transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Get in Touch
          </a>
        </div>
      </div>

      <div class="[&_[x-cloak]]:hidden" x-data="{ modalOpen: false }">
        <!-- Video thumbnail -->
        <button class="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group" @click="modalOpen = true" aria-controls="modal" aria-label="Watch the video">
          <img class="w-full rounded-3xl shadow-2xl shadow-primary-900/40 dark:shadow-bright-blue/40 transition-shadow duration-300 ease-in-out" src="/assets/de-hero-img.jpg" alt="Modal video thumbnail">
          <!-- Play icon -->
          <span class="absolute animate-ping hover:animate-none hover:hidden bg-bright-blue/90 dark:bg-navyBlue/90 w-12 h-12 rounded-full"></span>
          <svg class="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
            <circle class="fill-bright-blue dark:fill-navyBlue" cx="36" cy="36" r="36" fill-opacity="1"></circle>
            <path class="fill-navyBlue dark:fill-bright-blue drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"></path>
          </svg>
        </button>
        <!-- End: Video thumbnail -->

        <!-- Modal backdrop -->
        <div class="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity" x-show="modalOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-out duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" aria-hidden="true" x-cloak>
        </div>
        <!-- End: Modal backdrop -->

        <!-- Modal dialog -->
        <div id="modal" class="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6" role="dialog" aria-modal="true" x-show="modalOpen" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 scale-75" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-75" x-cloak>
          <div class="lg:w-3/4 sm:w-full md:w-full mx-auto w-full h-full flex items-center">
            <div class="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden" @click.outside="modalOpen = false" @keydown.escape.window="modalOpen = false">
              <iframe x-ref="iframe" class="w-full h-full" width="560" height="315" src="https://www.youtube-nocookie.com/embed/D_SJNeUd14k?si=LXXmhDmq_x50w-uZ&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <!-- End: Modal dialog -->
      </div>
    </div>
  </div>
  
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      step: "01",
      image: "/assets/de-matterport-thumb-500x300.jpg",
      name: "Matterport Services",
      description: "Transform spaces into immersive digital experiences with Matterport 3D scanning, perfect for real estate, architectural visualization, and interactive marketing.",
      link: "/services/matterport"
    },
    {
      step: "02",
      image: "/assets/de-360-tour-thumb-500x300.jpg",
      name: "360\xB0 Virtual Tours",
      description: "Discover spaces in panoramic detail with our 360\xB0 Virtual Tours, ideal for real estate showcases, tourism experiences, and educational virtual visits.",
      link: "/services/virtual_tours"
    },
    {
      step: "03",
      image: "/assets/de-drone-services-thumb-500x300.jpg",
      name: "Drone Services",
      description: "Capture new perspectives with Drone Services, offering aerial views, land surveys, and photogrammetry for real estate, cinematic content, and topographic analysis.",
      link: "/services/drone"
    },
    {
      step: "04",
      image: "/assets/de-google-street-view-thumb-500x300.jpg",
      name: "Google Street View",
      description: "Enhance your online footprint with our Google Street View integration, showcasing your location globally, perfect for businesses aiming to boost digital presence.",
      link: "/services/google_street_view"
    },
    {
      step: "05",
      image: "/assets/de-vr-thumb-500x300.jpg",
      name: "Virtual Reality",
      description: "Immerse in new dimensions with our Virtual Reality services, creating captivating experiences for innovative marketing, training, and interactive exploration.",
      link: "/services/virtual_reality"
    },
    {
      step: "06",
      image: "/assets/de-project-timelapse-thumb-500x300.jpg",
      name: "Project Timelapse",
      description: "Visualize progress dynamically with our Project Timelapse service, ideal for construction documentation, event recording, and environmental monitoring.",
      link: "/services/project_timelapse"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20 astro-7FSFP5W6">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 astro-7FSFP5W6">
    <div class="flex flex-col gap-12 sm:gap-16 astro-7FSFP5W6">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl astro-7FSFP5W6">Services</h2>
      <div class="grid gap-8 lg:grid-cols-3 astro-7FSFP5W6">
        ${services.map((service) => renderTemplate`<div class="bg-darkBlue/10 dark:bg-bright-blue/10 flex hover:ring-2 hover:ring-current/50 hover:ring-opacity-2 dark:hover:ring-opacity-2 flex-col gap-12 rounded-3xl px-6 py-8 relative bg-cover bg-bottom bg-no-repeat hover:bg-[url('/assets/de-hero-bg-03.png')] transition-all ease-in-out delay-150 astro-7FSFP5W6">
              <img class="w-full h-auto rounded-2xl astro-7FSFP5W6"${addAttribute(service.image, "src")} alt="">
              <p class="text-[6rem] font-medium absolute text-navyBlue dark:text-white mix-blend-overlay px-3 bottom-0 right-0 astro-7FSFP5W6">
                ${service.step}
              </p>
              <div class="flex flex-col gap-4 astro-7FSFP5W6">
                <h3 class="text-xl font-medium astro-7FSFP5W6">${service.name}</h3>
                <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg astro-7FSFP5W6">
                  ${service.description}
                </p>
              </div>
              <a${addAttribute(service.link, "href")} class="focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-bright-blue inline-flex items-center justify-start rounded-full border border-transparent text-base font-medium text-navyBlue transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 astro-7FSFP5W6">
                Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="astro-7FSFP5W6"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" class="astro-7FSFP5W6"></path></svg>
              </a>
            </div>`)}
      </div>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Services.astro", void 0);

const $$Astro$2 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const testimonials = [
    {
      name: "David Lee",
      description: "Facilities Manager",
      image: "/assets/testimonial-1.webp",
      message: "\u201COur Matterport scan eased employee office move anxiety! Staff virtually toured new desks beforehand, reducing stress & boosting excitement. \u201D"
    },
    {
      name: "Sarah Miller",
      description: "Community Manager",
      image: "/assets/testimonial-2.webp",
      message: "\u201CCo-working thrives on flexibility! Our Matterport scan lets potential members explore every work area, leading to a surge in new memberships.\u201D"
    },
    {
      name: "John Williams",
      description: "Leasing Agent",
      image: "/assets/testimonial-3.webp",
      message: "\u201CPhotos could not capture our premises unique layout. With Matterport 3D immersive experience helped us stand out & secure leases faster.\u201D"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="v mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col items-center gap-12 lg:gap-20">
      <h2 class="mx-auto max-w-xl text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Trusted by the largest companies in the world
      </h2>
      <div class="divide-primary-900/10 dark:divide-primary-300/10 grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        ${testimonials.map((testimonial) => renderTemplate`<figure class="mx-auto flex max-w-lg flex-col items-center gap-6 py-8 lg:px-8 lg:py-0">
              <div class="flex flex-row gap-2">
                ${[...Array(5)].map(() => renderTemplate`<svg class="text-orange dark:text-orange h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>`)}
              </div>
              <blockquote class="text-primary-950/70 dark:text-primary-200/70 text-center text-lg italic leading-loose">
                <p>${testimonial.message}</p>
              </blockquote>
              <figcaption class="flex flex-col gap-4">
                <img class="mx-auto h-8 w-8 rounded-full"${addAttribute(testimonial.image, "src")} alt="">
                <div class="text-center">
                  <div class="text-base font-medium">${testimonial.name}</div>
                  <div class="text-primary-950/70 dark:text-primary-200/70 text-sm">
                    ${testimonial.description}
                  </div>
                </div>
              </figcaption>
            </figure>`)}
      </div>
    </div>
  </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Testimonials.astro", void 0);

const $$Astro$1 = createAstro();
const $$Clients = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Clients;
  const clients = [
    {
      name: "Google",
      image: "/assets/clients/google.svg"
    },
    {
      name: "Bosch",
      image: "/assets/clients/bosch.svg"
    },
    {
      name: "Brigade",
      image: "/assets/clients/brigade.svg"
    },
    {
      name: "Cargill",
      image: "/assets/clients/cargill.svg"
    },
    {
      name: "Nokia",
      image: "/assets/clients/nokia.svg"
    },
    {
      name: "Verizon",
      image: "/assets/clients/verizon.svg"
    },
    {
      name: "Vimeo",
      image: "/assets/clients/vimeo.svg"
    },
    {
      name: "Volkswagen",
      image: "/assets/clients/volkswagen.svg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div x-data="{}" x-init="$nextTick(() => { let ul = $refs.logos; ul.insertAdjacentHTML('afterend', ul.outerHTML); ul.nextSibling.setAttribute('aria-hidden', 'true'); })" class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            ${clients.map((client) => renderTemplate`<li>
                        <img${addAttribute(client.image, "src")}${addAttribute(client.name, "alt")}>
                    </li>`)}
        </ul>                
    </div>
</section>`;
}, "/Users/185553/Desktop/DE-v02/src/components/home/Clients.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Matterport India 3D Scanning, 360\xB0 Virtual Tours, Google Street View, 3D/360\xB0 Real Estate VR Tours & VR Walkthrough, Google, SEO, SMM, Affiliate Marketing.", "title": "DE \xB7 Matterport 3D Scanning, Virtual Tour in Bangalore, Hyderabad, Mumbai, India" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "Clients", $$Clients, {})}
  ${renderComponent($$result2, "Services", $$Services, {})}
  ${renderComponent($$result2, "Stats", $$Stats, {})}
  ${renderComponent($$result2, "Expertise", $$Expertise, {})}
  ${renderComponent($$result2, "About", $$About, {})}
  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}
  ${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "/Users/185553/Desktop/DE-v02/src/pages/index.astro", void 0);

const $$file = "/Users/185553/Desktop/DE-v02/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Services as $, index as i };
