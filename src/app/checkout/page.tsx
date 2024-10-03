'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')

  // この部分は実際のアプリケーションではカートの内容やユーザー情報をAPIから取得します
  const cartItems = [
    { id: 1, title: "ギター入門：基礎から始めよう", price: 5000 },
    { id: 2, title: "中級者のためのギターテクニック", price: 8000 },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const tax = Math.round(subtotal * 0.1)
  const total = subtotal + tax

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // ここで支払い処理のAPIを呼び出す処理を実装します
    console.log('Payment processed')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">お支払い</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>注文内容</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.title}</span>
                      <span>¥{item.price.toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>消費税</span>
                    <span>¥{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span>合計</span>
                    <span>¥{total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>支払い情報</CardTitle>
                  <CardDescription>
                    安全な支払い処理のため、カード情報は暗号化されて送信されます。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">氏名</Label>
                    <Input id="name" placeholder="山田 太郎" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" type="email" placeholder="yamada@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label>支払い方法</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card">クレジットカード</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {paymentMethod === 'credit-card' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">カード番号</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">有効期限</Label>
                          <Input id="expiry" placeholder="MM / YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">セキュリティコード</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">¥{total.toLocaleString()}を支払う</Button>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
