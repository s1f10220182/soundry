import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {  Award } from "lucide-react"
// import { BookOpen, Clock, Award } from "lucide-react"

export default function UserProfilePage() {
  // この部分は実際のアプリケーションではAPIから取得するデータです
  const user = {
    name: "山田太郎",
    bio: "音楽愛好家。ギターとピアノを学習中。",
    joinDate: "2023年4月",
    coursesCompleted: 5,
    hoursLearned: 50,
    achievements: [
      { id: 1, title: "初心者卒業", description: "5つのコースを完了" },
      { id: 2, title: "学習の継続", description: "30日連続でログイン" },
    ],
    currentCourses: [
      { id: 1, title: "ジャズギター入門", progress: 60 },
      { id: 2, title: "作曲の基礎", progress: 30 },
    ],
    completedCourses: [
      { id: 1, title: "ギター入門：基礎から始めよう", instructor: "山田ギター郎" },
      { id: 2, title: "音楽理論入門", instructor: "鈴木理論子" },
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${user.name}`} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>会員登録: {user.joinDate}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{user.bio}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">完了コース数</span>
                  <span className="text-sm font-bold">{user.coursesCompleted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">学習時間</span>
                  <span className="text-sm font-bold">{user.hoursLearned}時間</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">プロフィールを編集</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Tabs defaultValue="current">
              <TabsList className="mb-4">
                <TabsTrigger value="current">現在の学習</TabsTrigger>
                <TabsTrigger value="completed">完了したコース</TabsTrigger>
                <TabsTrigger value="achievements">達成項目</TabsTrigger>
              </TabsList>
              <TabsContent value="current">
                <Card>
                  <CardHeader>
                    <CardTitle>現在の学習状況</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.currentCourses.map((course) => (
                      <div key={course.id} className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <span className="text-sm text-muted-foreground">{course.progress}% 完了</span>
                        </div>
                        <Progress value={course.progress} className="w-full" />
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">学習を続ける</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="completed">
                <Card>
                  <CardHeader>
                    <CardTitle>完了したコース</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.completedCourses.map((course) => (
                      <div key={course.id} className="mb-4 p-4 border rounded-lg">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">講師: {course.instructor}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>達成項目</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.achievements.map((achievement) => (
                      <div key={achievement.id} className="mb-4 p-4 border rounded-lg flex items-center space-x-4">
                        <Award className="w-8 h-8 text-yellow-400" />
                        <div>
                          <h3 className="font-medium">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
