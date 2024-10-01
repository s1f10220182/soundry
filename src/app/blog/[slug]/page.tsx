// app/blog/[slug]/page.tsx
export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is the detail page for blog post {params.slug}.</p>
    </div>
  )
}
