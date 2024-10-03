'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { format } from 'date-fns'

type WithdrawalRequest = {
  id: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: Date;
  processedDate?: Date;
};

type TaxInfo = {
  name: string;
  taxId: string;
  address: string;
  country: string;
};

export default function FinancesPage() {
  const [balance, setBalance] = useState(150000)
  const [withdrawalAmount, setWithdrawalAmount] = useState('')
  const [withdrawalRequests, setWithdrawalRequests] = useState<WithdrawalRequest[]>([
    { id: '1', amount: 50000, status: 'approved', requestDate: new Date('2023-06-01'), processedDate: new Date('2023-06-03') },
    { id: '2', amount: 30000, status: 'pending', requestDate: new Date('2023-06-15') },
  ])
  const [taxInfo, setTaxInfo] = useState<TaxInfo>({
    name: '山田太郎',
    taxId: '1234567890',
    address: '東京都渋谷区...',
    country: 'Japan',
  })

  const handleWithdrawalRequest = () => {
    const amount = Number(withdrawalAmount)
    if (amount > 0 && amount <= balance) {
      const newRequest: WithdrawalRequest = {
        id: `${withdrawalRequests.length + 1}`,
        amount: amount,
        status: 'pending',
        requestDate: new Date(),
      }
      setWithdrawalRequests([...withdrawalRequests, newRequest])
      setWithdrawalAmount('')
    }
  }

  const handleUpdateTaxInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the updated tax info to your backend
    alert('税務情報が更新されました')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">財務管理</h1>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>現在の残高</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">¥{balance.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>引き出しリクエスト</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="引き出し金額"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
                <Button onClick={handleWithdrawalRequest}>リクエスト</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>引き出しリクエスト履歴</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>リクエスト日</TableHead>
                  <TableHead>金額</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>処理日</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withdrawalRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{format(request.requestDate, 'yyyy/MM/dd')}</TableCell>
                    <TableCell>¥{request.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      {request.status === 'pending' && (
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-yellow-500" />
                          <span>保留中</span>
                        </div>
                      )}
                      {request.status === 'approved' && (
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span>承認済み</span>
                        </div>
                      )}
                      {request.status === 'rejected' && (
                        <div className="flex items-center">
                          <AlertCircle className="mr-2 h-4 w-4 text-red-500" />
                          <span>拒否</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {request.processedDate ? format(request.processedDate, 'yyyy/MM/dd') : '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>税務情報</CardTitle>
            <CardDescription>正確な税務情報を入力してください。</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateTaxInfo} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">氏名</Label>
                <Input
                  id="name"
                  value={taxInfo.name}
                  onChange={(e) => setTaxInfo({ ...taxInfo, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxId">税務番号</Label>
                <Input
                  id="taxId"
                  value={taxInfo.taxId}
                  onChange={(e) => setTaxInfo({ ...taxInfo, taxId: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">住所</Label>
                <Textarea
                  id="address"
                  value={taxInfo.address}
                  onChange={(e) => setTaxInfo({ ...taxInfo, address: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">国</Label>
                <Select
                  value={taxInfo.country}
                  onValueChange={(value) => setTaxInfo({ ...taxInfo, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="国を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Japan">日本</SelectItem>
                    <SelectItem value="United States">アメリカ合衆国</SelectItem>
                    <SelectItem value="United Kingdom">イギリス</SelectItem>
                    <SelectItem value="Germany">ドイツ</SelectItem>
                    <SelectItem value="France">フランス</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">税務情報を更新</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
