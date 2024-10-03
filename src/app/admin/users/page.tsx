'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
// import { Card, CardContent,  CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { format } from 'date-fns'

type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  status: 'active' | 'inactive' | 'banned';
  createdAt: Date;
  lastLogin: Date;
};

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: '山田太郎', email: 'yamada@example.com', role: 'student', status: 'active', createdAt: new Date('2023-01-15'), lastLogin: new Date('2023-06-20') },
    { id: '2', name: '佐藤花子', email: 'sato@example.com', role: 'instructor', status: 'active', createdAt: new Date('2023-02-20'), lastLogin: new Date('2023-06-19') },
    { id: '3', name: '鈴木一郎', email: 'suzuki@example.com', role: 'admin', status: 'active', createdAt: new Date('2023-03-10'), lastLogin: new Date('2023-06-21') },
    { id: '4', name: '田中美咲', email: 'tanaka@example.com', role: 'student', status: 'inactive', createdAt: new Date('2023-04-05'), lastLogin: new Date('2023-05-15') },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(user =>
    roleFilter === 'all' || user.role === roleFilter
  ).filter(user =>
    statusFilter === 'all' || user.status === statusFilter
  )

  const handleStatusChange = (userId: string, newStatus: 'active' | 'inactive' | 'banned') => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    ))
  }

  const handleRoleChange = (userId: string, newRole: 'student' | 'instructor' | 'admin') => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">ユーザー管理</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ユーザー検索・フィルター</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="名前またはメールアドレスで検索"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="役割でフィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべての役割</SelectItem>
                  <SelectItem value="student">受講者</SelectItem>
                  <SelectItem value="instructor">講師</SelectItem>
                  <SelectItem value="admin">管理者</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="ステータスでフィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべてのステータス</SelectItem>
                  <SelectItem value="active">アクティブ</SelectItem>
                  <SelectItem value="inactive">非アクティブ</SelectItem>
                  <SelectItem value="banned">禁止</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ユーザー一覧</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>名前</TableHead>
                  <TableHead>メールアドレス</TableHead>
                  <TableHead>役割</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead>登録日</TableHead>
                  <TableHead>最終ログイン</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Select value={user.role} onValueChange={(value) => handleRoleChange(user.id, value as 'student' | 'instructor' | 'admin')}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">受講者</SelectItem>
                          <SelectItem value="instructor">講師</SelectItem>
                          <SelectItem value="admin">管理者</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Select value={user.status} onValueChange={(value) => handleStatusChange(user.id, value as 'active' | 'inactive' | 'banned')}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">アクティブ</SelectItem>
                          <SelectItem value="inactive">非アクティブ</SelectItem>
                          <SelectItem value="banned">禁止</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{format(user.createdAt, 'yyyy/MM/dd')}</TableCell>
                    <TableCell>{format(user.lastLogin, 'yyyy/MM/dd HH:mm')}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">詳細</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{user.name}の詳細情報</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                名前
                              </Label>
                              <Input id="name" value={user.name} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="email" className="text-right">
                                メールアドレス
                              </Label>
                              <Input id="email" value={user.email} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="role" className="text-right">
                                役割
                              </Label>
                              <Input id="role" value={user.role} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="status" className="text-right">
                                ステータス
                              </Label>
                              <Input id="status" value={user.status} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="createdAt" className="text-right">
                                登録日
                              </Label>
                              <Input id="createdAt" value={format(user.createdAt, 'yyyy/MM/dd')} className="col-span-3" readOnly />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="lastLogin" className="text-right">
                                最終ログイン
                              </Label>
                              <Input id="lastLogin" value={format(user.lastLogin, 'yyyy/MM/dd HH:mm')} className="col-span-3" readOnly />
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
