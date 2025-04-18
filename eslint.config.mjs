import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import ts from 'typescript-eslint'
import tailwind from 'eslint-plugin-tailwindcss'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  ...ts.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
]

export default eslintConfig
