// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import PreviewComponent from '@/components/PreviewComponent'

// export default function Home() {
//   return <PreviewComponent />
// }
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search,  Mic2, BookOpen, Users } from "lucide-react"
import Link from 'next/link'
import Header from '@/components/Header'

export default function HomePage() {
  // あなたが提供したホームページのコードをここに貼り付けます
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <main className="flex-grow">
        <section className="py-20 px-6 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">音楽の世界へようこそ</h2>
            <p className="text-xl mb-8">プロの講師陣による高品質なオンライン音楽レッスンで、あなたの音楽スキルを磨きましょう。</p>
            <div className="flex justify-center">
              <Input className="w-64 mr-2" placeholder="学びたい楽器や技術は？" />
              <Button>
                <Search className="mr-2 h-4 w-4" /> 検索
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <h3 className="text-2xl font-bold mb-8 text-center">人気のコース</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {['ギター入門', 'ボーカルテクニック', 'ピアノマスター'].map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{course}</CardTitle>
                  <CardDescription>初心者から上級者まで</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={`/placeholder.svg?height=200&width=400`} alt={course} className="rounded-md mb-4" />
                  <p className="text-sm text-muted-foreground">20レッスン・10時間の動画</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">コースの詳細</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 bg-muted">
          <h3 className="text-2xl font-bold mb-8 text-center">Soundryの特徴</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Mic2 className="h-10 w-10" />, title: 'プロの講師陣', description: '業界で活躍する一流ミュージシャンから学べます' },
              { icon: <BookOpen className="h-10 w-10" />, title: '豊富なコンテンツ', description: '初心者から上級者まで、幅広いレベルに対応' },
              { icon: <Users className="h-10 w-10" />, title: 'コミュニティ', description: '同じ目標を持つ仲間と交流し、モチベーションを高めよう' },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {feature.icon}
                <h4 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

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
              <li><Link href="#" className="text-muted-foreground hover:text-primary">ヘルプセンター</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">利用規約</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">コミュニティ</h5>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">ブログ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">フォーラム</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">イベント</Link></li>
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
    </div>
  )
}
