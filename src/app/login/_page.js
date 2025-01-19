'use client'

import Link from "next/link"
import { Lock, AlertCircle } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik

export default function LoginPage() {
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    // Add your login logic here
    setError("");
  }

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Header /> {/* Header bileşenini ekledik */}


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Lock className="h-8 w-8 text-customblue" />
              </div>
            </div>
            <h1 className="mt-4 text-2xl font-bold">Hesabınıza Giriş Yapın</h1>
            <p className="mt-2 text-gray-400">
              Güvenli dijital dünyaya hoş geldiniz
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-posta Adresi</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                required
                className="bg-gray-800 border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                type="password"
                required
                className="bg-gray-800 border-gray-700"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Beni hatırla
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-customblue hover:text-red-400"
              >
                Şifremi unuttum
              </Link>
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Giriş Yap
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400">
            Hesabınız yok mu?{" "}
            <Link href="#" className="text-customblue hover:text-red-400">
              Hemen kaydolun
            </Link>
          </p>
        </div>
      </main>

      <Footer /> {/* Footer bileşenini ekledik */}
    </div>
  )
}
