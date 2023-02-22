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
module.exports = {
  extends: '@danielwerg/eslint-config',
  root: true,
  parserOptions: { tsconfigRootDir: __dirname, project: './tsconfig.json' }
};
```
