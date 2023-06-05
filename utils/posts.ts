import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/posix.ts";

const DIRECTORY = "./posts";

type RemoveUnderscoreFirstLetter<S extends string> = S extends
  `${infer FirstLetter}${infer U}`
  ? `${FirstLetter extends "_" ? U : `${FirstLetter}${U}`}`
  : S;

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${RemoveUnderscoreFirstLetter<
    Lowercase<T>
  >}${CamelToSnakeCase<U>}`
  : S;

type KeysToSnakeCase<T extends object> = {
  [K in keyof T as CamelToSnakeCase<K & string>]: T[K];
};

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
}

// Get posts.
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

// Get post.
export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract<
    { body: string } & Partial<KeysToSnakeCase<Post>>
  >(text);
  return {
    slug,
    title: attrs.title!,
    publishedAt: new Date(attrs.published_at!),
    content: body,
    snippet: attrs.snippet!,
  };
}
