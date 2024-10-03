import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">プライバシーポリシー</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Soundryプライバシーポリシー</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. はじめに</h2>
              <p>Soundry（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当社が収集する情報、その利用方法、およびお客様の権利について説明するものです。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. 収集する情報</h2>
              <p>当社は、以下の種類の情報を収集する場合があります：</p>
              <ul className="list-disc list-inside">
                <li>個人識別情報：氏名、メールアドレス、住所、電話番号など</li>
                <li>支払い情報：クレジットカード情報、請求先住所など</li>
                <li>サービス利用情報：ログイン履歴、コース受講履歴、学習進捗など</li>
                <li>技術情報：IPアドレス、ブラウザの種類、デバイス情報、クッキー情報など</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. 情報の利用目的</h2>
              <p>当社は、収集した情報を以下の目的で使用します：</p>
              <ul className="list-disc list-inside">
                <li>サービスの提供および改善：コースの提供、カスタマーサポート、機能の改善</li>
                <li>個別化された体験の提供：おすすめコンテンツの表示、ユーザー設定の保存</li>
                <li>コミュニケーション：重要なお知らせ、サービスに関する連絡、マーケティング情報の提供</li>
                <li>セキュリティおよび不正防止：アカウントの保護、不正アクセスの検知と防止</li>
                <li>法令遵守：法的義務の履行、当社の権利保護</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. 情報の共有と開示</h2>
              <p>当社は、以下の場合において、お客様の個人情報を第三者と共有することがあります：</p>
              <ul className="list-disc list-inside">
                <li>サービス提供のための業務委託先：支払い処理、データ分析、メール配信など</li>
                <li>法的要請：法令、裁判所の命令、行政機関からの要請に応じる場合</li>
                <li>事業譲渡：合併、買収、資産売却等に関連して情報が移転する場合</li>
                <li>お客様の同意がある場合：特定の第三者への情報提供についてお客様の同意を得た場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. データセキュリティ</h2>
              <p>当社は、お客様の個人情報を保護するために適切な技術的および組織的な対策を講じています。ただし、インターネットを経由した情報の送信における完全な安全性を保証することはできません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. 国際データ転送</h2>
              <p>当社は、サービスの提供に必要な場合、国境を越えてお客様の情報を転送することがあります。その際、適用されるデータ保護法に従い、適切な保護措置を講じます。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. ユーザーの権利</h2>
              <p>お客様は、以下の権利を有しています：</p>
              <ul className="list-disc list-inside">
                <li>個人情報へのアクセスおよびコピーの請求</li>
                <li>個人情報の訂正、更新、削除の請求</li>
                <li>データ処理の制限または異議申し立て</li>
                <li>データポータビリティの権利</li>
                <li>同意の撤回</li>
                <li>監督当局への苦情申立て</li>
              </ul>
              <p>これらの権利を行使したい場合は、当社までご連絡ください。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. クッキーおよび類似技術の使用</h2>
              <p>当社は、ウェブサイトの機能向上およびユーザー体験の最適化のために、クッキーや類似の追跡技術を使用しています。ブラウザの設定により、クッキーの使用を制限または拒否することができますが、その場合、一部の機能が利用できなくなる可能性があります。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">9. 未成年者のプライバシー</h2>
              <p>当社のサービスは、13歳未満の児童を対象としていません。13歳未満のお客様から意図的に個人情報を収集することはありません。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">10. プライバシーポリシーの変更</h2>
              <p>当社は、必要に応じて本プライバシーポリシーを更新することがあります。重要な変更がある場合は、ウェブサイト上で通知します。最新のポリシーは常に当社のウェブサイトに掲載されます。</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">11. お問い合わせ</h2>
              <p>本プライバシーポリシーに関するご質問やご懸念がある場合は、以下の連絡先までご連絡ください：</p>
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
