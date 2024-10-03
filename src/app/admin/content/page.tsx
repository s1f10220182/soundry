'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { format } from 'date-fns'

type Content = {
  id: string;
  title: string;
  type: 'course' | 'lesson' | 'blog';
  author: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
  reviewedAt?: Date;
};

export default function ContentManagementPage() {
  const [contents, setContents] = useState<Content[]>([
    { id: '1', title: 'ギター入門コース', type: 'course', author: '山田太郎', status: 'pending', submittedAt: new Date('2023-06-15') },
    { id: '2', title: 'コード進行の基礎', type: 'lesson', author: '佐藤花子', status: 'approved', submittedAt: new Date('2023-06-14'), reviewedAt: new Date('2023-06-16') },
    { id: '3', title: '効果的な練習方法', type: 'blog', author: '鈴木一郎', status: 'rejected', submittedAt: new Date('2023-06-13'), reviewedAt: new Date('2023-06-15') },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredContents = contents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.author.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(content =>
    typeFilter === 'all' || content.type === typeFilter
  ).filter(content =>
    statusFilter === 'all' || content.status === statusFilter
  )

  const handleStatusChange = (contentId: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    setContents(contents.map(content =>
      content.id === contentId ? { ...content, status: newStatus, reviewedAt: new Date() } : content
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">コンテンツ管理</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>コンテンツ検索・フィルター</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="タイトルまたは作成者で検索"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="タイプでフィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべてのタイプ</SelectItem>
                  <SelectItem value="course">コース</SelectItem>
                  <SelectItem value="lesson">レッスン</SelectItem>
                  <SelectItem value="blog">ブログ</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ステータスでフィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべてのステータス</SelectItem>
                  <SelectItem value="pending">保留中</SelectItem>
                  <SelectItem value="approved">承認済み</SelectItem>
                  <SelectItem value="rejected">拒否</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>コンテンツ一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>タイトル</TableHead>
                  <TableHead>タイプ</TableHead>
                  <TableHead>作成者</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>提出日</TableHead>
                  <TableHead>レビュー日</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContents.map((content) => (
                  <TableRow key={content.id}>
                    <TableCell>{content.title}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {content.type === 'course' ? 'コース' :
                         content.type === 'lesson' ? 'レッスン' : 'ブログ'}
                      </Badge>
                    </TableCell>
                    <TableCell>{content.author}</TableCell>
                    <TableCell>
                      <Select value={content.status} onValueChange={(value) => handleStatusChange(content.id, value as 'pending' | 'approved' | 'rejected')}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">保留中</SelectItem>
                          <SelectItem value="approved">承認</SelectItem>
                          <SelectItem value="rejected">拒否</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{format(content.submittedAt, 'yyyy/MM/dd')}</TableCell>
                    <TableCell>{content.reviewedAt ? format(content.reviewedAt, 'yyyy/MM/dd') : '-'}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">詳細</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>{content.title}の詳細</DialogTitle>
                            <DialogDescription>
                              コンテンツの詳細情報を確認し、必要に応じて編集してください。
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="title" className="text-right">
                                タイトル
                              </Label>
                              <Input id="title" value={content.title} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="type" className="text-right">
                                タイプ
                              </Label>
                              <Select value={content.type}>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="course">コース</SelectItem>
                                  <SelectItem value="lesson">レッスン</SelectItem>
                                  <SelectItem value="blog">ブログ</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="author" className="text-right">
                                作成者
                              </Label>
                              <Input id="author" value={content.author} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="status" className="text-right">
                                ステータス
                              </Label>
                              <Select value={content.status}>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">保留中</SelectItem>
                                  <SelectItem value="approved">承認</SelectItem>
                                  <SelectItem value="rejected">拒否</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="submittedAt" className="text-right">
                                提出日
                              </Label>
                              <Input id="submittedAt" value={format(content.submittedAt, 'yyyy/MM/dd')} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="reviewedAt" className="text-right">
                                レビュー日
                              </Label>
                              <Input id="reviewedAt" value={content.reviewedAt ? format(content.reviewedAt, 'yyyy/MM/dd') : '-'} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="comment" className="text-right">
                                コメント
                              </Label>
                              <Textarea id="comment" className="col-span-3" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">保存</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
