import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CheckCircle, Clock } from "lucide-react"

export default function LearningProgressPage() {
  // この部分は実際のアプリケーションではAPIから取得するデータです
  const enrolledCourses = [
    { id: 1, title: "ギター入門：基礎から始めよう", progress: 60, totalLessons: 20, completedLessons: 12 },
    { id: 2, title: "作曲の基礎：メロディーの作り方", progress: 30, totalLessons: 15, completedLessons: 5 },
    { id: 3, title: "音楽理論入門", progress: 80, totalLessons: 12, completedLessons: 10 },
  ]

  const achievements = [
    { id: 1, title: "ギターマスター", description: "10レッスンを完了", icon: <CheckCircle className="w-8 h-8 text-green-500" /> },
    { id: 2, title: "作曲の達人", description: "最初の曲を作成", icon: <BookOpen className="w-8 h-8 text-blue-500" /> },
    { id: 3, title: "学習の継続", description: "7日連続でログイン", icon: <Clock className="w-8 h-8 text-yellow-500" /> },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">学習進捗</h1>
        <Tabs defaultValue="courses">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">コース進捗</TabsTrigger>
            <TabsTrigger value="achievements">達成項目</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <div className="grid gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>
                      進捗状況: {course.completedLessons} / {course.totalLessons} レッスン完了
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground text-right">{course.progress}% 完了</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">コースを続ける</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="achievements">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <Card key={achievement.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {achievement.icon}
                      <div>
                        <CardTitle>{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
