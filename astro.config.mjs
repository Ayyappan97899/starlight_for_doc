import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Lego Blocks",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "UTILS",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "String", link: "/utils/string" },
            { label: "Array", link: "/utils/array" },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
