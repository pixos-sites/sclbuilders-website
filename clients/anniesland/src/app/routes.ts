import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { GalleryPage } from "./components/GalleryPage";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "gallery", Component: GalleryPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
