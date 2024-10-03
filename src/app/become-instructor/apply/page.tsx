'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function InstructorApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    // ここで申請フォームの送信処理を実装します
    setTimeout(() => {
      setIsSubmitting(false)
      // 送信完了後の処理（例：確認ページへのリダイレクト）
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">講師になる</h1>
        <Card>
          <CardHeader>
            <CardTitle>講師申請フォーム</CardTitle>
            <CardDescription>
              以下のフォームに必要事項を記入し、講師としての申請を行ってください。
              審査には1〜2週間程度かかります。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">氏名</Label>
                <Input id="name" placeholder="山田太郎" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">メールアドレス</Label>
                <Input id="email" type="email" placeholder="yamada@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">専門分野</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="専門分野を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="guitar">ギター</SelectItem>
                    <SelectItem value="piano">ピアノ</SelectItem>
                    <SelectItem value="drums">ドラム</SelectItem>
                    <SelectItem value="vocals">ボーカル</SelectItem>
                    <SelectItem value="music-theory">音楽理論</SelectItem>
                    <SelectItem value="composition">作曲</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">音楽経験（年数）</Label>
                <Input id="experience" type="number" min="0" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teaching-experience">指導経験</Label>
                <Textarea id="teaching-experience" placeholder="これまでの指導経験について詳しく教えてください" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course-idea">コースのアイデア</Label>
                <Textarea id="course-idea" placeholder="Soundryで開講したいコースのアイデアを教えてください" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">ポートフォリオ/デモ動画URL</Label>
                <Input id="portfolio" type="url" placeholder="https://example.com/portfolio" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms">
                  <a href="/terms-of-service" className="underline">利用規約</a>と
                  <a href="/privacy-policy" className="underline">プライバシーポリシー</a>に同意します
                </Label>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "申請を送信"}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
