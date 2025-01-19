'use client'

import Link from 'next/link'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik
export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Header /> {/* Header bileşenini ekledik */}

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-customblue" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Şifrenizi mi unuttunuz?</h2>
            <p className="mt-2 text-gray-400 text-center">
              E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-posta Adresi
              </label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                className="mt-1 bg-[#1a2332] border-[#2a3442] text-white placeholder:text-gray-500"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Sıfırlama Bağlantısı Gönder
            </Button>
          </form>

          <div className="text-center">
            <Link 
              // href="#" 
              href="#"
              className="text-customblue hover:text-red-400 text-sm"
            >
              Giriş sayfasına dön
            </Link>
          </div>
        </div>
      </main>

      <Footer /> {/* Footer bileşenini ekledik */}
    </div>
  )
}

