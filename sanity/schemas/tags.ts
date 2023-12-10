import { defineField, defineType } from "sanity";

export default defineType({
  name: "tags",
  title: "Article Tags",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
