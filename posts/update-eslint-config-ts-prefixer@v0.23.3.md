---
title: Update eslint-config-ts-prefixer@v0.23.3
published_at: 2023-08-17T09:16:37Z
snippet: Further update async/await/Promise rules
---

I've published [eslint-config-ts-prefixer@v0.23.3](https://github.com/laststance/eslint-config-ts-prefixer).

eslint-config-ts-prefixer is ESLint rule set that integrated prettier as one of ESLint rule and specialized fixable rule set.
And

- 📦 Zero extend for [**explicit**](https://github.com/laststance/eslint-config-ts-prefixer/blob/main/index.js) rules.
- 💅 [Prettier](https://prettier.io/) integration, specialized fixable `import` rules.
- ✅ Meamingful rules code behavior.

I added these new rules this update.\
One of my favorite rule is `@typescript-eslint/promise-function-async`.\
This is available `--fix` so auto adding `async` keyword property position.

### 1. [@typescript-eslint/no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md)

This rule enforces that constructors within classes are marked with the `new` keyword.

```javacript
// Bad
interface Foo {
  new (): Foo;
}

// Good
class Foo {
  constructor() {}
}
```

### 2. [@typescript-eslint/no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md)

This rule avoids using promises in places not designed to handle them.

```javacript
// Bad
addEventListener('click', async () => {
  await doSomethingAsync();
});

// Good
addEventListener('click', () => {
  doSomethingAsync();
});
```

### 3. [@typescript-eslint/promise-function-async](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md)

This rule requires any function or method that returns a Promise to be marked async.

```javacript
// Bad
function foo(): Promise<void> {
  return Promise.resolve();
}

// Good
async function foo(): Promise<void> {
  return;
}
```

### 4. [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)

This rule disallows `await` inside of loops.

```javascript
// Bad
for (let i = 0; i < 10; i++) {
  await asyncFunction()
}

// Good
const promises = []
for (let i = 0; i < 10; i++) {
  promises.push(asyncFunction())
}
await Promise.all(promises)
```

### 5. [no-return-await](https://eslint.org/docs/rules/no-return-await)

This rule disallows unnecessary `return await`.

```javascript
// Bad
async function foo() {
  return await bar()
}

// Good
async function foo() {
  return bar()
}
```

### 6. [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)

This rule requires using Error objects as Promise rejection reasons.

```javascript
// Bad
Promise.reject('something went wrong')

// Good
Promise.reject(new Error('something went wrong'))
```

### 7. [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)

This rule disallows assignments that can lead to race conditions due to usage of `await` or `yield`.

```javascript
// Bad
async function foo() {
  c = a + b
  await somethingAsync()
  c = c + 1 // This might be an outdated value of c
}

// Good
async function foo() {
  const temp = a + b
  await somethingAsync()
  c = temp + 1
}
```

Thnak you for all yours.\
Really wellcome ESLint & TS setting improvement feedback!
