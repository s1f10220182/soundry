'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

// export default function CourseReviewsPage({ params }: { params: { courseId: string } }) {
export default function CourseReviewsPage() {
  const [userRating, setUserRating] = useState(0)
  const [userReview, setUserReview] = useState('')

  // この部分は実際のアプリケーションではAPIから取得するデータです
  const course = {
    title: "ギター入門：基礎から始めよう",
    instructor: "山田ギター郎",
    averageRating: 4.7,
    totalReviews: 120,
    ratingDistribution: [5, 70, 30, 10, 5],
  }

  const reviews = [
    { id: 1, user: "ギター初心者A", rating: 5, content: "とても分かりやすい講座でした。初心者でも楽しく学べます！", likes: 15, dislikes: 1, date: "2023-06-01" },
    { id: 2, user: "中級者B", rating: 4, content: "基礎を復習するのに最適です。もう少し応用的な内容も欲しかったです。", likes: 8, dislikes: 2, date: "2023-05-28" },
    { id: 3, user: "音楽愛好家C", rating: 5, content: "講師の説明が丁寧で、練習方法も具体的で役立ちました。", likes: 20, dislikes: 0, date: "2023-05-25" },
  ]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting review:', { rating: userRating, content: userReview })
    // ここでレビューを送信する処理を実装します
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">{course.title} - レビュー</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>レビューを書く</CardTitle>
                <CardDescription>このコースの感想を共有してください</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-6 h-6 cursor-pointer ${star <= userRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          onClick={() => setUserRating(star)}
                        />
                      ))}
                    </div>
                    <Textarea
                      placeholder="レビューを書く..."
                      value={userReview}
                      onChange={(e) => setUserReview(e.target.value)}
                      className="w-full mb-4"
                      rows={4}
                    />
                    <Button type="submit">レビューを投稿</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${review.user}`} />
                          <AvatarFallback>{review.user[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{review.user}</CardTitle>
                          <CardDescription>{review.date}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{review.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {review.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        {review.dislikes}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm">返信</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>コース評価概要</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold mr-2">{course.averageRating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < Math.round(course.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-center mb-4">{course.totalReviews} 件のレビュー</p>
                <div className="space-y-2">
                  {course.ratingDistribution.map((count, index) => (
                    <div key={5 - index} className="flex items-center">
                      <span className="w-4 mr-2">{5 - index}</span>
                      <Progress value={(count / course.totalReviews) * 100} className="flex-grow mr-2" />
                      <span className="w-8 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
