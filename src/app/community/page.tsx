import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Eye } from "lucide-react"

export default function CommunityPage() {
  const categories = [
    { id: "general", name: "一般討論" },
    { id: "instruments", name: "楽器別" },
    { id: "theory", name: "音楽理論" },
    { id: "composition", name: "作曲・編曲" },
  ]

  const topics = [
    {
      id: 1,
      title: "ギター初心者におすすめの練習方法は？",
      author: "ギター太郎",
      category: "instruments",
      replies: 15,
      likes: 32,
      views: 230,
      lastActivity: "2時間前",
    },
    {
      id: 2,
      title: "音楽理論の学習順序について",
      author: "理論花子",
      category: "theory",
      replies: 8,
      likes: 24,
      views: 180,
      lastActivity: "1日前",
    },
    {
      id: 3,
      title: "作曲時のブロックを乗り越える方法",
      author: "作曲次郎",
      category: "composition",
      replies: 22,
      likes: 45,
      views: 310,
      lastActivity: "3時間前",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Soundryコミュニティ</h1>

        <div className="mb-8">
          <Input type="search" placeholder="トピックを検索..." className="max-w-md mx-auto" />
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <div className="grid w-full grid-cols-2 md:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>このカテゴリーの最新のトピック</CardDescription>
                </CardHeader>
                <CardContent>
                  {topics
                    .filter((topic) => topic.category === category.id)
                    .map((topic) => (
                      <div key={topic.id} className="mb-4 p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{topic.title}</h3>
                          <span className="text-sm text-muted-foreground">{topic.lastActivity}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${topic.author}`} />
                            <AvatarFallback>{topic.author[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{topic.author}</span>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MessageSquare className="w-4 h-4" />
                            <span>{topic.replies}</span>
                            <ThumbsUp className="w-4 h-4" />
                            <span>{topic.likes}</span>
                            <Eye className="w-4 h-4" />
                            <span>{topic.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full">新しいトピックを作成</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
