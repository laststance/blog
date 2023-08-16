/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from '$fresh/server.ts'
import typography from '@twind/typography'
import manifest from './fresh.gen.ts'
import twindConfig from './twind.config.ts'

import twindPlugin from '$fresh/plugins/twind.ts'
const myTwindConfig = {
  plugins: {
    ...typography(),
  },
}

await start(manifest, {
  plugins: [twindPlugin({ ...myTwindConfig, ...twindConfig })],
})
