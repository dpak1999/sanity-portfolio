/** @format */

/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "date", type: "datetime" },
    { name: "description", type: "text" },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal" },
          { value: "client", title: "Client" },
          { value: "school", title: "School" },
        ],
      },
    },
    { name: "link", type: "url" },
    { name: "github", type: "url" },

    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};