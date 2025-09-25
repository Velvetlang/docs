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
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Configuration optimisée pour auto-fix
      "react/no-unescaped-entities": "off", // Désactivé car pas auto-fixable
      "@typescript-eslint/no-unused-vars": "warn", // Auto-fixable partiellement
      "no-unused-vars": "off", // Désactivé en faveur de TypeScript
      "prefer-const": "error", // Auto-fixable
      "no-var": "error", // Auto-fixable
      "object-shorthand": "error", // Auto-fixable
      "prefer-template": "error", // Auto-fixable
      "prefer-arrow-callback": "error", // Auto-fixable
      "arrow-spacing": "error", // Auto-fixable
      "comma-dangle": ["error", "always-multiline"], // Auto-fixable
      "semi": ["error", "always"], // Auto-fixable
      "no-trailing-spaces": "error", // Auto-fixable
      "eol-last": "error", // Auto-fixable
    },
  },
];

export default eslintConfig;
