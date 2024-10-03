'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // ここで設定の保存処理を行います
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">アカウント設定</h1>
        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">プロフィール</TabsTrigger>
            <TabsTrigger value="account">アカウント</TabsTrigger>
            <TabsTrigger value="notifications">通知</TabsTrigger>
            <TabsTrigger value="privacy">プライバシー</TabsTrigger>
          </TabsList>
          <form onSubmit={handleSubmit}>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>プロフィール設定</CardTitle>
                  <CardDescription>
                    あなたの公開プロフィール情報を管理します
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">画像を変更</Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">名前</Label>
                    <Input id="name" defaultValue="山田太郎" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">自己紹介</Label>
                    <Textarea id="bio" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">ウェブサイト</Label>
                    <Input id="website" type="url" placeholder="https://example.com" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "保存中..." : "変更を保存"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>アカウント設定</CardTitle>
                  <CardDescription>
                    アカウントの基本設定を管理します
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" type="email" defaultValue="yamada@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">新しいパスワード</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">言語</Label>
                    <Select defaultValue="ja">
                      <SelectTrigger>
                        <SelectValue placeholder="言語を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ja">日本語</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "保存中..." : "変更を保存"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>通知設定</CardTitle>
                  <CardDescription>
                    通知の受け取り方を管理します
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">メール通知</Label>
                    <Switch id="email-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications">プッシュ通知</Label>
                    <Switch id="push-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing-emails">マーケティングメール</Label>
                    <Switch id="marketing-emails" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "保存中..." : "変更を保存"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>プライバシー設定</CardTitle>
                  <CardDescription>
                    あなたのプライバシーオプションを管理します
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="profile-visibility">プロフィールの公開</Label>
                    <Switch id="profile-visibility" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="course-history-visibility">コース履歴の公開</Label>
                    <Switch id="course-history-visibility" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data-usage">データの使用</Label>
                    <Textarea id="data-usage" placeholder="データの使用に関する追加の指示" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "保存中..." : "変更を保存"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
