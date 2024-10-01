'use client'

import { useState } from 'react'
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Music, Search, Mic2, BookOpen, Users, Calendar, Star, Award, User } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {Music} from "lucide-react"
// import { toast } from "@/components/ui/use-toast"
import { toast, ToastContainer } from 'react-toastify'


export function AppComponent() {
  const [currentPage, setCurrentPage] = useState('home')

  // 成功時のトースト表示
  const showSuccessToast = (message: string) => {
    toast.success(message)
  }

  // エラー時のトースト表示
  const showErrorToast = (message: string) => {
    toast.error(message)
  }

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
        return <SignUpPage showSuccessToast={showSuccessToast} showErrorToast={showErrorToast} setCurrentPage={setCurrentPage} />
      case 'login':
        return <LoginPage showSuccessToast={showSuccessToast} showErrorToast={showErrorToast} setCurrentPage={setCurrentPage} />
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
      {/* フッターの内容は省略 */}
    </footer>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

function HomePage() {
  // ホームページの内容は省略
  return <div>Home Page Content</div>
}

function CoursesPage() {
  // コースページの内容は省略
  return <div>Courses Page Content</div>
}

function InstructorsPage() {
  // 講師ページの内容は省略
  return <div>Instructors Page Content</div>
}

function BlogPage() {
  // ブログページの内容は省略
  return <div>Blog Page Content</div>
}

function SignUpPage({ showSuccessToast, showErrorToast, setCurrentPage }: {
  showSuccessToast: (message: string) => void;
  showErrorToast: (message: string) => void;
  setCurrentPage: (page: string) => void;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch('https://api.example.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        showSuccessToast("アカウント作成に成功しました！")
        setCurrentPage('home')
      } else {
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      showErrorToast(error instanceof Error ? error.message : "アカウント作成に失敗しました。")
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
      </Card>
    </div>
  )
}

function LoginPage({ showSuccessToast, showErrorToast, setCurrentPage }: {
  showSuccessToast: (message: string) => void;
  showErrorToast: (message: string) => void;
  setCurrentPage: (page: string) => void;
}) {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        showSuccessToast("ログイン成功")
        setCurrentPage('home')
      } else {
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error) {
      showErrorToast(error instanceof Error ? error.message : "ログインに失敗しました。")
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
            アカウントをお持ちでないですか？{' '}
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
  // 講師詳細ページの内容は省略
  return <div>Instructor Detail Page Content</div>
}
