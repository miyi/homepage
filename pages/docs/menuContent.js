export const loadMenuContent = () => ({
  baselink: "/docs",
  groups: [
    {
      label: "getting started",
      unclickable: true,
      sublink: "start",
      css: ["filter: brightness(110%)", "background-color:"],
      children: [{ label: "install", sublink: "/install" }],
    },
    {
      label: "core features",
      sublink: "core",
      children: [
        { label: "scopes", sublink: "/scopes" },
        { label: "directives", sublink: "/directives" },
        { label: "modules", sublink: "/modules" },
        { label: "routing", sublink: "/routing" },
      ],
    },
    {
      label: "lifecycle directives",
      sublink: "lifecycle",
      children: [
        { label: "+loading", sublink: "/loading" },
        { label: "+loaded", sublink: "/loaded" },
        { label: "+unloading", sublink: "/unloading" },
        { label: "+unloaded", sublink: "/unloaded" },
      ],
    },
    {
      label: "control directives",
      sublink: "control",
      children: [
        { label: "$checked", sublink: "/checked" },
        { label: "$each", sublink: "/each" },
        { label: "$focus", sublink: "/focus" },
        { label: "$html", sublink: "/html" },
      ],
    },
  ],
});
