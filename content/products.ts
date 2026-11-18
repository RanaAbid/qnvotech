/**
 * QNVO product catalog for the public website.
 * Feature lists are taken from the My POS application modules — not invented claims.
 * Prices, customer counts and uptime guarantees are omitted until verified for publication.
 */

export type ProductCapability = {
  title: string;
  body: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  /** Live product URL (external). */
  appUrl: string;
  heroImage: string;
  heroAlt: string;
  gallery: { base: string; alt: string }[];
  whoFor: string;
  notClaimed: string;
  capabilities: ProductCapability[];
  modules: string[];
  faqs: ProductFaq[];
};

export const products: Product[] = [
  {
    slug: "my-pos",
    name: "QNVO My POS",
    shortName: "My POS",
    tagline: "Point of sale, inventory and sales operations in one product.",
    description:
      "QNVO My POS is QNVO Technologies’ point-of-sale product for retail and warehouse-style operations. It covers the POS screen, catalogue, purchases, sales, returns, customers, suppliers, warehouses and operational reports. Access is role-based. Fees, hosting and rollout details belong in a written agreement — not on this page.",
    seoTitle: "QNVO My POS | Point of Sale Product | QNVO Technologies",
    seoDescription:
      "QNVO My POS is a point-of-sale product from QNVO Technologies for sales, inventory, purchases, customers, warehouses and reports. Open the live app at my-pos.qnvotech.com. No invented prices or client counts on this page.",
    appUrl: "https://my-pos.qnvotech.com/",
    heroImage: "/images/product-my-pos-counter",
    heroAlt: "Retail counter with a touchscreen POS terminal ready for checkout",
    gallery: [
      {
        base: "/images/product-my-pos-counter",
        alt: "Checkout counter with POS screen, scanner and payment terminal",
      },
      {
        base: "/images/product-my-pos-inventory",
        alt: "Warehouse aisle with stock checked on a tablet",
      },
      {
        base: "/images/product-my-pos-reports",
        alt: "Desk monitors showing sales and stock report dashboards",
      },
    ],
    whoFor:
      "Retail and operations teams that need a POS screen, product catalogue, purchase and sale flows, customer and supplier records, warehouse stock views and reports — with users and permissions they can control.",
    notClaimed:
      "This page does not publish prices, license tiers, customer counts, uptime SLAs, payment-processor partnerships or named retail client logos. Those belong in a verified agreement or later publication.",
    capabilities: [
      {
        title: "POS checkout screen",
        body: "A dedicated POS screen for counter sales, with catalogue access and sale completion for staff who have the POS permission.",
      },
      {
        title: "Catalogue and stock",
        body: "Products, categories, variations, units, brands and stock adjustments so the shelf count and the system stay aligned.",
      },
      {
        title: "Purchases and sales",
        body: "Purchase and sale records, purchase returns and sale returns, plus quotations that can convert into a sale when you choose.",
      },
      {
        title: "People and places",
        body: "Customers, suppliers, warehouses and user accounts with role-based permissions for the modules you assign.",
      },
      {
        title: "Reports",
        body: "Operational reports for sales, purchases, stock, warehouses, top-selling products, product quantity, suppliers and profit-loss views available in the product.",
      },
      {
        title: "Settings and receipts",
        body: "Company settings, document prefixes, mail settings, receipt settings and barcode printing for labelled stock.",
      },
    ],
    modules: [
      "Dashboard",
      "POS screen",
      "Products and categories",
      "Variations and units",
      "Brands and currencies",
      "Warehouses",
      "Stock adjustments",
      "Purchases and purchase returns",
      "Sales and sale returns",
      "Quotations",
      "Customers and suppliers",
      "Expenses",
      "Users and roles",
      "Sales, stock and warehouse reports",
      "Top-selling and product-quantity reports",
      "Supplier and profit-loss reports",
      "Barcode printing",
      "Receipt and mail settings",
    ],
    faqs: [
      {
        question: "Where do I open My POS?",
        answer:
          "The live product is at https://my-pos.qnvotech.com/. Sign-in uses the credentials issued for your organisation. This marketing page cannot create accounts.",
      },
      {
        question: "What does My POS include?",
        answer:
          "The product includes a POS screen, product catalogue tools, purchases and sales (with returns), quotations, customers, suppliers, warehouses, expenses, user permissions and operational reports. Exact module access depends on the roles configured for each user.",
      },
      {
        question: "Does this page publish prices?",
        answer:
          "No. Pricing, hosting and rollout terms are not listed here. Email info@qnvotech.com or use the contact form to discuss a written scope.",
      },
      {
        question: "Is My POS a custom project or a product?",
        answer:
          "My POS is a QNVO Technologies product. Custom configuration, data migration and training can be discussed as related services when they are written into an agreement.",
      },
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function productsInOrder(): Product[] {
  return [...products];
}
