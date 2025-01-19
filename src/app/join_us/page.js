"use client"
import { Rocket, Users, Shield, Zap } from 'lucide-react'
import JoinUsForm from '@/components/ui/JoinUsForm'
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-dark via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Neden DigiForce Teknoloji?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: "Hızlı Büyüme", description: "Dinamik ortamımızda kariyerinizi hızlandırın" },
              { icon: Users, title: "İnovatif Ekip", description: "Yaratıcı ve tutkulu profesyonellerle çalışın" },
              { icon: Shield, title: "Öncü Teknolojiler", description: "En son siber güvenlik teknolojilerini kullanın" },
              { icon: Zap, title: "Etki Yaratın", description: "Dijital dünyayı daha güvenli hale getirin" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <item.icon className="h-12 w-12 text-customblue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section id="join-form" className="scroll-mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Bize Katılın</h2>
          <JoinUsForm />
        </section>
        <Footer />
      </main>
    </div>
  )
}

