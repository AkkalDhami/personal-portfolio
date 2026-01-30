import path from "path";

const buildEslintCommand = filenames =>
  `eslint --fix ${filenames
    .map(f => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "*.mdx": "prettier --write"
};

export default lintStagedConfig;
