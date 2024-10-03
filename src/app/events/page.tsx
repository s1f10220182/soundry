import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "ジャズピアノワークショップ",
      date: "2024-04-15",
      time: "14:00 - 16:00",
      location: "東京ミュージックスタジオ",
      instructor: "山田ジャズ子",
      capacity: 20,
      description: "ジャズピアノの基礎からアドバンステクニックまで、プロのピアニストから直接学べる貴重な機会です。",
    },
    {
      id: 2,
      title: "アコースティックギターライブ",
      date: "2024-04-22",
      time: "19:00 - 21:00",
      location: "渋谷ミュージックバー",
      instructor: "鈴木アコースティック",
      capacity: 50,
      description: "人気アコースティックギタリストによるライブパフォーマンスと、参加者とのQ&Aセッション。",
    },
    {
      id: 3,
      title: "作曲マスタークラス",
      date: "2024-05-01",
      time: "10:00 - 17:00",
      location: "オンライン",
      instructor: "佐藤コンポーザー",
      capacity: 100,
      description: "プロの作曲家から学ぶ、1日集中の作曲マスタークラス。基礎から応用まで幅広くカバーします。",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Soundryイベント</h1>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <Input type="search" placeholder="イベントを検索..." className="md:w-1/3" />
          {/* <Select>
            <SelectTrigger className="md:w-1/3">
              <SelectValue placeholder="カテゴリー" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべてのカテゴリー</SelectItem>
              <SelectItem value="workshop">ワークショップ</SelectItem>
              <SelectItem value="concert">コンサート</SelectItem>
              <SelectItem value="masterclass">マスタークラス</SelectItem>
            </SelectContent>
          </Select> */}
          <Input type="date" className="md:w-1/3" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>定員 {event.capacity}名</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">参加申し込み</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
