import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, Music } from "lucide-react"

const blogPosts = [
  {
    title: "音楽理論の基礎：初心者のためのガイド",
    slug: "music-theory-basics",
    excerpt: "音楽理論は難しそうに見えますが、基本を理解すれば誰でも習得できます。このガイドでは、音階、和音、リズムの基礎を解説します。",
    author: "山田太郎",
    date: "2024-03-15",
  },
  {
    title: "練習の効果を最大化する5つの方法",
    slug: "maximize-practice-effectiveness",
    excerpt: "効果的な練習は上達の鍵です。この記事では、集中力を高め、効率的に技術を向上させるための5つの実践的なテクニックを紹介します。",
    author: "佐藤花子",
    date: "2024-03-10",
  },
  {
    title: "デジタル時代の音楽制作：初心者向けDAWガイド",
    slug: "beginner-daw-guide",
    excerpt: "デジタル・オーディオ・ワークステーション（DAW）は現代の音楽制作に欠かせません。人気のDAWソフトウェアとその基本的な使い方を解説します。",
    author: "鈴木一郎",
    date: "2024-03-05",
  },
  {
    title: "ライブパフォーマンスを成功させるためのヒント",
    slug: "successful-live-performance-tips",
    excerpt: "初めてのライブは緊張するものです。この記事では、準備から本番まで、成功するライブパフォーマンスのためのアドバイスをお届けします。",
    author: "高橋美咲",
    date: "2024-02-28",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <Music className="h-6 w-6 text-primary" />
          <Link href="/" className="text-2xl font-bold text-primary">Soundry</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/courses" className="text-muted-foreground hover:text-primary">コース</Link>
          <Link href="/instructors" className="text-muted-foreground hover:text-primary">講師</Link>
          <Link href="/blog" className="text-primary font-semibold">ブログ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild><Link href="/login">ログイン</Link></Button>
          <Button asChild><Link href="/signup">無料で始める</Link></Button>
        </div>
      </header>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Soundryブログ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-primary">{post.title}</CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
                <Calendar className="h-4 w-4 ml-2" />
                <span>{post.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/blog/${post.slug}`}>
                  続きを読む
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div></div>
  )
}
