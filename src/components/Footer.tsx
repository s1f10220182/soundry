
import Link from 'next/link'

const Footer = () => (
<footer className="bg-background border-t py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-semibold mb-4">Soundryについて</h5>
            <ul className="space-y-2">
              <li><Link href="/company" className="text-muted-foreground hover:text-primary">会社概要</Link></li>
              <li><Link href="/become-instructor" className="text-muted-foreground hover:text-primary">講師になる</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">採用情報</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">サポート</h5>
            <ul className="space-y-2">
              <li><Link href="/help-center" className="text-muted-foreground hover:text-primary">ヘルプセンター</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">利用規約</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">コミュニティ</h5>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">ブログ</Link></li>
              <li><Link href="/forum" className="text-muted-foreground hover:text-primary">フォーラム</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary">イベント</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">ソーシャルメディア</h5>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Soundry. All rights reserved.</p>
        </div>
      </footer>
)

export default Footer
