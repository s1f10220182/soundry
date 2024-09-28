'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Search, Mic2, BookOpen, Users, Calendar, Star, Award, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"

export function AppComponent() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'courses':
        return <CoursesPage />
      case 'instructors':
        return <InstructorsPage />
      case 'blog':
        return <BlogPage />
      case 'signup':
        return <SignUpPage />
      case 'login':
        return <LoginPage />
      case 'instructor-detail':
        return <InstructorDetailPage />
      default:
        return <HomePage />
    }
  }

  const Header = () => (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
      <div className="flex items-center space-x-4">
        <Music className="h-6 w-6 text-primary" />
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-primary">Soundry</button>
      </div>
      <nav className="hidden md:flex space-x-4">
        <button onClick={() => setCurrentPage('courses')} className="text-muted-foreground hover:text-primary">コース</button>
        <button onClick={() => setCurrentPage('instructors')} className="text-muted-foreground hover:text-primary">講師</button>
        <button onClick={() => setCurrentPage('blog')} className="text-muted-foreground hover:text-primary">ブログ</button>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={() => setCurrentPage('login')}>ログイン</Button>
        <Button onClick={() => setCurrentPage('signup')}>無料で始める</Button>
      </div>
    </header>
  )

  const Footer = () => (
    <footer className="bg-background border-t py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-semibold mb-4 text-primary">Soundryについて</h5>
          <ul className="space-y-2">
            <li><button className="text-muted-foreground hover:text-primary">会社概要</button></li>
            <li><button className="text-muted-foreground hover:text-primary">講師になる</button></li>
            <li><button className="text-muted-foreground hover:text-primary">採用情報</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-primary">サポート</h5>
          <ul className="space-y-2">
            <li><button className="text-muted-foreground hover:text-primary">ヘルプセンター</button></li>
            <li><button className="text-muted-foreground hover:text-primary">利用規約</button></li>
            <li><button className="text-muted-foreground hover:text-primary">プライバシーポリシー</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-primary">コミュニティ</h5>
          <ul className="space-y-2">
            <li><button onClick={() => setCurrentPage('blog')} className="text-muted-foreground hover:text-primary">ブログ</button></li>
            <li><button className="text-muted-foreground hover:text-primary">フォーラム</button></li>
            <li><button className="text-muted-foreground hover:text-primary">イベント</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4 text-primary">ソーシャルメディア</h5>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-muted-foreground">
        <p>&copy; 2024 Soundry. All rights reserved.</p>
      </div>
    </footer>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">音楽の世界へようこそ</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">プロの講師陣による高品質なオンライン音楽レッスンで、あなたの音楽スキルを磨きましょう。</p>
          <div className="flex justify-center">
            <Input className="w-64 mr-2" placeholder="学びたい楽器や技術は？" />
            <Button>
              <Search className="mr-2 h-4 w-4" /> 検索
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-center text-primary">人気のコース</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['ギター入門', 'ボーカルテクニック', 'ピアノマスター'].map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-primary">{course}</CardTitle>
                <CardDescription>初心者から上級者まで</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={`/placeholder.svg?height=200&width=400`} alt={course} className="rounded-md mb-4" />
                <p className="text-sm text-muted-foreground">20レッスン・10時間の動画</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">コースの詳細</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-primary/5">
        <h3 className="text-2xl font-bold mb-8 text-center text-primary">Soundryの特徴</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Mic2 className="h-10 w-10 text-primary" />, title: 'プロの講師陣', description: '業界で活躍する一流ミュージシャンから学べます' },
            { icon: <BookOpen className="h-10 w-10 text-primary" />, title: '豊富なコンテンツ', description: '初心者から上級者まで、幅広いレベルに対応' },
            { icon: <Users className="h-10 w-10 text-primary" />, title: 'コミュニティ', description: '同じ目標を持つ仲間と交流し、モチベーションを高めよう' },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h4 className="text-xl font-semibold mt-4 mb-2 text-primary">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function CoursesPage() {
  const courses = [
    { title: 'ギター入門', slug: 'beginner-guitar', description: '初心者向けギターレッスン' },
    { title: 'ボーカルテクニック', slug: 'vocal-techniques', description: 'プロの歌手から学ぶボーカルスキル' },
    { title: 'ピアノマスター', slug: 'piano-master', description: 'ピアノの基礎から応用まで' },
    { title: 'ドラム基礎', slug: 'drum-basics', description: 'リズムの基本を学ぶ' },
    { title: '作曲入門', slug: 'composition-101', description: '音楽理論と作曲の基礎' },
    { title: 'DJ技術', slug: 'dj-skills', description: 'ミキシングとビートマッチングの技術' },
  ]

  return (
    <div className="container mx-auto py-8">
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
              <Button className="w-full">
                コースの詳細
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function InstructorsPage() {
  const instructors = [
    { name: '山田太郎', specialty: 'ギター', bio: '20年以上のギター演奏経験を持つプロミュージシャン' },
    { name: '佐藤花子', specialty: 'ボーカル', bio: '数々の賞を受賞した実力派シンガー' },
    { name: '鈴木一郎', specialty: 'ピアノ', bio: 'クラシックからジャズまで幅広いジャンルをカバー' },
    { name: '高橋美咲', specialty: 'ドラム', bio: '有名バンドのツアードラマーとして活躍' },
    { name: '田中誠', specialty: '作曲', bio: 'テレビCMや映画音楽の作曲を手がける' },
    { name: '伊藤裕子', specialty: 'DJ', bio: '国内外の大型フェスで活躍するトップDJ' },
  ]

  return (
    <div className="container mx-auto py-8">
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
              <Button className="w-full">
                プロフィール詳細
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function BlogPage() {
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

  return (
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
              <Button className="w-full">
                続きを読む
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      // 外部APIを使用してサインアップ（実際のAPIエンドポイントに置き換えてください）
      const response = await fetch('https://api.example.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        toast({
          title: "アカウント作成成功",
          description: "Soundryへようこそ！",
        })
        // ここでダッシュボードページに遷移する代わりに、ホームページに戻します
        setCurrentPage('home')
      } else {
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "アカウント作成に失敗しました。",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary/10 to-primary/20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">アカウント作成</CardTitle>
          <CardDescription>Soundryで音楽の旅を始めましょう</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
            <Button className="w-full mt-6" type="submit" disabled={isLoading}>
              {isLoading ? "処理中..." : "アカウント作成"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            すでにアカウントをお持ちですか？ {' '}
            <button onClick={() => setCurrentPage('login')} className="text-primary hover:underline">
              ログイン
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      // 外部APIを使用してログイン（実際のAPIエンドポイントに置き換えてください）
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        // トークンをローカルストレージに保存するなどの処理を行う
        localStorage.setItem('token', data.token)
        toast({
          title: "ログイン成功",
          description: "Soundryへようこそ！",
        })
        // ここでダッシュボードページに遷移する代わりに、ホームページに戻します
        setCurrentPage('home')
      } else {
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "ログインに失敗しました。",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-primary/10 to-primary/20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">ログイン</CardTitle>
          <CardDescription>アカウントにログインしてください</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">パスワード</Label>
                <Input id="password" name="password" type="password" required />
              </div>
            </div>
            <Button className="w-full mt-6" type="submit" disabled={isLoading}>
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <button className="text-sm text-primary hover:underline">
            パスワードをお忘れですか？
          </button>
          <p className="text-sm text-muted-foreground">
            アカウントをお持ちでないですか？ {' '}
            <button onClick={() => setCurrentPage('signup')} className="text-primary hover:underline">
              アカウント作成
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

function InstructorDetailPage() {
  const instructor = {
    name: "山田太郎",
    specialty: "ギター",
    bio: "20年以上のギター演奏経験を持つプロミュージシャン。数々の有名アーティストとの共演やレコーディングに参加。ロック、ブルース、ジャズなど幅広いジャンルに精通。",
    rating: 4.9,
    students: 1500,
    courses: [
      { title: "ギター入門：基礎から始めよう", slug: "beginner-guitar" },
      { title: "ブルースギター・マスタークラス", slug: "blues-guitar-masterclass" },
      { title: "ジャズギター即興演奏テクニック", slug: "jazz-guitar-improvisation" },
    ],
    upcomingLessons: [
      { title: "ロックギター・ワークショップ", date: "2024-04-15" },
      { title: "アコースティックギター・セミナー", date: "2024-04-22" },
    ]
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                  <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl text-primary">{instructor.name}</CardTitle>
                  <CardDescription className="text-xl">{instructor.specialty}講師</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{instructor.bio}</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{instructor.rating}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-1" />
                  <span>{instructor.students}人の生徒</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">担当コース</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instructor.courses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">
                    コースの詳細
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">今後のレッスン</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {instructor.upcomingLessons.map((lesson, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{lesson.title}</p>
                      <p className="text-sm text-muted-foreground">{lesson.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">レッスンに申し込む</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}