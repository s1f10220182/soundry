// 'use client'

// import { useState, useEffect } from 'react'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
// import { format, subHours } from 'date-fns'

// type PerformanceMetric = {
//   timestamp: Date;
//   cpuUsage: number;
//   memoryUsage: number;
//   responseTime: number;
//   activeUsers: number;
// };

// type ErrorLog = {
//   id: string;
//   timestamp: Date;
//   errorType: string;
//   message: string;
//   count: number;
// };

// export function Page() {
//   const [timeRange, setTimeRange] = useState('6hours')
//   const [performanceData, setPerformanceData] = useState<PerformanceMetric[]>([])
//   const [errorLogs, setErrorLogs] = useState<ErrorLog[]>([])

//   useEffect(() => {
//     // 実際のアプリケーションでは、ここでAPIを呼び出してデータを取得します
//     // この例では、簡単のためにランダムなデータを生成しています
//     const hours = timeRange === '1hour' ? 1 : timeRange === '6hours' ? 6 : 24
//     const newPerformanceData = Array.from({ length: hours * 12 }, (_, i) => ({
//       timestamp: subHours(new Date(), hours - i / 12),
//       cpuUsage: Math.random() * 100,
//       memoryUsage: Math.random() * 100,
//       responseTime: Math.random() * 1000,
//       activeUsers: Math.floor(Math.random() * 1000),
//     }))
//     setPerformanceData(newPerformanceData)

//     const newErrorLogs = [
//       { id: '1', timestamp: subHours(new Date(), 1), errorType: '500 Internal Server Error', message: 'データベース接続エラー', count: 5 },
//       { id: '2', timestamp: subHours(new Date(), 2), errorType: '404 Not Found', message: '存在しないページへのアクセス', count: 12 },
//       { id: '3', timestamp: subHours(new Date(), 3), errorType: '403 Forbidden', message: '不正なアクセス試行', count: 3 },
//       { id: '4', timestamp: subHours(new Date(), 4), errorType: '502 Bad Gateway', message: 'アップストリームサーバーエラー', count: 2 },
//       { id: '5', timestamp: subHours(new Date(), 5), errorType: '504 Gateway Timeout', message: 'サーバーレスポンスタイムアウト', count: 1 },
//     ]
//     setErrorLogs(newErrorLogs)
//   }, [timeRange])

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-8">パフォーマンスモニタリング</h1>
//         <div className="mb-8">
//           <Select value={timeRange} onValueChange={setTimeRange}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="期間を選択" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="1hour">過去1時間</SelectItem>
//               <SelectItem value="6hours">過去6時間</SelectItem>
//               <SelectItem value="24hours">過去24時間</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2">
//           <Card>
//             <CardHeader>
//               <CardTitle>CPU使用率</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-[200px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="timestamp" tickFormatter={(time) => format(time, 'HH:mm')} />
//                     <YAxis />
//                     <Tooltip labelFormatter={(label) => format(label, 'yyyy/MM/dd HH:mm:ss')} />
//                     <Line type="monotone" dataKey="cpuUsage" stroke="#8884d8" name="CPU使用率 (%)" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>メモリ使用率</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-[200px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="timestamp" tickFormatter={(time) => format(time, 'HH:mm')} />
//                     <YAxis />
//                     <Tooltip labelFormatter={(label) => format(label, 'yyyy/MM/dd HH:mm:ss')} />
//                     <Line type="monotone" dataKey="memoryUsage" stroke="#82ca9d" name="メモリ使用率 (%)" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>レスポンスタイム</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-[200px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="timestamp" tickFormatter={(time) => format(time, 'HH:mm')} />
//                     <YAxis />
//                     <Tooltip labelFormatter={(label) => format(label, 'yyyy/MM/dd HH:mm:ss')} />
//                     <Line type="monotone" dataKey="responseTime" stroke="#ffc658" name="レスポンスタイム (ms)" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader>
//               <CardTitle>アクティブユーザー数</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="h-[200px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="timestamp" tickFormatter={(time) => format(time, 'HH:mm')} />
//                     <YAxis />
//                     <Tooltip labelFormatter={(label) => format(label, 'yyyy/MM/dd HH:mm:ss')} />
//                     <Line type="monotone" dataKey="activeUsers" stroke="#ff7300" name="アクティブユーザー数" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//         <Card className="mt-8">
//           <CardHeader>
//             <CardTitle>エラーログ</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>タイムスタンプ</TableHead>
//                   <TableHead>エラータイプ</TableHead>
//                   <TableHead>メッセージ</TableHead>
//                   <TableHead>発生回数</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {errorLogs.map((log) => (
//                   <TableRow key={log.id}>
//                     <TableCell>{format(log.timestamp, 'yyyy/MM/dd HH:mm:ss')}</TableCell>
//                     <TableCell>{log.errorType}</TableCell>
//                     <TableCell>{log.message}</TableCell>
//                     <TableCell>{log.count}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </main>
//       <Footer />
//     </div>
//   )
// }
