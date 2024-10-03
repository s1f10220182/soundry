'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { format, subDays } from 'date-fns'

type AuditLog = {
  id: string;
  timestamp: Date;
  action: string;
  user: string;
  ipAddress: string;
  details: string;
  severity: 'low' | 'medium' | 'high';
};

export default function SecurityAuditPage() {
  const [logs, setLogs] = useState<AuditLog[]>([
    { id: '1', timestamp: subDays(new Date(), 1), action: 'ログイン', user: 'admin@example.com', ipAddress: '192.168.1.1', details: '管理者ログイン', severity: 'low' },
    { id: '2', timestamp: subDays(new Date(), 2), action: 'パスワード変更', user: 'user@example.com', ipAddress: '192.168.1.2', details: 'ユーザーがパスワードを変更', severity: 'low' },
    { id: '3', timestamp: subDays(new Date(), 3), action: '権限変更', user: 'admin@example.com', ipAddress: '192.168.1.1', details: 'ユーザーの権限を変更', severity: 'medium' },
    { id: '4', timestamp: subDays(new Date(), 4), action: 'ファイルアップロード', user: 'instructor@example.com', ipAddress: '192.168.1.3', details: '不審なファイルのアップロード試行', severity: 'high' },
    { id: '5', timestamp: subDays(new Date(), 5), action: 'アカウントロック', user: 'user2@example.com', ipAddress: '192.168.1.4', details: '複数回のログイン失敗によるアカウントロック', severity: 'medium' },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [severityFilter, setSeverityFilter] = useState('all')

  const filteredLogs = logs.filter(log =>
    log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.ipAddress.includes(searchTerm) ||
    log.details.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(log =>
    severityFilter === 'all' || log.severity === severityFilter
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">セキュリティ監査ログ</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ログ検索・フィルター</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="アクション、ユーザー、IPアドレス、または詳細で検索"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="重要度でフィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべての重要度</SelectItem>
                  <SelectItem value="low">低</SelectItem>
                  <SelectItem value="medium">中</SelectItem>
                  <SelectItem value="high">高</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>監査ログ一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>タイムスタンプ</TableHead>
                  <TableHead>アクション</TableHead>
                  <TableHead>ユーザー</TableHead>
                  <TableHead>IPアドレス</TableHead>
                  <TableHead>詳細</TableHead>
                  <TableHead>重要度</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{format(log.timestamp, 'yyyy/MM/dd HH:mm:ss')}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.ipAddress}</TableCell>
                    <TableCell>{log.details}</TableCell>
                    <TableCell>
                      <Badge variant={log.severity === 'high' ? 'destructive' : log.severity === 'medium' ? 'default' : 'secondary'}>
                        {log.severity === 'high' ? '高' : log.severity === 'medium' ? '中' : '低'}
                      </Badge>
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
