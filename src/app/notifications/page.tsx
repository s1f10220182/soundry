'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bell, MessageSquare, Calendar, Gift } from "lucide-react"
import { format, subDays, subHours, subMinutes } from 'date-fns'

type Notification = {
  id: string;
  type: 'system' | 'message' | 'event' | 'promotion';
  title: string;
  content: string;
  timestamp: Date;
  read: boolean;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // In a real application, you would fetch notifications from your backend
    const mockNotifications: Notification[] = [
      {
        id: '1',
        type: 'system',
        title: 'システムメンテナンス',
        content: '明日の午前2時から4時まで、システムメンテナンスを行います。この間、サービスが一時的に利用できなくなる可能性があります。',
        timestamp: subHours(new Date(), 2),
        read: false,
      },
      {
        id: '2',
        type: 'message',
        title: '新しいメッセージ',
        content: '講師の山田先生から新しいメッセージが届いています。',
        timestamp: subMinutes(new Date(), 30),
        read: false,
      },
      {
        id: '3',
        type: 'event',
        title: 'ライブセッション開始',
        content: '「ジャズギター入門」のライブセッションが1時間後に開始します。',
        timestamp: subHours(new Date(), 1),
        read: true,
      },
      {
        id: '4',
        type: 'promotion',
        title: '期間限定割引',
        content: '夏季特別キャンペーン：全コースが20%オフ！この機会をお見逃しなく。',
        timestamp: subDays(new Date(), 1),
        read: true,
      },
    ]
    setNotifications(mockNotifications)
  }, [])

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'system':
        return <Bell className="h-5 w-5" />
      case 'message':
        return <MessageSquare className="h-5 w-5" />
      case 'event':
        return <Calendar className="h-5 w-5" />
      case 'promotion':
        return <Gift className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">通知</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">すべて</TabsTrigger>
            <TabsTrigger value="unread">未読</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>すべての通知</CardTitle>
                <CardDescription>
                  最新の通知が表示されます。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{notification.title}</h3>
                          {!notification.read && (
                            <Badge variant="destructive">新規</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {format(notification.timestamp, 'yyyy/MM/dd HH:mm')}
                        </p>
                      </div>
                      {!notification.read && (
                        <Button variant="outline" size="sm" onClick={() => markAsRead(notification.id)}>
                          既読にする
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="unread">
            <Card>
              <CardHeader>
                <CardTitle>未読の通知</CardTitle>
                <CardDescription>
                  未読の通知のみ表示されます。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.filter(n => !n.read).map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-4 p-4 bg-secondary rounded-lg">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">{notification.title}</h3>
                          <Badge variant="destructive">新規</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{notification.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {format(notification.timestamp, 'yyyy/MM/dd HH:mm')}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => markAsRead(notification.id)}>
                        既読にする
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
