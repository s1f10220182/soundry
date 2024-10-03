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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, Flag } from "lucide-react"
import { format } from 'date-fns'

type ForumPost = {
  id: string;
  authorName: string;
  authorAvatar: string;
  title: string;
  content: string;
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  flags: number;
};

export default function ForumModerationPage({ params }: { params: { courseId: string } }) {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      authorName: '山田太郎',
      authorAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=山田太郎',
      title: 'ギターの練習方法について',
      content: '効果的なギターの練習方法を教えてください。毎日どのくらいの時間を練習に充てるべきでしょうか？',
      createdAt: new Date('2023-06-15T10:30:00'),
      status: 'pending',
      flags: 0,
    },
    {
      id: '2',
      authorName: '佐藤花子',
      authorAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=佐藤花子',
      title: 'おすすめのギター教材',
      content: '初心者向けのおすすめのギター教材を教えてください。本やオンライン教材など、何でも構いません。',
      createdAt: new Date('2023-06-14T15:45:00'),
      status: 'approved',
      flags: 2,
    },
    {
      id: '3',
      authorName: '鈴木一郎',
      authorAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=鈴木一郎',
      title: 'ギターの種類について',
      content: 'アコースティックギターとエレキギターの違いについて教えてください。初心者はどちらから始めるべきでしょうか？',
      createdAt: new Date('2023-06-13T09:15:00'),
      status: 'rejected',
      flags: 5,
    },
  ])

  const [selectedPosts, setSelectedPosts] = useState<string[]>([])

  const handleStatusChange = (postId: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, status: newStatus } : post
    ))
  }

  const handleBulkAction = (action: 'approve' | 'reject') => {
    setPosts(posts.map(post =>
      selectedPosts.includes(post.id) ? { ...post, status: action === 'approve' ? 'approved' : 'rejected' } : post
    ))
    setSelectedPosts([])
  }

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedPosts(posts.map(post => post.id))
    } else {
      setSelectedPosts([])
    }
  }

  const handleSelectPost = (postId: string) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter(id => id !== postId))
    } else {
      setSelectedPosts([...selectedPosts, postId])
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">フォーラムモデレーション</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>モデレーション概要</CardTitle>
            <CardDescription>
              コースID: {params.courseId} のフォーラム投稿のモデレーションを行います。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <AlertCircle className="h-6 w-6 mr-2 text-yellow-500" />
                <div>
                  <p className="text-sm font-medium">保留中の投稿</p>
                  <p className="text-2xl font-bold">{posts.filter(post => post.status === 'pending').length}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                <div>
                  <p className="text-sm font-medium">承認済みの投稿</p>
                  <p className="text-2xl font-bold">{posts.filter(post => post.status === 'approved').length}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Flag className="h-6 w-6 mr-2 text-red-500" />
                <div>
                  <p className="text-sm font-medium">フラグ付きの投稿</p>
                  <p className="text-2xl font-bold">{posts.filter(post => post.flags > 0).length}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>フォーラム投稿一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox id="select-all" onCheckedChange={handleSelectAll} />
                <Label htmlFor="select-all">すべて選択</Label>
              </div>
              <div className="space-x-2">
                <Button onClick={() => handleBulkAction('approve')} variant="outline" size="sm">
                  選択した投稿を承認
                </Button>
                <Button onClick={() => handleBulkAction('reject')} variant="outline" size="sm">
                  選択した投稿を拒否
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>投稿者</TableHead>
                  <TableHead>タイトル</TableHead>
                  <TableHead>投稿日時</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>フラグ</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedPosts.includes(post.id)}
                        onCheckedChange={() => handleSelectPost(post.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={post.authorAvatar} />
                          <AvatarFallback>{post.authorName[0]}</AvatarFallback>
                        </Avatar>
                        <span>{post.authorName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{format(post.createdAt, 'yyyy/MM/dd HH:mm')}</TableCell>
                    <TableCell>
                      <Badge variant={
                        post.status === 'approved' ? 'default' :
                        post.status === 'rejected' ? 'destructive' : 'secondary'
                      }>
                        {post.status === 'approved' ? '承認済み' :
                         post.status === 'rejected' ? '拒否' : '保留中'}
                      </Badge>
                    </TableCell>
                    <TableCell>{post.flags}</TableCell>
                    <TableCell>
                      <Select
                        value={post.status}
                        onValueChange={(value) => handleStatusChange(post.id, value as 'pending' | 'approved' | 'rejected')}
                      >
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
