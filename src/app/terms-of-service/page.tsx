import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">利用規約</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Soundry利用規約</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. 適用範囲</h2>
              <p>本利用規約（以下「本規約」）は、Soundry（以下「当社」）が提供するオンライン音楽教育プラットフォーム（以下「本サービス」）の利用に関する条件を定めるものです。ユーザーは、本規約に同意した上で本サービスを利用するものとします。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. アカウントの作成と管理</h2>
              <p>ユーザーは、正確かつ最新の情報を提供してアカウントを作成する必要があります。アカウント情報の管理およびセキュリティは、ユーザー自身の責任となります。第三者による不正使用が判明した場合は、直ちに当社に通知してください。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. 知的財産権</h2>
              <p>本サービスおよびそのコンテンツに関するすべての知的財産権は、当社または適法な権利者に帰属します。ユーザーは、当社の事前の書面による承諾なしに、コンテンツの複製、改変、配布、販売、公開などを行ってはなりません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. ユーザーコンテンツ</h2>
              <p>ユーザーが本サービス上で投稿またはアップロードするコンテンツ（テキスト、画像、音声、動画など）は、ユーザー自身が必要な権利を有していることを保証するものとします。ユーザーは、当社に対して、当該コンテンツを本サービスの運営に必要な範囲で使用する非独占的な権利を許諾します。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. 禁止事項</h2>
              <p>ユーザーは、以下の行為を行ってはなりません：</p>
              <ul className="list-disc list-inside">
                <li>法令または公序良俗に反する行為</li>
                <li>他者の権利を侵害する行為（著作権、商標権、プライバシー権など）</li>
                <li>不正アクセスやサーバーに過度な負荷をかける行為</li>
                <li>虚偽の情報を提供する行為</li>
                <li>当社の許可なく商業目的で本サービスを利用する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. 免責事項</h2>
              <p>当社は、本サービスの提供に関して、明示または黙示を問わず、いかなる保証も行いません。本サービスの利用に起因する直接的または間接的な損害について、当社は一切の責任を負いません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. サービスの変更・中止</h2>
              <p>当社は、事前の通知なくして、本サービスの内容を変更、追加、または一時的もしくは永久的に中止することがあります。当社は、これによりユーザーまたは第三者に生じた損害について、一切の責任を負いません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. 規約の変更</h2>
              <p>当社は、必要に応じて本規約を変更することができます。変更後の規約は、本サービス上で公開された時点から効力を持ちます。ユーザーが変更後の規約に同意できない場合は、本サービスの利用を中止してください。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. 準拠法および管轄裁判所</h2>
              <p>本規約は、日本法に準拠します。本サービスに関して生じた紛争については、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. お問い合わせ</h2>
              <p>本規約に関するご質問がある場合は、以下の連絡先までお問い合わせください：</p>
              <p>Email: support@soundry.com</p>
              <p>住所: 〒123-4567 東京都渋谷区〇〇ビル 5F</p>
            </section>

            <p className="text-sm text-muted-foreground">
              最終更新日：2024年3月1日
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
