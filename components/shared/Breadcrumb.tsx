import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import SchemaOrg from "./SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.label,
    item: item.href ?? "",
  }));

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1 text-sm text-gray-500 mb-4"
      >
        {allItems.map((item, index) => (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            )}
            {index === 0 && (
              <HomeIcon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            )}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-bwp-blue transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-bwp-dark font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
