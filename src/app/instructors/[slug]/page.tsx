// app/instructors/[slug]/page.tsx
export default function InstructorDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Instructor: {params.slug}</h1>
      <p>This is the detail page for instructor {params.slug}.</p>
    </div>
  )
}
