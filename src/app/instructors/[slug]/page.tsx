import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
import { Star, Award, Calendar } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// export default function InstructorDetailPage({ params }: { params: { slug: string } }) {
export default function InstructorDetailPage() {
  // 実際のアプリケーションでは、この情報をAPIやデータベースから取得します
  const instructor = {
    name: "山田太郎",
    slug: "yamada-taro",
    specialty: "ギター",
    bio: "20年以上のギター演奏経験を持つプロミュージシャン。数々の有名アーティストとの共演やレコーディングに参加。ロック、ブルース、ジャズなど幅広いジャンルに精通。",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 4.9,
    students: 1500,
    courses: [
      { title: "ギター入門：基礎から始めよう", slug: "beginner-guitar" },
      { title: "ブルースギター・マスタークラス", slug: "blues-guitar-masterclass" },
      { title: "ジャズギター即興演奏テクニック", slug: "jazz-guitar-improvisation" },
    ],
    upcomingLessons: [
      { title: "ロックギター・ワークショップ", date: "2024-04-15" },
      { title: "アコースティックギター・セミナー", date: "2024-04-22" },
    ]
  }

  return (
    <div>
      <Header/>
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={instructor.avatar} alt={instructor.name} />
              <AvatarFallback>{instructor.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl text-primary">{instructor.name}</CardTitle>
              <CardDescription className="text-xl">{instructor.specialty}講師</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{instructor.bio}</p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{instructor.rating}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-1" />
              <span>{instructor.students}人の生徒</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">担当コース</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {instructor.courses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">コースの詳細</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">今後のレッスン</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {instructor.upcomingLessons.map((lesson, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-sm text-muted-foreground">{lesson.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">レッスンに申し込む</Button>
        </CardFooter>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
