'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

export default function CouponManagementPage({ params }: { params: { courseId: string } }) {
  const [coupons, setCoupons] = useState([
    { id: '1', code: 'SUMMER20', discount: 20, type: 'percentage', usage: 15, status: 'active', expiry: '2023-08-31' },
    { id: '2', code: 'NEWSTUDENT', discount: 1000, type: 'fixed', usage: 5, status: 'inactive', expiry: '2023-07-31' },
  ])
  const [newCoupon, setNewCoupon] = useState({
    code: '',
    discount: '',
    type: 'percentage',
    expiry: new Date(),
  })

  const handleCreateCoupon = (event: React.FormEvent) => {
    event.preventDefault()
    const createdCoupon = {
      id: `${coupons.length + 1}`,
      ...newCoupon,
      discount: Number(newCoupon.discount),
      usage: 0,
      status: 'active',
      expiry: format(newCoupon.expiry, 'yyyy-MM-dd'),
    }
    setCoupons([...coupons, createdCoupon])
    setNewCoupon({ code: '', discount: '', type: 'percentage', expiry: new Date() })
  }

  const toggleCouponStatus = (couponId: string) => {
    setCoupons(coupons.map(coupon =>
      coupon.id === couponId
        ? { ...coupon, status: coupon.status === 'active' ? 'inactive' : 'active' }
        : coupon
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">割引クーポン管理</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>新規クーポン作成</CardTitle>
            <CardDescription>
              コースID: {params.courseId} の新しい割引クーポンを作成します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateCoupon} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="coupon-code">クーポンコード</Label>
                  <Input
                    id="coupon-code"
                    value={newCoupon.code}
                    onChange={(e) => setNewCoupon({...newCoupon, code: e.target.value})}
                    placeholder="例: SUMMER20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount-type">割引タイプ</Label>
                  <Select
                    value={newCoupon.type}
                    onValueChange={(value) => setNewCoupon({...newCoupon, type: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="割引タイプを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">パーセント割引</SelectItem>
                      <SelectItem value="fixed">固定金額割引</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount-amount">割引額</Label>
                  <Input
                    id="discount-amount"
                    type="number"
                    value={newCoupon.discount}
                    onChange={(e) => setNewCoupon({...newCoupon, discount: e.target.value})}
                    placeholder={newCoupon.type === 'percentage' ? "例: 20" : "例: 1000"}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>有効期限</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {newCoupon.expiry ? format(newCoupon.expiry, 'PPP') : <span>日付を選択</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newCoupon.expiry}
                        onSelect={(date) => date && setNewCoupon({...newCoupon, expiry: date})}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" onClick={handleCreateCoupon}>クーポンを作成</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>クーポン一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>コード</TableHead>
                  <TableHead>割引</TableHead>
                  <TableHead>利用回数</TableHead>
                  <TableHead>有効期限</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell>{coupon.code}</TableCell>
                    <TableCell>
                      {coupon.type === 'percentage' ? `${coupon.discount}%` : `¥${coupon.discount}`}
                    </TableCell>
                    <TableCell>{coupon.usage}</TableCell>
                    <TableCell>{coupon.expiry}</TableCell>
                    <TableCell>
                      <Switch
                        checked={coupon.status === 'active'}
                        onCheckedChange={() => toggleCouponStatus(coupon.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">編集</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
