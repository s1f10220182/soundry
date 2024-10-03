import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div><Header/>
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Music className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Soundryについて</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-2">ミッション</h2>
            <p className="text-muted-foreground">
              Soundryは、音楽教育をより身近で効果的なものにすることを目指しています。
              私たちは、誰もが自分のペースで音楽を学び、才能を開花させる機会を提供することに情熱を注いでいます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-2">沿革</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>2020年: 音楽愛好家グループによりSoundry設立</li>
              <li>2021年: オンラインプラットフォームのベータ版リリース</li>
              <li>2022年: 登録ユーザー10万人突破</li>
              <li>2023年: アジア地域でのサービス展開開始</li>
              <li>2024年: AI搭載の個別学習プログラム導入</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-2">チーム</h2>
            <p className="text-muted-foreground">
              Soundryのチームは、音楽教育の専門家、テクノロジーの革新者、そして情熱的な音楽家で構成されています。
              私たちは、多様な背景と専門知識を持つメンバーが協力し合い、最高の学習体験を提供することに尽力しています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-2">ビジョン</h2>
            <p className="text-muted-foreground">
              Soundryは、テクノロジーと伝統的な音楽教育の最良の部分を融合させ、
              世界中の人々が音楽を通じて自己表現し、つながりを深める未来を創造します。
              私たちは、音楽教育の民主化を通じて、より豊かで調和のとれた社会の実現に貢献します。
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
