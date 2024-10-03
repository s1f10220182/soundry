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
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Upload, Mic } from "lucide-react"
// import { Upload, File, FileText, Mic } from "lucide-react"

export default function LessonUploadPage({ params }: { params: { courseId: string } }) {
  const [lessonType, setLessonType] = useState('video')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault()
    setIsUploading(true)
    // ここで実際のアップロード処理を実装します
    // 以下はアップロードの進捗をシミュレートしています
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
      }
    }, 500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">レッスンのアップロード</h1>
        <Card>
          <CardHeader>
            <CardTitle>新規レッスンの追加</CardTitle>
            <CardDescription>
              コースID: {params.courseId}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lesson-title">レッスンタイトル</Label>
                <Input id="lesson-title" placeholder="レッスンのタイトルを入力" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lesson-description">レッスンの説明</Label>
                <Textarea id="lesson-description" placeholder="レッスンの内容を簡単に説明してください" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lesson-type">レッスンタイプ</Label>
                <Select value={lessonType} onValueChange={setLessonType}>
                  <SelectTrigger>
                    <SelectValue placeholder="レッスンタイプを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video">動画</SelectItem>
                    <SelectItem value="text">テキスト</SelectItem>
                    <SelectItem value="audio">音声</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Tabs defaultValue={lessonType}>
                <TabsContent value="video">
                  <Card>
                    <CardHeader>
                      <CardTitle>動画のアップロード</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="video-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">クリックしてアップロード</span> またはドラッグ＆ドロップ</p>
                            <p className="text-xs text-gray-500">MP4, MOV, AVI (最大 2GB)</p>
                          </div>
                          <Input id="video-upload" type="file" className="hidden" accept="video/*" />
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="text">
                  <Card>
                    <CardHeader>
                      <CardTitle>テキストコンテンツ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea placeholder="レッスンのテキストコンテンツを入力してください" className="min-h-[200px]" />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="audio">
                  <Card>
                    <CardHeader>
                      <CardTitle>音声のアップロード</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="audio-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Mic className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">クリックしてアップロード</span> またはドラッグ＆ドロップ</p>
                            <p className="text-xs text-gray-500">MP3, WAV, AAC (最大 500MB)</p>
                          </div>
                          <Input id="audio-upload" type="file" className="hidden" accept="audio/*" />
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              {isUploading && (
                <div className="space-y-2">
                  <Label>アップロード進捗</Label>
                  <Progress value={uploadProgress} className="w-full" />
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isUploading}>
              {isUploading ? 'アップロード中...' : 'レッスンを追加'}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
