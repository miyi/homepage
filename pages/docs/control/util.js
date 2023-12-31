export const composeHeadings = (directive, control_data) => {
  const headings = [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "rules" },
    { level: 2, hash: "examples", label: "examples" },
  ];
  headings.push({ level: 1, hash: "unique", label: "Unique decorators" });
  control_data[directive].decorators.forEach((decorator) => {
    headings.push({ level: 2, hash: decorator, label: "#" + decorator });
  });
  headings.push({ level: 1, hash: "common", label: "Common decorators" });
  control_data.common.forEach((decorator) => {
    headings.push({ level: 2, hash: decorator, label: "#" + decorator });
  });

  return headings;
};

export const composeRulesTable = (rows) => ({
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: rows,
});
