import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const client = join(dist, "client");

await mkdir(client, { recursive: true });

for (const entry of await readdir(dist, { withFileTypes: true })) {
  if (entry.name === "client") continue;
  const source = join(dist, entry.name);
  const target = join(client, entry.name);
  await cp(source, target, { recursive: true });
  await rm(source, { recursive: true, force: true });
}

await mkdir(join(dist, "server"), { recursive: true });
await mkdir(join(dist, ".openai"), { recursive: true });

await writeFile(
  join(dist, "server", "index.js"),
  [
    "export default {",
    "  async fetch(request, env) {",
    "    const url = new URL(request.url);",
    "    if (url.pathname === '/') {",
    "      url.pathname = '/index.html';",
    "      request = new Request(url, request);",
    "    }",
    "    return env.ASSETS.fetch(request);",
    "  },",
    "};",
    "",
  ].join("\n"),
  "utf8",
);

await cp(
  join(root, ".openai", "hosting.json"),
  join(dist, ".openai", "hosting.json"),
);
