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
import { Icons } from "@/components/ui/icons"
import { Slider } from "@/components/ui/slider"

export default function CreateCoursePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">新規コース作成</CardTitle>
            <CardDescription>
              以下の情報を入力して、新しいコースを作成してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">コースタイトル</Label>
                  <Input id="title" placeholder="例：ギター入門：基礎から始めよう" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">コース説明</Label>
                  <Textarea id="description" placeholder="コースの概要を記入してください" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">カテゴリー</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリーを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guitar">ギター</SelectItem>
                      <SelectItem value="piano">ピアノ</SelectItem>
                      <SelectItem value="vocals">ボーカル</SelectItem>
                      <SelectItem value="theory">音楽理論</SelectItem>
                      <SelectItem value="production">音楽制作</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="level">難易度</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="難易度を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">初級</SelectItem>
                      <SelectItem value="intermediate">中級</SelectItem>
                      <SelectItem value="advanced">上級</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">価格（円）</Label>
                  <Input id="price" type="number" placeholder="例：5000" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="thumbnail">サムネイル画像</Label>
                  <Input id="thumbnail" type="file" accept="image/*" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priceRange">価格範囲</Label>
                  <Slider
                    min={0}
                    max={20000}
                    step={1000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                </div>
              </div>
              <Button className="w-full mt-6" type="submit" disabled={isLoading}>
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                コースを作成
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-muted-foreground">
              コースの作成には審査が必要です。内容を確認の上、承認いたします。
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
