import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import { getPost, Post } from '../utils/posts.ts'
import { CSS, render } from '$gfm'
import { Footer } from '../components/Footer.tsx'

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug)
      return ctx.render(post as Post)
    } catch {
      return ctx.renderNotFound()
    }
  },
}

export default function PostPage(props: PageProps<Post>) {
  const post = props.data
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class='flex-1 max-w-screen-md px-4 pt-16 mx-auto'>
        <h1 class='text-5xl font-bold'>{post.title}</h1>
        <time class='pt-2 inline-block text-gray-500'>
          {new Date(post.publishedAt).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <div
          class='mt-8 markdown-body'
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
      <Footer />
    </>
  )
}
