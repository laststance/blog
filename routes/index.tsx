import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";
import type { Handlers } from "$fresh/server.ts";

interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export const hander: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

async function getPost(slug: Post["slug"]): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const { attrs, body } = extract<Partial<Post>>(text);
  return {
    slug,
    title: attrs.title!,
    publishedAt: new Date(attrs.publishedAt!),
    content: body,
    snippet: attrs.snippet!,
  };
}
