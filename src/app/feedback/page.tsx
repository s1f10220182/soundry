'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState('')
  const [satisfaction, setSatisfaction] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log({ feedbackType, satisfaction, title, description })
    toast({
      title: "フィードバックを送信しました",
      description: "ご意見ありがとうございます。早急に確認いたします。",
    })
    // Reset form
    setFeedbackType('')
    setSatisfaction('')
    setTitle('')
    setDescription('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">フィードバック</h1>
        <Card>
          <CardHeader>
            <CardTitle>フィードバックを送信</CardTitle>
            <CardDescription>
              Soundryをより良くするためのご意見をお聞かせください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedbackType">フィードバックの種類</Label>
                <Select value={feedbackType} onValueChange={setFeedbackType}>
                  <SelectTrigger id="feedbackType">
                    <SelectValue placeholder="フィードバックの種類を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="suggestion">提案</SelectItem>
                    <SelectItem value="bug">バグ報告</SelectItem>
                    <SelectItem value="complaint">苦情</SelectItem>
                    <SelectItem value="praise">称賛</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>全体的な満足度</Label>
                <RadioGroup value={satisfaction} onValueChange={setSatisfaction}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                    <Label htmlFor="very-satisfied">とても満足</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="satisfied" id="satisfied" />
                    <Label htmlFor="satisfied">満足</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">普通</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unsatisfied" id="unsatisfied" />
                    <Label htmlFor="unsatisfied">不満</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-unsatisfied" id="very-unsatisfied" />
                    <Label htmlFor="very-unsatisfied">とても不満</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="フィードバックのタイトルを入力"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">詳細</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="フィードバックの詳細を入力"
                  rows={5}
                />
              </div>
              <Button type="submit">フィードバックを送信</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
