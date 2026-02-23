const curatedImagesBySig: Record<number, string> = {
  // HomePage
  101: "/images/hero.png",           // hero section
  102: "/images/why-polbuilt.png",   // why polbuilt section
  103: "/images/team.png",           // team / about section

  // ServicesPage
  201: "/images/services-hero.jpg",  // services page hero
  202: "/images/builder.png",        // builders service
  203: "/images/painter.png",        // painters & decorators
  204: "/images/bathroom.jpg",       // bathroom fitters
  205: "/images/tiler.jpg",          // tilers
  206: "/images/joiner.png",         // joiners
  207: "/images/extension.png",      // house extensions

  // GalleryPage
  301: "/images/gallery-kitchen.jpg",
  302: "/images/gallery-bathroom.jpg",
  303: "/images/gallery-extension.jpg",
  304: "/images/gallery-painting.jpg",
  305: "/images/gallery-joinery.jpg",
  306: "/images/gallery-tiling.jpg",
  307: "/images/gallery-plastering.jpg",
  308: "/images/gallery-building.jpg",
  309: "/images/gallery-newbuild.jpg",

  // BlogPage
  401: "/images/gallery-kitchen.jpg",    // Kitchen Renovation Trends
  402: "/images/builder.png",            // How to Choose the Right Builder
  403: "/images/gallery-bathroom.jpg",   // Bathroom Renovation Guide
  404: "/images/gallery-extension.jpg",  // House Extensions Planning Permission
  405: "/images/team.png",              // Benefits of Hiring a Local Builder
  406: "/images/gallery-plastering.jpg", // Plastering vs Dry Lining

  // CommercialPage hero
  501: "/images/services-hero.jpg",
};

const fallbackPool = [
  "/images/hero.png",
  "/images/builder.png",
  "/images/team.png",
];

export function stockImage(query: string, sig: number, width = 1600, height = 900) {
  return (
    curatedImagesBySig[sig] ??
    fallbackPool[Math.abs(sig) % fallbackPool.length] ??
    "/images/hero.png"
  );
}
