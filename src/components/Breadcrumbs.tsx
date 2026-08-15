import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Migas de pan" className="text-xs text-brand-200/90">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-white">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={jsonLd} />
    </nav>
  );
}
