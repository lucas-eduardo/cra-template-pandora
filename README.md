# CRA Template Pandora

This is the TypeScript template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add `--template pandora` when creating a new app.

For example:

```sh
npx create-react-app my-app --template pandora

# or

yarn create react-app my-app --template pandora
```

Your project layout should look like the following

```text
my-app/
├─ .vscode/
│  ├─ react.code-snippets
│  └─ settings.json
├─ node_modules/
├─ public/
├─ src/
│  ├─ __tests__/
│     └─ ...
│  ├─ styles/
│     └─ ...
│  ├─ App.tsx
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  └─ setupTests.ts
├─ .editorconfig
├─ .env.local
├─ .eslintignore
├─ .eslintrc.json
├─ .releaserc
├─ .craco.config.js
├─ .gitignore
└─ .Makefile
└─ .paths.json
```

## Differential

- styled components
- semantic release
- eslint
- prettier
- commitizen
- husky
- custom paths

## Note
For custom paths to work, you need to extend paths.json on tsconfig.json

```
{
  "extends": "./paths.json",
  ...
}
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.