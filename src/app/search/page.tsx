'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Star, Clock, Users } from "lucide-react"
import { Label } from "@/components/ui/label";

export default function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])

  // この部分は実際のアプリケーションではAPIから取得するデータです
  const searchResults = [
    { id: 1, title: "ギター入門：基礎から始めよう", instructor: "山田ギター郎", price: 5000, rating: 4.8, students: 1200, duration: "10時間" },
    { id: 2, title: "ピアノマスターコース", instructor: "鈴木ピアノ子", price: 8000, rating: 4.9, students: 800, duration: "15時間" },
    { id: 3, title: "ドラム基礎講座", instructor: "田中ドラム太", price: 6000, rating: 4.7, students: 600, duration: "8時間" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで検索処理を実行します
    console.log('Searching for:', searchQuery, 'in category:', category, 'price range:', priceRange)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">検索結果</h1>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>検索フィルター</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="search">キーワード検索</Label>
                  <Input
                    id="search"
                    placeholder="コースを検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">カテゴリー</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリーを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">すべて</SelectItem>
                      <SelectItem value="guitar">ギター</SelectItem>
                      <SelectItem value="piano">ピアノ</SelectItem>
                      <SelectItem value="drums">ドラム</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>価格帯</Label>
                  <Slider
                    min={0}
                    max={20000}
                    step={1000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                  />
                  <div className="flex justify-between text-sm">
                    <span>¥{priceRange[0]}</span>
                    <span>¥{priceRange[1]}</span>
                  </div>
                </div>
                <Button type="submit" className="w-full">フィルターを適用</Button>
              </form>
            </CardContent>
          </Card>
          <div className="md:col-span-3 space-y-6">
            {searchResults.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-1" />
                        <span>{course.students} 受講生</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <span className="font-bold">¥{course.price.toLocaleString()}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">コースの詳細を見る</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
