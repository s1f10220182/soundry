'use client'

import { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Music } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      // 外部APIを使用してサインアップ
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
        router.push('/dashboard')
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
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
        <div className="flex items-center space-x-4">
          <Music className="h-6 w-6 text-primary" />
          <Link href="/" className="text-2xl font-bold text-primary">Soundry</Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary/20">
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
              <Link href="/login" className="text-primary hover:underline">
                ログイン
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-background border-t py-4 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Soundry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
