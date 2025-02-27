export default {
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
      {
        name: "heroTitle",
        title: "Hero Title",
        type: "string",
      },
      {
        name: "heroImage",
        title: "Hero Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "introText",
        title: "Intro Text",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "galleryImages",
        title: "Gallery Images",
        type: "array",
        of: [{ type: "image", options: { hotspot: true } }],
      },
    ],
  };
  