'use client'

// import { useState, useCallback } from 'react'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { PlayCircle, PauseCircle, SkipForward, SkipBack, MessageSquare } from "lucide-react"

// export default function LessonViewPage({ params }: { params: { courseId: string, lessonId: string } }) {
export default function LessonViewPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  // const [progress, setProgress] = useState(0)

  // この部分は実際のアプリケーションではAPIから取得するデータです
  const lesson = {
    title: "コード進行の基礎",
    description: "この講座では、ポピュラー音楽で頻繁に使用されるコード進行について学びます。",
    videoUrl: "https://example.com/lesson-video.mp4",
    duration: "45:00",
    materials: [
      { id: 1, title: "コード進行チャート", type: "pdf" },
      { id: 2, title: "練習用バッキングトラック", type: "mp3" },
    ],
    quiz: [
      { id: 1, question: "I-V-vi-IVのコード進行は何と呼ばれますか？", options: ["ポップパンク進行", "ブルース進行", "ツーファイブワン進行", "アンダルシア進行"] },
      { id: 2, question: "マイナーキーでよく使われる進行は？", options: ["i-iv-v", "I-IV-V", "ii-V-I", "III-VI-II-V"] },
    ]
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // ここで実際の動画再生/一時停止の処理を行います
  }

  const handleSeek = (direction: 'forward' | 'backward') => {
    // ここで実際のシーク処理を行います
    console.log(`Seeking ${direction}`)
  }

  // const handleProgressChange = useCallback((newProgress: number) => {
  //   setProgress(newProgress)
  //   // ここで実際の動画の再生位置を変更します
  // }, []);

  const lessonProgress = 50; // または適切な値や状態変数

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">{lesson.title}</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="aspect-video bg-black relative">
                  {/* ここに実際の動画プレーヤーを配置します */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white">動画プレーヤー</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Progress value={lessonProgress} className="w-full mb-2" />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleSeek('backward')}>
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handlePlayPause}>
                          {isPlaying ? <PauseCircle className="h-6 w-6" /> : <PlayCircle className="h-6 w-6" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleSeek('forward')}>
                          <SkipForward className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="text-white text-sm">{lesson.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>レッスン内容</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="materials">
                  <TabsList>
                    <TabsTrigger value="materials">教材</TabsTrigger>
                    <TabsTrigger value="quiz">クイズ</TabsTrigger>
                    <TabsTrigger value="notes">ノート</TabsTrigger>
                  </TabsList>
                  <TabsContent value="materials">
                    <ul className="space-y-2">
                      {lesson.materials.map((material) => (
                        <li key={material.id} className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">ダウンロード</Button>
                          <span>{material.title}</span>
                          <span className="text-sm text-muted-foreground">({material.type})</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="quiz">
                    <div className="space-y-4">
                      {lesson.quiz.map((question) => (
                        <div key={question.id}>
                          <h3 className="font-medium mb-2">{question.question}</h3>
                          <div className="space-y-2">
                            {question.options.map((option, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Checkbox id={`q${question.id}-option${index}`} />
                                <label htmlFor={`q${question.id}-option${index}`}>{option}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="notes">
                    <Textarea placeholder="レッスンのノートを取る..." className="min-h-[200px]" />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>ディスカッション</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">ユーザー1</p>
                      <p className="text-sm text-muted-foreground">このレッスンでのコード進行の説明がとても分かりやすかったです！</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">ユーザー2</p>
                      <p className="text-sm text-muted-foreground">ポップパンク進行の例をもう少し聞きたいです。おすすめの曲はありますか？</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Textarea placeholder="コメントを投稿..." className="mb-2" />
                <Button>投稿</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
