'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"
import { QrCode, Smartphone, Mail } from "lucide-react"

export default function TwoFactorAuthPage() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<'app' | 'sms' | 'email'>('app')
  const [verificationCode, setVerificationCode] = useState('')

  const handleEnable2FA = () => {
    // In a real application, this would trigger the 2FA setup process
    setIs2FAEnabled(true)
    toast({
      title: "2段階認証が有効になりました",
      description: "アカウントのセキュリティが強化されました。",
    })
  }

  const handleDisable2FA = () => {
    // In a real application, this would require additional confirmation
    setIs2FAEnabled(false)
    toast({
      title: "2段階認証が無効になりました",
      description: "アカウントのセキュリティレベルが変更されました。",
    })
  }

  const handleVerify = () => {
    // In a real application, this would verify the entered code
    if (verificationCode === '123456') {  // This is just for demonstration
      toast({
        title: "認証成功",
        description: "2段階認証の設定が完了しました。",
      })
    } else {
      toast({
        title: "認証失敗",
        description: "正しい認証コードを入力してください。",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">2段階認証設定</h1>
        <Card>
          <CardHeader>
            <CardTitle>2段階認証</CardTitle>
            <CardDescription>
              2段階認証を設定して、アカウントのセキュリティを強化します。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="2fa-toggle">2段階認証を有効にする</Label>
                <p className="text-sm text-muted-foreground">
                  ログイン時に追加の認証ステップが必要になります。
                </p>
              </div>
              <Switch
                id="2fa-toggle"
                checked={is2FAEnabled}
                onCheckedChange={(checked) => checked ? handleEnable2FA() : handleDisable2FA()}
              />
            </div>
            {is2FAEnabled && (
              <>
                <div className="space-y-4">
                  <Label>認証方法を選択</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant={selectedMethod === 'app' ? 'default' : 'outline'}
                      className="flex flex-col items-center justify-center h-24"
                      onClick={() => setSelectedMethod('app')}
                    >
                      <QrCode className="h-8 w-8 mb-2" />
                      認証アプリ
                    </Button>
                    <Button
                      variant={selectedMethod === 'sms' ? 'default' : 'outline'}
                      className="flex flex-col items-center justify-center h-24"
                      onClick={() => setSelectedMethod('sms')}
                    >
                      <Smartphone className="h-8 w-8 mb-2" />
                      SMS
                    </Button>
                    <Button
                      variant={selectedMethod === 'email' ? 'default' : 'outline'}
                      className="flex flex-col items-center justify-center h-24"
                      onClick={() => setSelectedMethod('email')}
                    >
                      <Mail className="h-8 w-8 mb-2" />
                      メール
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="verification-code">認証コード</Label>
                  <Input
                    id="verification-code"
                    placeholder="6桁のコードを入力"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            {is2FAEnabled && (
              <Button onClick={handleVerify}>認証コードを確認</Button>
            )}
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
