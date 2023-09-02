---
title: Deno npm compatibility is not perfect yet.
published_at: 2023-09-02T14:39:17.000Z
snippet: I can't run @clack/prompts on Deno
---

```csharp
ryota.murakami@MacBook-Pro ~/l/blog (main)> deno task gen
Warning Currently only basic package.json `scripts` are supported. Programs like `rimraf` or `cross-env` will not work correctly. This will be fixed in an upcoming release.
Task gen deno run -A scripts/gen.ts
┌  generate post markdown templete
error: Uncaught Error: Not implemented: net.Socket.prototype.constructor with fd option
   at notImplemented .notImplemented (ext:deno_node/_utils.ts:9:9 undefined)
   at new Socket .new Socket (node:net:455:7 undefined)
   at new WriteStream .new WriteStream (node:tty:18:8 undefined)
   at oD.prompt (file:///Users/ryota.murakami/laststance/blog/node_modules/.deno/@clack+prompts@0.7.0/node_modules/@clack/core/dist/index.mjs:9:693 undefined)
   at te .te (file:///Users/ryota.murakami/laststance/blog/node_modules/.deno/@clack+prompts@0.7.0/node_modules/@clack/prompts/dist/index.mjs:9:7 undefined)
    at file:///Users/ryota.murakami/laststance/blog/scripts/gen.ts:5:21
ryota.murakami@MacBook-Pro ~/l/blog (main) [1]> deno task gen
Task gen deno run -A scripts/gen.ts
┌  generate post markdown templete.
error: Uncaught Error: Not implemented: net.Socket.prototype.constructor with fd option
   at notImplemented .notImplemented (ext:deno_node/_utils.ts:9:9 undefined)
   at new Socket .new Socket (node:net:455:7 undefined)
   at new WriteStream .new WriteStream (node:tty:18:8 undefined)
   at G.prompt (https://esm.sh/v131/@clack/core@0.3.3/denonext/core.mjs:11:687 undefined)
   at ne .ne (https://esm.sh/v131/@clack/prompts@0.7.0/denonext/prompts.mjs:11:7 undefined)
    at file:///Users/ryota.murakami/laststance/blog/scripts/gen.ts:5:21
```

[![](https://img.shields.io/badge/Formatted%20by-https%3A%2F%2Fst.elmah.io-%230da58e)](https://st.elmah.io)
