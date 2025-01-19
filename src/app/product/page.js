'use client'

import Link from 'next/link'
import { Shield, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const products = [
  {
    id: 1,
    name: 'SAVA Antivirus',
    description: 'Bireysel ve kurumsal kullanıcılar için Malware tespit odaklı, yenilikçi antivirüs sistemi.',
    icon: Shield,
    url: '/sava', // SAVA Antivirus için özel URL
  },
  {
    id: 2,
    name: 'Password ',
    description: 'Güvenli şifre yönetimi ve saklama hizmeti. Şifrelerinizi güvenle saklayın.',
    icon: Lock,
    url: '/passmanager', // Password Manager için özel URL
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">Ürünlerimiz ve Hizmetlerimiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => {
              const ProductIcon = product.icon
              return (
                <Card key={product.id} className="bg-[#1a2332] border-[#2a3442]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <ProductIcon className="w-6 h-6 text-customblue" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{product.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Link href={product.url} className="text-customblue hover:text-white">
                      <Button variant="outline" className="border-blue-500 text-customblue hover:bg-blue-500 hover:text-white">
                        Detaylar
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
