import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PurchaseHistoryPage() {
  // この部分は実際のアプリケーションではAPIから取得するデータです
  const purchases = [
    { id: 1, date: "2023-06-01", course: "ギター入門：基礎から始めよう", price: 5000, status: "完了" },
    { id: 2, date: "2023-05-15", course: "ピアノマスターコース", price: 8000, status: "完了" },
    { id: 3, date: "2023-04-30", course: "音楽理論入門", price: 3000, status: "返金済み" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">購入履歴</h1>
        <Card>
          <CardHeader>
            <CardTitle>購入したコース</CardTitle>
            <CardDescription>
              これまでに購入したコースの一覧です。返金が必要な場合は、購入から30日以内にサポートまでご連絡ください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>日付</TableHead>
                  <TableHead>コース名</TableHead>
                  <TableHead>価格</TableHead>
                  <TableHead>状態</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((purchase) => (
                  <TableRow key={purchase.id}>
                    <TableCell>{purchase.date}</TableCell>
                    <TableCell>{purchase.course}</TableCell>
                    <TableCell>¥{purchase.price.toLocaleString()}</TableCell>
                    <TableCell>{purchase.status}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        領収書
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              ※ 返金ポリシーについては利用規約をご確認ください。
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
