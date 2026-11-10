export const caseStudy = {
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "summary", title: "Summary", type: "text" },
    { name: "clientPermission", title: "Client permission recorded", type: "boolean" },
  ],
};
