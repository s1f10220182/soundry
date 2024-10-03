import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from "next/link"

export default function BecomeInstructorPage() {
  const benefits = [
    "柔軟なスケジュール管理",
    "グローバルな生徒へのアクセス",
    "充実したサポートシステム",
    "継続的な収入の機会",
    "プロフェッショナルとしての成長",
  ]

  const requirements = [
    "該当分野での3年以上の経験",
    "教育への情熱",
    "基本的なオンラインツールの使用スキル",
    "週に最低5時間の指導可能時間",
    "良好なインターネット環境",
  ]

  return (
    <div><Header/>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Soundryの講師になる</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">講師の特典</CardTitle>
            <CardDescription>Soundryの講師として得られる利点</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">応募要件</CardTitle>
            <CardDescription>講師として活動するための条件</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">応募プロセス</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>オンライン申請フォームの記入</li>
            <li>資格と経験の審査</li>
            <li>オンラインインタビュー</li>
            <li>サンプルレッスンの提出</li>
            <li>プラットフォームの使用方法トレーニング</li>
            <li>プロフィールの作成と公開</li>
          </ol>
        </CardContent>
        <CardFooter>
          <Link href="become-instructor/apply"><Button size="lg" className="w-full">講師に応募する</Button></Link>
        </CardFooter>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
