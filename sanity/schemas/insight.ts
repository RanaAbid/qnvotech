export const insight = {
  name: "insight",
  title: "Insight",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "summary", title: "Summary", type: "text" },
    { name: "body", title: "Body", type: "text" },
  ],
};
