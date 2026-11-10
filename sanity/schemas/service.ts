const text = (name: string, title: string) => ({ name, title, type: "string" });

export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    text("title", "Title"),
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "summary", title: "Summary", type: "text" },
    { name: "description", title: "Description", type: "text" },
  ],
};
