import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Clock, Users } from "lucide-react"

export default function FavoriteCoursesPage() {
  // この部分は実際のアプリケーションではAPIから取得するデータです
  const favoriteCourses = [
    { id: 1, title: "ギター入門：基礎から始めよう", instructor: "山田ギター郎", price: 5000, rating: 4.8, students: 1200, duration: "10時間" },
    { id: 2, title: "ピアノマスターコース", instructor: "鈴木ピアノ子", price: 8000, rating: 4.9, students: 800, duration: "15時間" },
    { id: 3, title: "ドラム基礎講座", instructor: "田中ドラム太", price: 6000, rating: 4.7, students: 600, duration: "8時間" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">お気に入りコース</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favoriteCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <span className="font-bold">¥{course.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students} 受講生</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">お気に入りから削除</Button>
                <Button>コースを見る</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
