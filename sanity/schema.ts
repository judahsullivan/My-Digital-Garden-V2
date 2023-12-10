import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import tags from "./schemas/tags";
import project from "./schemas/project";
import projectCategory from "./schemas/projectCategory";
import projectTags from "./schemas/projectTags";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    tags,
    author,
    category,
    blockContent,
    project,
    projectCategory,
    projectTags,
  ],
};
