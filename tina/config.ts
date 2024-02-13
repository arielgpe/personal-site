import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        defaultItem: () => {
          return {
            author: 'Ariel Guzmán',
            title: 'New Post',
            slug: 'new-post',
            pubDatetime: new Date().toISOString(),
            modDatetime: new Date().toISOString()
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author'
          },
          {
            type: 'datetime',
            name: 'pubDatetime',
            label: 'Publishing Date',
          },
          {
            type: 'datetime',
            name: 'modDatetime',
            label: 'Modified Date'
          },
          {
            type: 'boolean',
            name: 'featured',
            label: "Featured"
          },
          {
            type: 'boolean',
            name: 'draft',
            label: "Draft"
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug'
          },
        ],
        indexes: [{
          name: "pub-mod-dates",
          fields: [
            { name:"modDatetime" },
            { name:"pubDatetime" }
          ]
        }]
      },
    ],
  },
});
