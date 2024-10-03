'use client'

import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"

export function Page() {
  const { data: session } = useSession()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
      {session?.user.role === 'ADMIN' && (
        <Button asChild>
          <a href="/admin">管理画面へ</a>
        </Button>
      )}
      {(session?.user.role === 'INSTRUCTOR' || session?.user.role === 'ADMIN') && (
        <Button asChild className="ml-4">
          <a href="/instructor/courses">コース管理</a>
        </Button>
      )}
      {/* 他のダッシュボードコンテンツ */}
    </div>
  )
}