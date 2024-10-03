'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [experience, setExperience] = useState('')
  const [goals, setGoals] = useState<string[]>([])

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Here you would typically send the onboarding data to your backend
      console.log({ userType, interests, experience, goals })
      toast({
        title: "オンボーディングが完了しました",
        description: "Soundryへようこそ！あなたに合わせたコンテンツをお楽しみください。",
      })
      router.push('/dashboard')
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Soundryへようこそ</h1>
        <Card>
          <CardHeader>
            <CardTitle>ステップ {step} / 4</CardTitle>
            <CardDescription>
              あなたに最適な学習体験を提供するために、いくつかの質問にお答えください。
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">あなたは主にどのようなユーザーですか？</h2>
                <RadioGroup value={userType} onValueChange={setUserType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">学習者</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="instructor" id="instructor" />
                    <Label htmlFor="instructor">講師</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">両方</Label>
                  </div>
                </RadioGroup>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">興味のある分野を選択してください（複数選択可）</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['ギター', 'ピアノ', 'ドラム', 'ボーカル', '作曲', '音楽理論', '録音技術', 'DJ'].map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox
                        id={interest}
                        checked={interests.includes(interest)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setInterests([...interests, interest])
                          } else {
                            setInterests(interests.filter((i) => i !== interest))
                          }
                        }}
                      />
                      <Label htmlFor={interest}>{interest}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">音楽経験のレベルを教えてください</h2>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="経験レベルを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">初心者</SelectItem>
                    <SelectItem value="intermediate">中級者</SelectItem>
                    <SelectItem value="advanced">上級者</SelectItem>
                    <SelectItem value="professional">プロフェッショナル</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Soundryでの目標を教えてください（複数選択可）</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['新しいスキルの習得', '既存のスキルの向上', '資格の取得', '趣味の探求', 'キャリアアップ', 'ネットワーキング'].map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={goals.includes(goal)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setGoals([...goals, goal])
                          } else {
                            setGoals(goals.filter((g) => g !== goal))
                          }
                        }}
                      />
                      <Label htmlFor={goal}>{goal}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleBack} disabled={step === 1}>戻る</Button>
            <Button onClick={handleNext}>{step === 4 ? '完了' : '次へ'}</Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
