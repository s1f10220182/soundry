import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Mail, Phone } from "lucide-react"
import { Label } from '@radix-ui/react-select'
import { Textarea } from "@/components/ui/textarea"

export default function HelpSupportPage() {
  const faqs = [
    {
      question: "コースの返金はできますか？",
      answer: "はい、購入後30日以内であれば全額返金が可能です。コースページの「返金リクエスト」ボタンから手続きを行ってください。"
    },
    {
      question: "コースの受講期限はありますか？",
      answer: "いいえ、Soundryのコースに受講期限はありません。一度購入したコースは、いつでも何度でも視聴することができます。"
    },
    {
      question: "修了証は発行されますか？",
      answer: "はい、コースを完了すると修了証が発行されます。修了証はプロフィールページからダウンロードすることができます。"
    },
    {
      question: "モバイルアプリはありますか？",
      answer: "現在、iOS版とAndroid版のモバイルアプリを開発中です。近日中にリリース予定ですので、今しばらくお待ちください。"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">ヘルプ＆サポート</h1>
        <div className="mb-8">
          <Input type="search" placeholder="質問を検索..." className="max-w-md" />
        </div>
        <Tabs defaultValue="faq">
          <TabsList className="mb-4">
            <TabsTrigger value="faq">よくある質問</TabsTrigger>
            <TabsTrigger value="contact">お問い合わせ</TabsTrigger>
          </TabsList>
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>よくある質問</CardTitle>
                <CardDescription>
                  一般的な質問への回答をご覧ください。お探しの情報が見つからない場合は、お問い合わせフォームをご利用ください。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>お問い合わせフォーム</CardTitle>
                  <CardDescription>
                    具体的な質問やサポートが必要な場合は、以下のフォームからお問い合わせください。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label>お名前</Label>
                      <Input id="name" placeholder="山田太郎" required />
                    </div>
                    <div className="space-y-2">
                      <Label>メールアドレス</Label>
                      <Input id="email" type="email" placeholder="yamada@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label>件名</Label>
                      <Input id="subject" placeholder="お問い合わせの件名" required />
                    </div>
                    <div className="space-y-2">
                      <Label>メッセージ</Label>
                      <Textarea id="message" placeholder="お問い合わせ内容を詳しくお書きください" required />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button>送信</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>その他のサポート方法</CardTitle>
                  <CardDescription>
                    お急ぎの場合や、より直接的なサポートが必要な場合は、以下の方法でもお問い合わせいただけます。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>ライブチャット：平日9:00〜18:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Eメール：support@soundry.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>電話：0120-XXX-XXX（平日9:00〜17:00）</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
