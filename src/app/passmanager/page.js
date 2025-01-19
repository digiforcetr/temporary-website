"use client"
import { Shield, Lock, Key, Smartphone, Globe, CreditCard, CheckCircle, KeyIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Header from '@/components/header/header' // Header.js bileşenini büyük harfle import ettik
import Footer from '@/components/footer/footer' // Footer.js bileşenini büyük harfle import ettik
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function PasswordManagerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-dark via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mb-20">
          <div className="grid md:grid-cols-2 place-items-center w-full">
            <div className="md:w-1/2">
              <KeyIcon className="h-72 w-72 text-customblue" />
            </div>
            <div className="md:w-2/3 mb-10 md:mb-0 justify-between items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Şifre Yöneticisi
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg">
                Güvenli, kullanımı kolay ve her cihazda çalışan gelişmiş şifre yönetim çözümü.
              </p>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                <Link href="#pricing">
                  Hemen Başlayın
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Güçlü Şifreleme", description: "256-bit AES şifreleme ile verileriniz her zaman güvende" },
              { icon: Lock, title: "Otomatik Doldurma", description: "Tek tıkla güvenli giriş yapın" },
              { icon: Key, title: "Şifre Oluşturucu", description: "Güçlü ve benzersiz şifreler oluşturun" },
              { icon: Smartphone, title: "Çoklu Cihaz Senkronizasyonu", description: "Tüm cihazlarınızda şifrelerinize erişin" },
              { icon: Globe, title: "Güvenli Not Paylaşımı", description: "Hassas bilgileri güvenle paylaşın" },
              { icon: CreditCard, title: "Kart Bilgisi Saklama", description: "Kredi kartı bilgilerinizi güvenle saklayın" },
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-customblue mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl w-2/3">
            <h2 className="text-3xl font-bold text-center mb-12">Fiyatlandırma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <PricingCard title="Temel" price="29.99 ₺" features={["Temel virüs koruması", "E-posta taraması", "Otomatik güncellemeler"]} />
              <PricingCard
                title="Kurumsal"
                price="Bizimle iletişime geçin"
                features={["Kurumsal düzeyde koruma", "Özelleştirilebilir çözümler", "Özel destek ekibi", "Chain altyapısı"]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
function PricingCard({ title, price, features, highlighted = false }) {
  const router = useRouter()
  const isLoggedIn = useUserLoginStatus()

  const handlePurchase = () => {
    if (isLoggedIn) {
      router.push('/contact')
    } else {
      router.push('/login')
    }
  }

  return (
    <div className={`flex flex-col p-6 bg-gray-700 rounded-lg ${highlighted ? 'ring-2 ring-red-500' : ''}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 text-4xl font-bold">{price.startsWith('$') ? price : `${price}`}<span className="text-xl font-normal">{price.startsWith('$') ? '/ay' : ''}</span></div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-customblue mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`mt-6 ${highlighted ? 'bg-blue-500 text-white' : 'bg-gray-600 text-white'}`}
        onClick={handlePurchase}
      >
        {price === "Bizimle İletişime Geçin" ? "İletişime Geçin" : "Şimdi Satın Al"}
      </Button>
    </div>
  )
}

function useUserLoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginCookie = () => {
      // This is a simple check. In a real app, you'd want to validate the cookie securely.
      return document.cookie.includes('user_login=true')
    }
    setIsLoggedIn(checkLoginCookie())
  }, [])

  return isLoggedIn
}
