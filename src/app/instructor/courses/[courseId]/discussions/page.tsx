'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { format } from 'date-fns'

type Discussion = {
  id: string;
  studentName: string;
  studentAvatar: string;
  content: string;
  createdAt: Date;
  lessonTitle: string;
  status: 'unanswered' | 'answered';
  replies: Reply[];
};

type Reply = {
  id: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: Date;
};

export default function DiscussionsManagementPage({ params }: { params: { courseId: string } }) {
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: '1',
      studentName: '山田太郎',
      studentAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=山田太郎',
      content: 'ギターの弦の張り方について質問があります。初心者でも簡単にできる方法はありますか？',
      createdAt: new Date('2023-06-15T10:30:00'),
      lessonTitle: 'ギターのメンテナンス基礎',
      status: 'unanswered',
      replies: [],
    },
    {
      id: '2',
      studentName: '佐藤花子',
      studentAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=佐藤花子',
      content: 'コード進行の練習方法について、効果的な方法を教えていただけますか？',
      createdAt: new Date('2023-06-14T15:45:00'),
      lessonTitle: 'コード進行の基礎',
      status: 'answered',
      replies: [
        {
          id: '1',
          authorName: '鈴木先生',
          authorAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=鈴木先生',
          content: 'コード進行の練習には、まず基本的なI-IV-V進行から始めるのがおすすめです。毎日15分程度、異なるキーで練習してみてください。',
          createdAt: new Date('2023-06-14T16:30:00'),
        },
      ],
    },
  ])

  const [newReply, setNewReply] = useState('')

  const handleReply = (discussionId: string) => {
    if (newReply.trim() === '') return

    const updatedDiscussions = discussions.map(discussion => {
      if (discussion.id === discussionId) {
        return {
          ...discussion,
          status: 'answered' as const,
          replies: [
            ...discussion.replies,
            {
              id: `${discussion.replies.length + 1}`,
              authorName: '講師',
              authorAvatar: 'https://api.dicebear.com/6.x/initials/svg?seed=講師',
              content: newReply,
              createdAt: new Date(),
            },
          ],
        }
      }
      return discussion
    })

    setDiscussions(updatedDiscussions)
    setNewReply('')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">ディスカッション管理</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">すべて</TabsTrigger>
            <TabsTrigger value="unanswered">未回答</TabsTrigger>
            <TabsTrigger value="answered">回答済み</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <DiscussionList discussions={discussions} handleReply={handleReply} newReply={newReply} setNewReply={setNewReply} />
          </TabsContent>
          <TabsContent value="unanswered">
            <DiscussionList
              discussions={discussions.filter(d => d.status === 'unanswered')}
              handleReply={handleReply}
              newReply={newReply}
              setNewReply={setNewReply}
            />
          </TabsContent>
          <TabsContent value="answered">
            <DiscussionList
              discussions={discussions.filter(d => d.status === 'answered')}
              handleReply={handleReply}
              newReply={newReply}
              setNewReply={setNewReply}
            />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

function DiscussionList({
  discussions,
  handleReply,
  newReply,
  setNewReply
}: {
  discussions: Discussion[],
  handleReply: (id: string) => void,
  newReply: string,
  setNewReply: (reply: string) => void
}) {
  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <Card key={discussion.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={discussion.studentAvatar} />
                  <AvatarFallback>{discussion.studentName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{discussion.studentName}</CardTitle>
                  <CardDescription>{format(discussion.createdAt, 'yyyy/MM/dd HH:mm')}</CardDescription>
                </div>
              </div>
              <Badge variant={discussion.status === 'unanswered' ? 'destructive' : 'default'}>
                {discussion.status === 'unanswered' ? '未回答' : '回答済み'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">レッスン: {discussion.lessonTitle}</p>
            <p>{discussion.content}</p>
            {discussion.replies.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold">返信</h4>
                {discussion.replies.map((reply) => (
                  <div key={reply.id} className="bg-muted p-2 rounded">
                    <div className="flex items-center space-x-2 mb-1">
                      <Avatar>
                        <AvatarImage src={reply.authorAvatar} />
                        <AvatarFallback>{reply.authorName[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{reply.authorName}</p>
                        <p className="text-xs text-muted-foreground">{format(reply.createdAt, 'yyyy/MM/dd HH:mm')}</p>
                      </div>
                    </div>
                    <p className="text-sm">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-2">
              <Textarea
                placeholder="返信を入力..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <Button onClick={() => handleReply(discussion.id)}>返信する</Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
