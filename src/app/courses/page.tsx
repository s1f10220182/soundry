import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    { title: 'ギター入門', slug: 'beginner-guitar', description: '初心者向けギターレッスン' },
    { title: 'ボーカルテクニック', slug: 'vocal-techniques', description: 'プロの歌手から学ぶボーカルスキル' },
    { title: 'ピアノマスター', slug: 'piano-master', description: 'ピアノの基礎から応用まで' },
    { title: 'ドラム基礎', slug: 'drum-basics', description: 'リズムの基本を学ぶ' },
    { title: '作曲入門', slug: 'composition-101', description: '音楽理論と作曲の基礎' },
    { title: 'DJ技術', slug: 'dj-skills', description: 'ミキシングとビートマッチングの技術' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <Music className="h-6 w-6 text-primary" />
          <Link href="/" className="text-2xl font-bold text-primary">Soundry</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/courses" className="text-primary font-semibold">コース</Link>
          <Link href="/instructors" className="text-muted-foreground hover:text-primary">講師</Link>
          <Link href="/blog" className="text-muted-foreground hover:text-primary">ブログ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild><Link href="/login">ログイン</Link></Button>
          <Button asChild><Link href="/signup">無料で始める</Link></Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">コース一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-primary">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={`/placeholder.svg?height=200&width=400`} alt={course.title} className="rounded-md mb-4" />
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={`/courses/${course.slug}`}>コースの詳細</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-background border-t py-8 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Soundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
