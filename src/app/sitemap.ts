import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { temas } from "@/lib/temario";
import { getSimulacros } from "@/lib/simulacros";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/precios",
    "/temario",
    "/simulacros",
    "/contacto",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
    "/condiciones",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const temaRoutes = temas.map((tema) => ({
    url: `${siteConfig.url}/temario/${tema.slug}`,
    lastModified: new Date(),
  }));

  const simulacroRoutes = getSimulacros().map((simulacro) => ({
    url: `${siteConfig.url}/simulacros/${simulacro.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...temaRoutes, ...simulacroRoutes];
}
