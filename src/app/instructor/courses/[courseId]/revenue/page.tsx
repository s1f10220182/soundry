'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format, subDays } from 'date-fns'

type SaleData = {
  date: string;
  revenue: number;
  sales: number;
};

type Transaction = {
  id: string;
  date: string;
  studentName: string;
  amount: number;
  status: 'completed' | 'refunded';
};

export default function RevenueManagementPage({ params }: { params: { courseId: string } }) {
  const [timeRange, setTimeRange] = useState('30days')
  const [saleData, setSaleData] = useState<SaleData[]>(
    Array.from({ length: 30 }, (_, i) => ({
      date: format(subDays(new Date(), i), 'yyyy-MM-dd'),
      revenue: Math.floor(Math.random() * 10000),
      sales: Math.floor(Math.random() * 10),
    })).reverse()
  )
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', date: '2023-06-15', studentName: '山田太郎', amount: 9800, status: 'completed' },
    { id: '2', date: '2023-06-14', studentName: '佐藤花子', amount: 9800, status: 'completed' },
    { id: '3', date: '2023-06-13', studentName: '鈴木一郎', amount: 9800, status: 'refunded' },
  ])

  const totalRevenue = saleData.reduce((sum, data) => sum + data.revenue, 0)
  const totalSales = saleData.reduce((sum, data) => sum + data.sales, 0)
  const averageRevenuePerSale = totalSales > 0 ? totalRevenue / totalSales : 0

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">収益管理</h1>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総収益</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥{totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">過去30日間</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総販売数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSales}</div>
              <p className="text-xs text-muted-foreground">過去30日間</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均販売価格</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥{averageRevenuePerSale.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">過去30日間</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>売上推移</CardTitle>
            <CardDescription>
              コースID: {params.courseId} の売上推移を表示しています。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="期間を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">過去7日間</SelectItem>
                  <SelectItem value="30days">過去30日間</SelectItem>
                  <SelectItem value="90days">過去90日間</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={saleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="収益" />
                  <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#82ca9d" name="販売数" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>取引履歴</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>日付</TableHead>
                  <TableHead>受講者名</TableHead>
                  <TableHead>金額</TableHead>
                  <TableHead>ステータス</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.studentName}</TableCell>
                    <TableCell>¥{transaction.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      {transaction.status === 'completed' ? (
                        <span className="text-green-600">完了</span>
                      ) : (
                        <span className="text-red-600">返金済み</span>
                      )}
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
