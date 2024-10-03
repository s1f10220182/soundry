import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronRight, Music, Code, Briefcase, Palette } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">音楽の世界へようこそ</h1>
            <p className="text-xl md:text-2xl mb-8">Soundryで才能を解き放ち、音楽の旅を始めましょう</p>
            <Button size="lg" asChild>
              <Link href="/courses">コースを探す</Link>
            </Button>
          </div>
        </section>

        {/* 人気コース */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">人気のコース</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "ギター入門", instructor: "山田太郎", price: "¥5,000", image: "/placeholder.svg?height=200&width=300" },
                { title: "作曲マスター", instructor: "佐藤花子", price: "¥8,000", image: "/placeholder.svg?height=200&width=300" },
                { title: "ボーカルテクニック", instructor: "鈴木一郎", price: "¥6,500", image: "/placeholder.svg?height=200&width=300" },
              ].map((course, index) => (
                <Card key={index}>
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <Star className="text-yellow-400 mr-1" />
                      <span className="ml-2 text-sm text-gray-600">(150)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="font-bold">{course.price}</span>
                    <Button variant="outline">詳細を見る</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/courses">すべてのコースを見る <ChevronRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* カテゴリー別コース */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">カテゴリー別コース</h2>
            <Tabs defaultValue="instrument">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="instrument">楽器</TabsTrigger>
                <TabsTrigger value="production">音楽制作</TabsTrigger>
                <TabsTrigger value="theory">音楽理論</TabsTrigger>
                <TabsTrigger value="business">音楽ビジネス</TabsTrigger>
              </TabsList>
              <TabsContent value="instrument">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["ギター", "ピアノ", "ドラム", "ベース", "バイオリン", "サックス", "トランペット", "ウクレレ"].map((instrument, index) => (
                    <Button variant="outline" key={index} className="h-24 text-lg">
                      {instrument}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="production">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["DAW基礎", "ミキシング", "マスタリング", "作曲", "編曲", "ボーカル録音", "シンセサイザー", "サンプリング"].map((topic, index) => (
                    <Button variant="outline" key={index} className="h-24 text-lg">
                      {topic}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="theory">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["音楽理論基礎", "和声学", "対位法", "楽式論", "ソルフェージュ", "耳コピ", "即興演奏", "スコアリーディング"].map((topic, index) => (
                    <Button variant="outline" key={index} className="h-24 text-lg">
                      {topic}
                    </Button>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="business">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["音楽マーケティング", "著作権", "マネジメント", "ライブ企画", "レコーディング", "ディストリビューション", "ファンエンゲージメント", "音楽法務"].map((topic, index) => (
                    <Button variant="outline" key={index} className="h-24 text-lg">
                      {topic}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 講師紹介 */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">トップ講師陣</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "山田太郎", specialty: "ギター", image: "/placeholder.svg?height=100&width=100" },
                { name: "佐藤花子", specialty: "ピアノ", image: "/placeholder.svg?height=100&width=100" },
                { name: "鈴木一郎", specialty: "ドラム", image: "/placeholder.svg?height=100&width=100" },
                { name: "高橋美咲", specialty: "ボーカル", image: "/placeholder.svg?height=100&width=100" },
              ].map((instructor, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={instructor.image} alt={instructor.name} />
                      <AvatarFallback>{instructor.name[0]}</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="font-bold text-lg">{instructor.name}</h3>
                    <p className="text-gray-600">{instructor.specialty}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline">プロフィールを見る</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ユーザーレビュー */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">ユーザーの声</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "田中さくら", course: "ギター入門", comment: "初心者でも分かりやすく、楽しく学べました！", rating: 5 },
                { name: "佐々木健太", course: "作曲マスター", comment: "プロの技術が学べて、作曲スキルが格段に上がりました。", rating: 5 },
                { name: "山本美香", course: "ボーカルテクニック", comment: "声の出し方から表現力まで、総合的に学べて良かったです。", rating: 4 },
              ].map((review, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription>{review.course}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>"{review.comment}"</p>
                    <div className="flex items-center mt-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="text-yellow-400 h-4 w-4" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* プラットフォームの特徴 */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Soundryの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Music className="h-12 w-12 mb-4" />, title: "幅広いジャンル", description: "クラシックからポップスまで、あらゆるジャンルの音楽を学べます。" },
                { icon: <Code className="h-12 w-12 mb-4" />, title: "最新の学習技術", description: "AIを活用した個別学習プランで、効率的に上達できます。" },
                { icon: <Briefcase className="h-12 w-12 mb-4" />, title: "プロの講師陣", description: "業界で活躍する一流のミュージシャンから直接学べます。" },
                { icon: <Palette className="h-12 w-12 mb-4" />, title: "クリエイティブな環境", description: "他の受講生と交流し、刺激し合える環境が整っています。" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-center">{feature.icon}</div>
                    <CardTitle className="text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>受講に必要な機材は何ですか？</AccordionTrigger>
                <AccordionContent>
                  基本的にはインターネット接続可能なデバイス（パソコン、タブレット、スマートフォンなど）があれば受講可能です。ただし、実技を伴うコースでは各楽器や録音機材が必要になる場合があります。詳細は各コースの説明をご確認ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>コースの受講期限はありますか？</AccordionTrigger>
                <AccordionContent>
                  多くのコースに受講期限はありませんが、一部のライブセッションや期間限定コースには期限が設定されている場合があります。各コースの詳細ページでご確認いただけます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>返金ポリシーについて教えてください。</AccordionTrigger>
                <AccordionContent>
                  購入後14日以内かつコースの進捗が25%未満の場合、全額返金が可能です。ただし、一部のコースや特別プログラムには異なるポリシーが適用される場合があります。詳細は利用規約をご確認ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>講師に直接質問することはできますか？</AccordionTrigger>
                <AccordionContent>
                  はい、可能です。各コースにはQ&Aセクションが用意されており、そこで講師に直接質問することができます。また、一部のコースではライブセッションやオフィスアワーも設けられています。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* ニュースレター登録 */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">最新情報をお届けします</h2>
            <p className="mb-8">新しいコース、特別オファー、音楽業界のトレンドなど、役立つ情報をお届けします。</p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="メールアドレスを入力" className="w-full md:w-auto" />
              <Button type="submit">登録する</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
