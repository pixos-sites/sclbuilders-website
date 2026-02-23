import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { CommercialPage } from "./components/CommercialPage";
import { GalleryPage } from "./components/GalleryPage";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { RecruitmentPage } from "./components/RecruitmentPage";
import { ContactPage } from "./components/ContactPage";
import { BlogPage } from "./components/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "commercial", Component: CommercialPage },
      { path: "gallery", Component: GalleryPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "recruitment", Component: RecruitmentPage },
      { path: "contact", Component: ContactPage },
      { path: "blog", Component: BlogPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
