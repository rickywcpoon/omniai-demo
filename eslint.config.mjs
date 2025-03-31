import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: [
      "src/app/about/page.tsx",
      "src/app/case-studies/economic-stability/page.tsx",
      "src/app/case-studies/social-harmony/page.tsx",
      "src/app/compliance-guide/page.tsx",
      "src/app/mandate-7/page.tsx",
      "src/app/privacy-policy/page.tsx",
      "src/app/terms-of-service/page.tsx",
    ],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
