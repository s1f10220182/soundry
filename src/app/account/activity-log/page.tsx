'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { format, subDays, subHours, subMinutes } from 'date-fns'

type ActivityLog = {
  id: string;
  action: string;
  timestamp: Date;
  ipAddress: string;
  device: string;
  location: string;
};

export default function ActivityLogPage() {
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([])
  const [timeRange, setTimeRange] = useState('7days')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // In a real application, you would fetch activity logs from your backend
    const mockActivityLogs: ActivityLog[] = [
      {
        id: '1',
        action: 'ログイン',
        timestamp: subMinutes(new Date(), 5),
        ipAddress: '192.168.1.1',
        device: 'iPhone 12',
        location: '東京, 日本',
      },
      {
        id: '2',
        action: 'コース閲覧',
        timestamp: subHours(new Date(), 2),
        ipAddress: '192.168.1.1',
        device: 'iPhone 12',
        location: '東京, 日本',
      },
      {
        id: '3',
        action: 'プロフィール更新',
        timestamp: subDays(new Date(), 1),
        ipAddress: '10.0.0.1',
        device: 'MacBook Pro',
        location: '大阪, 日本',
      },
      {
        id: '4',
        action: 'パスワード変更',
        timestamp: subDays(new Date(), 3),
        ipAddress: '172.16.0.1',
        device: 'Windows PC',
        location: '名古屋, 日本',
      },
      {
        id: '5',
        action: 'コース購入',
        timestamp: subDays(new Date(), 5),
        ipAddress: '192.168.1.1',
        device: 'iPhone 12',
        location: '東京, 日本',
      },
    ]
    setActivityLogs(mockActivityLogs)
  }, [])

  const filteredLogs = activityLogs.filter(log =>
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.ipAddress.includes(searchTerm) ||
    log.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">アクティビティログ</h1>
        <Card>
          <CardHeader>
            <CardTitle>アカウントアクティビティ</CardTitle>
            <CardDescription>
              あなたのアカウントに関連するすべてのアクティビティを表示します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
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
              <Input
                placeholder="アクティビティを検索"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[300px]"
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>アクション</TableHead>
                  <TableHead>日時</TableHead>
                  <TableHead>IPアドレス</TableHead>
                  <TableHead>デバイス</TableHead>
                  <TableHead>場所</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{format(log.timestamp, 'yyyy/MM/dd HH:mm:ss')}</TableCell>
                    <TableCell>{log.ipAddress}</TableCell>
                    <TableCell>{log.device}</TableCell>
                    <TableCell>{log.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline">CSVでエクスポート</Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
