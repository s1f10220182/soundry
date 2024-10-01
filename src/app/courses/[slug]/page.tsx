// app/courses/[slug]/page.tsx
export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Course Detail: {params.slug}</h1>
      あーはっはっはっはっはー
      <p>This is the detail page for {params.slug}.</p>
    </div>
  )
}
