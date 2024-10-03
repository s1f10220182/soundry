'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { format, subDays } from 'date-fns'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function AnalyticsDashboardPage() {
  const [timeRange, setTimeRange] = useState('30days')

  // ユーザー登録データ
  const [userRegistrations, setUserRegistrations] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      date: format(subDays(new Date(), 29 - i), 'MM/dd'),
      count: Math.floor(Math.random() * 50) + 10,
    }))
  )

  // コース登録データ
  const [courseEnrollments, setCourseEnrollments] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      date: format(subDays(new Date(), 29 - i), 'MM/dd'),
      count: Math.floor(Math.random() * 100) + 20,
    }))
  )

  // 売上データ
  const [revenue, setRevenue] = useState(
    Array.from({ length: 30 }, (_, i) => ({
      date: format(subDays(new Date(), 29 - i), 'MM/dd'),
      amount: Math.floor(Math.random() * 100000) + 50000,
    }))
  )

  // カテゴリ別コース数
  const [coursesByCategory, setCoursesByCategory] = useState([
    { name: '音楽', value: 120 },
    { name: '言語', value: 80 },
    { name: 'プログラミング', value: 100 },
    { name: 'ビジネス', value: 60 },
    { name: 'デザイン', value: 40 },
  ])

  // 人気コースTop 5
  const [topCourses, setTopCourses] = useState([
    { name: 'ギター入門', enrollments: 1200 },
    { name: '英会話マスター', enrollments: 980 },
    { name: 'Webデザイン基礎', enrollments: 850 },
    { name: 'データサイエンス入門', enrollments: 720 },
    { name: 'マーケティング戦略', enrollments: 650 },
  ])

  const updateData = (range: string) => {
    setTimeRange(range)
    // 実際のアプリケーションでは、ここでAPIを呼び出してデータを更新します
    // この例では、簡単のためにランダムなデータを生成しています
    const days = range === '7days' ? 7 : range === '30days' ? 30 : 90
    setUserRegistrations(
      Array.from({ length: days }, (_, i) => ({
        date: format(subDays(new Date(), days - 1 - i), 'MM/dd'),
        count: Math.floor(Math.random() * 50) + 10,
      }))
    )
    setCourseEnrollments(
      Array.from({ length: days }, (_, i) => ({
        date: format(subDays(new Date(), days - 1 - i), 'MM/dd'),
        count: Math.floor(Math.random() * 100) + 20,
      }))
    )
    setRevenue(
      Array.from({ length: days }, (_, i) => ({
        date: format(subDays(new Date(), days - 1 - i), 'MM/dd'),
        amount: Math.floor(Math.random() * 100000) + 50000,
      }))
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">分析ダッシュボード</h1>
        <div className="mb-8">
          <Select value={timeRange} onValueChange={updateData}>
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>新規ユーザー登録</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userRegistrations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>コース登録数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={courseEnrollments}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>売上</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>カテゴリ別コース数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={coursesByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {coursesByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>人気コースTop 5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topCourses}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="enrollments" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
