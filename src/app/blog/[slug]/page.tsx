import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// import { Calendar, Clock , User} from "lucide-react"
import { Calendar, Clock } from "lucide-react"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
export default function BlogPostPage() {
  // 実際のアプリケーションでは、この情報をAPIやデータベースから取得します
  const post = {
    title: "音楽理論の基礎：初心者のためのガイド",
    slug: "music-theory-basics",
    content: `
      <p>音楽理論は、音楽の構造や要素を理解するための基礎となる知識です。初心者にとっては難しく感じるかもしれませんが、基本を理解すれば誰でも習得できます。このガイドでは、音階、和音、リズムの基礎を解説します。</p>

      <h2>1. 音階について</h2>
      <p>音階は、音楽の基本となる音の並びです。最も一般的な音階は、ドレミファソラシドの7音からなる長音階です。これらの音の間隔や関係性を理解することで、メロディーの構造や調性を把握できるようになります。</p>

      <h2>2. 和音の基礎</h2>
      <p>和音は、複数の音を同時に鳴らすことで生まれる音の組み合わせです。最も基本的な和音は、根音、三度、五度の3音で構成される三和音です。長三和音と短三和音の違いを理解することで、曲の雰囲気や感情表現の幅が広がります。</p>

      <h2>3. リズムの要素</h2>
      <p>リズムは音楽の時間的な側面を司る要素です。拍子、テンポ、シンコペーションなどの概念を学ぶことで、音楽のグルーヴや躍動感を理解し、表現できるようになります。</p>

      <p>これらの基礎を理解し、実際の音楽で応用していくことで、音楽理論の知識が深まっていきます。理論を学ぶことは、演奏技術の向上だけでなく、作曲や編曲の際にも大いに役立ちます。</p>
    `,
    author: {
      name: "山田太郎",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "音楽理論講師・作曲家"
    },
    date: "2024-03-15",
    readTime: "5分",
    tags: ["音楽理論", "初心者向け", "音階", "和音", "リズム"]
  }

  // const post = getPostBySlug(params.slug)

  // if (!post) {
  //   // 記事が見つからない場合は404ページを表示
  //   notFound()
  // }

  return (
    <div>
      <Header/>
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-primary mb-2">{post.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </div>
  )
}
