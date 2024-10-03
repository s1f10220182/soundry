import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, BookOpen, DollarSign, MessageSquare, Users } from "lucide-react"

export default function InstructorDashboardPage() {
  const instructor = {
    name: "鈴木先生",
    email: "suzuki@example.com",
    avatar: "https://i.pravatar.cc/150?u=suzuki",
  }

  const courses = [
    { id: 1, title: "ギター入門：基礎から始めよう", students: 1200, revenue: 240000 },
    { id: 2, title: "作曲の基礎：メロディーの作り方", students: 800, revenue: 160000 },
    { id: 3, title: "音楽理論入門", students: 1500, revenue: 300000 },
  ]

  const recentMessages = [
    { id: 1, from: "山田太郎", subject: "コース内容について質問", date: "2024-03-15" },
    { id: 2, from: "佐藤花子", subject: "次回のライブセッションについて", date: "2024-03-14" },
    { id: 3, from: "田中次郎", subject: "課題の提出について", date: "2024-03-13" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">講師ダッシュボード</h1>
          <Avatar>
            <AvatarImage src={instructor.avatar} alt={instructor.name} />
            <AvatarFallback>{instructor.name[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総収益</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥700,000</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">受講生数</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,500</div>
              <p className="text-xs text-muted-foreground">+180 new students this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">コース数</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">1 new course this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均評価</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">コース管理</TabsTrigger>
            <TabsTrigger value="messages">メッセージ</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>コース一覧</CardTitle>
                <CardDescription>あなたが作成したコースの概要です</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{course.title}</p>
                        <p className="text-sm text-muted-foreground">{course.students} 受講生</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">¥{course.revenue.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">収益</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">新しいコースを作成</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>最近のメッセージ</CardTitle>
                <CardDescription>受講生からのメッセージ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <div>
                        <p className="font-medium">{message.subject}</p>
                        <p className="text-sm text-muted-foreground">From: {message.from} - {message.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">すべてのメッセージを表示</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
