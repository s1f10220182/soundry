import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "音楽教育コンテンツ開発者",
      department: "教育部門",
      location: "リモート",
      type: "フルタイム",
      description: "音楽理論や楽器演奏のオンライン学習コンテンツを企画・制作する役割です。",
    },
    {
      title: "UIUXデザイナー",
      department: "プロダクト部門",
      location: "東京",
      type: "フルタイム",
      description: "ユーザー体験を向上させるためのインターフェースデザインを担当します。",
    },
    {
      title: "カスタマーサポートスペシャリスト",
      department: "カスタマーサクセス部門",
      location: "大阪",
      type: "パートタイム",
      description: "ユーザーからの問い合わせ対応や、サービス利用のサポートを行います。",
    },
    {
      title: "マーケティングマネージャー",
      department: "マーケティング部門",
      location: "リモート",
      type: "フルタイム",
      description: "オンライン音楽教育サービスの認知度向上と顧客獲得戦略を立案・実行します。",
    },
  ]

  return (
    <div><Header/>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">採用情報</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Soundryで働く魅力</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Soundryは、音楽教育の未来を創造する革新的な企業です。私たちは、情熱的で創造的な人材を求めています。
            Soundryでは、以下のような環境で働くことができます：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>フレックスタイム制度とリモートワークオプション</li>
            <li>継続的な学習と成長の機会</li>
            <li>グローバルな環境での就業体験</li>
            <li>最新のテクノロジーを活用した業務</li>
            <li>音楽教育に貢献する社会的意義のある仕事</li>
          </ul>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold text-primary mb-4">現在の求人</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {jobOpenings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.department}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-2">
                <Badge>{job.location}</Badge>
                <Badge variant="secondary">{job.type}</Badge>
              </div>
              <p className="text-muted-foreground">{job.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">詳細を見る</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">オープンポジションが見つからない場合</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            現在募集中のポジションに該当するものがない場合でも、あなたのスキルと情熱を活かせる機会があるかもしれません。
            私たちは常に優秀な人材を探しています。以下のボタンから、あなたの経歴と興味のある分野をお知らせください。
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">一般応募する</Button>
        </CardFooter>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
