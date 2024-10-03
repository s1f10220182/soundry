'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

type Student = {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastAccess: string;
  completedLessons: number;
  totalLessons: number;
};

export default function StudentManagementPage({ params }: { params: { courseId: string } }) {
  const [students, setStudents] = useState<Student[]>([
    { id: '1', name: '山田太郎', email: 'yamada@example.com', progress: 75, lastAccess: '2023-06-15', completedLessons: 15, totalLessons: 20 },
    { id: '2', name: '佐藤花子', email: 'sato@example.com', progress: 40, lastAccess: '2023-06-14', completedLessons: 8, totalLessons: 20 },
    { id: '3', name: '鈴木一郎', email: 'suzuki@example.com', progress: 90, lastAccess: '2023-06-16', completedLessons: 18, totalLessons: 20 },
  ])

  const progressData = [
    { name: '0-25%', count: students.filter(s => s.progress <= 25).length },
    { name: '26-50%', count: students.filter(s => s.progress > 25 && s.progress <= 50).length },
    { name: '51-75%', count: students.filter(s => s.progress > 50 && s.progress <= 75).length },
    { name: '76-100%', count: students.filter(s => s.progress > 75).length },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">受講者管理</h1>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="students">受講者一覧</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>コース概要</CardTitle>
                <CardDescription>
                  コースID: {params.courseId}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">総受講者数</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{students.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">平均進捗率</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)}%
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">完了率80%以上の受講者</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {students.filter(student => student.progress >= 80).length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">最近のアクティブ受講者</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {students.filter(student => {
                          const lastAccess = new Date(student.lastAccess);
                          const oneWeekAgo = new Date();
                          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                          return lastAccess >= oneWeekAgo;
                        }).length}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">受講者の進捗状況</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={progressData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>受講者一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>名前</TableHead>
                      <TableHead>メールアドレス</TableHead>
                      <TableHead>進捗</TableHead>
                      <TableHead>最終アクセス</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${student.name}`} />
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{student.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={student.progress} className="w-[60px]" />
                            <span className="text-sm">{student.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{student.lastAccess}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">詳細</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
