# eslint-config

⚙️ Shared ESLint config

[tsconfig](https://github.com/danielwerg/tsconfig)
• [Prettier Config](https://github.com/danielwerg/prettier-config)

## 💾 Install

```sh
yarn add -D @danielwerg/eslint-config
```

javascript:

```sh
yarn add -D eslint prettier eslint-plugin-import
```

typescript:

```sh
yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-plugin-import
```

### VSCode Prettier ESLint extension

[GitHub](https://github.com/idahogurl/vs-code-prettier-eslint)
• [Marketplace](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
• [VSCode](vscode:extension/rvest.vs-code-prettier-eslint)
• [VSCodium](vscodium:extension/rvest.vs-code-prettier-eslint)

## 👀 Usage

`.eslintrc.js`

```js
/** @type {import('eslint').Linter.Config} */
module.exports = defineConfig({ extends: ['./typescript'], root: true });
```

### With VSCode Prettier ESLint extension

[idahogurl/vs-code-prettier-eslint#160](https://github.com/idahogurl/vs-code-prettier-eslint/issues/160)

`.eslintrc.js`

```diff
+ parserOptions: { tsconfigRootDir: __dirname },
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env.

`.eslintrc.js`

```diff
+ process.env['ESLINT_TSCONFIG'] = 'tsconfig.json';
```
