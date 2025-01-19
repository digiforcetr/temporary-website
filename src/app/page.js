'use client'

import { Button } from "@/components/ui/button"
import { Users, Rocket, Target } from 'lucide-react'
import Link from "next/link"
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik

export default function YeniKurulanSirketLandingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-dark text-gray-100">
      <Header />
      <main className="flex-1">
        <>
          <div>

            <section className="relative py-12 overflow-hidden bg-dark sm:pb-16 lg:pb-20 xl:pb-24">
              <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <svg className="blur-3xl filter opacity-70" filter="blur(64px)" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z" fill="url(#c)" />
                        <defs>
                          <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#00BCD4" />
                            <stop offset="100%" stopColor="#9C27B0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="absolute inset-0">
                      <img className="object-cover md:w-full w-1/2 h-full opacity-50" src="/noise.png" alt="" />
                    </div>

                    <img className="relative md:w-full w-1/2 max-w-md mx-auto" src="/shield.png" alt="" />
                  </div>

                  <div>
                    <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"><b>SAVA:</b> Kusursuz Güvenlik</h1>
                    <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Güvenlikte yeni bir standart belirliyoruz. SAVA ile sistemlerinizi koruyun, veri güvenliğini en üst düzeye çıkarın ve tehditlere karşı her zaman bir adım önde olun!</p>

                    <div className="relative mt-8 rounded-full sm:mt-12">
                      <Link href="/sava">
                        <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Ücretsiz Deneyin</button>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </>


        <section id="hakkimizda" className="w-full py-12 md:py-24 lg:py-32 bg-dark-800">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Hakkımızda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-gray-700 rounded-lg">
                <h3 className="text-xl font-bold">Kuruluş Hikayemiz</h3>
                <p className="text-gray-400">Digiforce, bir siber güvenlik uzmanı ve bir yazılımcı öğrencisi tarafından kuruldu. Amacımız, tekil ve kurumsal kullanıcılar için antivirüs sistemleri başta olmak üzere onların güvenliklerine katkı sağlamaktır.</p>
              </div>
              <div className="space-y-4 p-6 bg-gray-700 rounded-lg">
                <h3 className="text-xl font-bold">Misyonumuz</h3>
                <p className="text-gray-400">Dijital dünyayı daha güvenli hale getirmek için çalışıyoruz. Her büyüklükteki işletme ve bireylere, en son teknolojiye sahip, kullanıcı dostu siber güvenlik çözümleri sunmayı hedefliyoruz.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="hedeflerimiz" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Hedeflerimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <HedefCard
                icon={<Rocket className="h-10 w-10 text-customblue" />}
                baslik="Ürün Geliştirme"
                aciklama="Sunduğumuz ürün ve hizmet sayısını ve kalitesini arttırmak"
              />
              <HedefCard
                icon={<Users className="h-10 w-10 text-customblue" />}
                baslik="Ekip Büyütme"
                aciklama="Siber güvenlik alanında tecrübeli kişiler ile ekibimizi genişletmek"
              />
              <HedefCard
                icon={<Target className="h-10 w-10 text-customblue" />}
                baslik="Pazarlama ve Satış"
                aciklama="Ürünlerimizi daha geniş kitlelere ulaştırmak"
              />
            </div>
          </div>
        </section>

        <section id="ekibimiz" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Kurucu Ekibimiz</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <EkipUyesiCard
                isim="Abdullah Ahmet Durmaz"
                pozisyon="Kurucu Ortak"
              />
              <EkipUyesiCard
                isim="Barış Azar"
                pozisyon="Kurucu Ortak"
              />
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold">Geleceğin Güvenliğini Birlikte İnşa Edelim</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Yeni kurulan şirketimizle siber güvenlik alanında devrim yaratmaya hazırız. Siz de bu yolculuğun bir parçası olmak ister misiniz?
              </p>
              <Link href="/join_us">
                <Button className="bg-blue-500 text-white hover:bg-blue-600">Bize Katılın</Button>

              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function HedefCard({ icon, baslik, aciklama }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
      {icon}
      <h3 className="text-xl font-bold mt-4">{baslik}</h3>
      <p className="mt-2 text-gray-400">{aciklama}</p>
    </div>
  )
}

function EkipUyesiCard({ isim, pozisyon, aciklama }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
      <div className="w-24 h-24 bg-gray-600 rounded-full mb-4"></div>
      <h3 className="text-xl font-bold">{isim}</h3>
      <p className="text-customblue font-semibold">{pozisyon}</p>
      <p className="mt-2 text-gray-400">{aciklama}</p>
    </div>
  )
}

