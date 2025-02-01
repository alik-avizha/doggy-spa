import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
      "next/core-web-vitals",
      "next/typescript",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "plugin:promise/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended" // Добавляем Prettier
  ),
  {
    rules: {
      // Примеры кастомных правил
      "react/react-in-jsx-scope": "off", // Отключаем, так как Next.js автоматически добавляет React
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "promise/prefer-await-to-then": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "prettier/prettier": "error", // Включаем Prettier как правило ESLint
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
      "import/resolver": {
        typescript: {}, // Используем TypeScript для разрешения путей импортов
      },
    },
  },
];

export default eslintConfig;