import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function InstructorsPage() {
  const instructors = [
    { name: '山田太郎', specialty: 'ギター', bio: '20年以上のギター演奏経験を持つプロミュージシャン' },
    { name: '佐藤花子', specialty: 'ボーカル', bio: '数々の賞を受賞した実力派シンガー' },
    { name: '鈴木一郎', specialty: 'ピアノ', bio: 'クラシックからジャズまで幅広いジャンルをカバー' },
    { name: '高橋美咲', specialty: 'ドラム', bio: '有名バンドのツアードラマーとして活躍' },
    { name: '田中誠', specialty: '作曲', bio: 'テレビCMや映画音楽の作曲を手がける' },
    { name: '伊藤裕子', specialty: 'DJ', bio: '国内外の大型フェスで活躍するトップDJ' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <Music className="h-6 w-6 text-primary" />
          <Link href="/" className="text-2xl font-bold text-primary">Soundry</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/courses" className="text-muted-foreground hover:text-primary">コース</Link>
          <Link href="/instructors" className="text-primary font-semibold">講師</Link>
          <Link href="/blog" className="text-muted-foreground hover:text-primary">ブログ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild><Link href="/login">ログイン</Link></Button>
          <Button asChild><Link href="/signup">無料で始める</Link></Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">講師紹介</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                  <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-primary">{instructor.name}</CardTitle>
                <CardDescription>{instructor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{instructor.bio}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href={`/instructors/${instructor.name.toLowerCase().replace(' ', '-')}`}>プロフィール詳細</Link>
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
