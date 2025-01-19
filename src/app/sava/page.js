"use client"
import { Button } from "@/components/ui/button"
import { Shield, Zap, CheckCircle, Network, Database, Cpu, Users, ChevronDown, ShieldCheck } from 'lucide-react'
import Link from "next/link"
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AntivirusLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark text-gray-100">
      <Header /> {/* Header bileşenini ekledik */}
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
        {/* <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                SAVA Antivirüs
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg mx-auto">
                Güvenli, kullanımı kolay ve her cihazda çalışan gelişmiş antivirüs çözümü. Kısaca SAVA
              </p>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                <Link href="#pricing">
                  Hemen Başlayın
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SAVA Şifre Yöneticisi arayüzü"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section> */}
        <section className="container mx-auto py-16 px-4 md:px-6 max-w-7xl space-y-12">
          <div className="flex flex-col space-y-4 items-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Öne Çıkan Özellikler
            </h2>
            <p className="max-w-[700px] text-center text-gray-400 md:text-lg">
              Gelişmiş teknolojiyle donatılmış güvenlik çözümlerimizle kontrol
              sizde.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Gerçek Zamanlı Koruma",
                description:
                  "Bilgisayarınızı virüs ve kötü amaçlı yazılımlardan gerçek zamanlı olarak koruyun.",
                icon: <ShieldCheck className="h-10 w-10 text-customblue" />,
              },
              {
                title: "Hızlı Taramalar",
                description:
                  "Sisteminizdeki tehditleri hızlıca tespit edin ve ortadan kaldırın.",
                icon: <Zap className="h-10 w-10 text-yellow-500" />,
              },
              {
                title: "Otomatik Güncellemeler",
                description:
                  "Yazılımınızı her zaman güncel tutarak en son tehditlere karşı korunun.",
                icon: <Database className="h-10 w-10 text-purple-500" />,
              },
              {
                title: "Çoklu Cihaz Koruması",
                description:
                  "Bilgisayarlar, telefonlar ve tabletler için tek çözüm.",
                icon: <Users className="h-10 w-10 text-pink-500" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg"
              >
                <div>{feature.icon}</div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Neden SAVA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-customblue shrink-0" />
                  <h3 className="text-xl font-bold">Malware Koruması İçin Özel Çözümler</h3>
                </div>
                <p className="text-gray-400">Malware tespit ve engelleme odaklı çözümleri sayesinde, zararlı yazılımlara karşı gerçek zamanlı olarak müdahale edebiliyoruz.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Network className="h-6 w-6 text-customblue shrink-0" />
                  <h3 className="text-xl font-bold">Chain Altyapısı</h3>
                </div>
                <p className="text-gray-400">Kurumsal ve sektörel Chain ağı sayesinde anlık bilgi paylaşımı ve hızlı aksiyon alınımı.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-customblue shrink-0" />
                  <h3 className="text-xl font-bold">Sürekli Güncellenen Veritabanı</h3>
                </div>
                <p className="text-gray-400">Tehdit veritabanımız sürekli güncellenerek, en yeni virüs ve kötü amaçlı yazılımlara karşı koruma sağlar.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cpu className="h-6 w-6 text-customblue shrink-0" />
                  <h3 className="text-xl font-bold">Düşük Sistem Yükü</h3>
                </div>
                <p className="text-gray-400">Optimizasyon odaklı yazılımımız, bilgisayarınızın performansını etkilemeden çalışır.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-customblue shrink-0" />
                  <h3 className="text-xl font-bold">CTI ekipleriyle ortak çalışma</h3>
                </div>
                <p className="text-gray-400">Küresel ve ulusal çapta sizi etkileyebilecek olası olaylara gerçekleşmeden önlem alma.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Fiyatlandırma<br /><span className="text-xs text-gray-300">Fiyatlar cihaz başına yıllık ücretlendirmedir.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard title="Temel" price="Yıllık 189.99₺" features={["Temel virüs koruması", "E-posta taraması", "Otomatik güncellemeler"]} />
              <PricingCard
                title="Profesyonel"
                price="Yıllık 269.99₺"
                features={["Gelişmiş virüs koruması", "Güvenli çevrimiçi bankacılık", "7/24 destek", "Çoklu cihaz koruması"]}
                highlighted={true}
              />
              <PricingCard
                title="Kurumsal"
                price="Bizimle iletişime geçin"
                features={["Kurumsal düzeyde koruma", "Özelleştirilebilir çözümler", "Özel destek ekibi", "Chain altyapısı"]}
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Müşterilerimiz Ne Diyor?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Ayşe Y."
                role="Küçük İşletme Sahibi"
                content="SAVA sayesinde işletmemizin verilerini güvende tutabiliyorum. Kullanımı çok kolay ve müşteri desteği harika!"
              />
              <TestimonialCard
                name="Mehmet K."
                role="Yazılım Geliştirici"
                content="Diğer antivirüs programlarını denedim, ama SAVA kadar hızlı ve etkili olanını görmedim. Kesinlikle tavsiye ediyorum."
              />
              <TestimonialCard
                name="Zeynep Ö."
                role="Öğrenci"
                content="Uygun fiyatı ve güçlü koruması ile öğrenci bütçeme uygun mükemmel bir çözüm. Artık internette daha güvende hissediyorum."
              />
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              <FAQItem
                question="SAVA diğer antivirüs programlarından nasıl farklı?"
                answer="SAVA, gelişmiş blockchain altyapısı, düşük sistem yükü ve kapsamlı tehdit veritabanı ile öne çıkar. Ayrıca, 7/24 müşteri desteği ve kullanıcı dostu arayüzü ile rakiplerinden ayrılır."
              />
              <FAQItem
                question="SAVA ne anlama geliyor?"
                answer="SAVA, Siber Ağ Varlıkları Koruma kelimelerinden oluşturulmuştur."
              />
              <FAQItem
                question="SAVA bilgisayarımı yavaşlatır mı?"
                answer="Hayır, SAVA optimize edilmiş kodları sayesinde minimum sistem kaynağı kullanır. Arka planda çalışırken bile bilgisayarınızın performansını etkilemez."
              />
              <FAQItem
                question="Deneme sürümü var mı?"
                answer="Evet, 7 günlük ücretsiz deneme sürümümüz mevcuttur. Bu süre zarfında tüm premium özellikleri kullanabilir ve ürünümüzü test edebilirsiniz."
              />
            </div>
          </div>
        </section>
        <section id="security-tips" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Güvenlik İpuçları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SecurityTipCard
                title="Güçlü Şifreler Kullanın"
                content="En az 12 karakter uzunluğunda, büyük-küçük harf, rakam ve özel karakterler içeren şifreler oluşturun."
              />
              <SecurityTipCard
                title="Güncellemeleri İhmal Etmeyin"
                content="İşletim sisteminizi ve uygulamalarınızı düzenli olarak güncelleyerek güvenlik açıklarını kapatın."
              />
              <SecurityTipCard
                title="Şüpheli Bağlantılara Dikkat"
                content="Tanımadığınız kaynaklardan gelen e-posta eklerini açmayın ve şüpheli bağlantılara tıklamayın."
              />
            </div>
            {/* <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center text-customblue hover:underline">
                Daha fazla güvenlik ipucu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div> */}
          </div>
        </section>
        {/* <section id="stats" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Rakamlarla SAVA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard number="5 Sn" text="Ortalama güncelleme süresi" />
              <StatCard number="99.9%" text="Tespit Oranı" />
              <StatCard number="24/7" text="Müşteri Desteği" />
              <StatCard number="200+" text="Ülkede Kullanım" />
            </div>
          </div>
        </section> */}

        <Footer /> {/* Footer bileşenini ekledik */}

      </main>
    </div>

  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-700 rounded-lg">
      {icon}
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
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

function TestimonialCard({ name, role, content }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-600 w-12 h-12 flex items-center justify-center">
          <span className="text-xl font-bold">{name[0]}</span>
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span>{question}</span>
        <span className="transition group-open:rotate-180">
          <ChevronDown className="h-6 w-6" />
        </span>
      </summary>
      <p className="text-gray-400 mt-3 group-open:animate-fadeIn">
        {answer}
      </p>
    </details>
  )
}

function SecurityTipCard({ title, content }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  )
}

function StatCard({ number, text }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-customblue">{number}</div>
      <div className="text-gray-400 mt-2">{text}</div>
    </div>
  )
} 