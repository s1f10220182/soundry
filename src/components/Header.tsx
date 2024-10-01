// components/Header.tsx

import Link from 'next/link'
import { Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-background border-b">
    <div className="flex items-center space-x-4">
      <Music className="h-6 w-6 text-primary" />
      <Link href="/" className="text-2xl font-bold text-primary">Soundry</Link>
    </div>
    <nav className="hidden md:flex space-x-4">
      <Link href="/courses" className="text-muted-foreground hover:text-primary">コース</Link>
      <Link href="/instructors" className="text-muted-foreground hover:text-primary">講師</Link>
      <Link href="/blog" className="text-muted-foreground hover:text-primary">ブログ</Link>
    </nav>
    <div className="flex items-center space-x-4">
      <Button variant="outline" asChild>
        <Link href="/login">ログイン</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">無料で始める</Link>
      </Button>
    </div>
  </header>
)

export default Header
