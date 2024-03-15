export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.c35989ab.mjs';
import 'html-escaper';

const page = () => import('../chunks/pages/index.astro.a10289ff.mjs').then(n => n.i);

export { page };
