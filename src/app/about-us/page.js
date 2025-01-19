"use client"
import { Shield, Users, Rocket, Target, Award } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik


export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-dark via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                DigiForce Hakkında
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg">
                Siber güvenlik dünyasında öncü, yenilikçi ve güvenilir çözümler sunan genç bir şirketiz.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SAVA Teknoloji ekibi"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Biz Kimiz?</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            DigiForce, bir siber güvenlik uzmanı ve bir yazılımcı öğrencisi tarafından kuruldu. Amacımız, tekil ve kurumsal kullanıcılar için antivirüs sistemleri başta olmak üzere onların güvenliklerine katkı sağlamaktır.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-customblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Misyonumuz</h3>
            <p className="text-gray-400">Her büyüklükteki işletme ve bireylere, en son teknolojiye sahip, kullanıcı dostu siber güvenlik çözümleri sunmak.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-12 w-12 text-customblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vizyonumuz</h3>
            <p className="text-gray-400">Siber güvenlik alanında global bir lider olmak ve dijital dünyanın güvenliğine öncülük etmek.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-12 w-12 text-customblue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Değerlerimiz</h3>
            <p className="text-gray-400">Yenilikçilik, güvenilirlik, müşteri odaklılık ve sürekli gelişim bizim temel değerlerimizdir.</p>
          </div>
        </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { name: "Abdullah Ahmet Durmaz", role: "Kurucu Ortak", },
              { name: "Barış Azar", role: "Kurucu Ortak" },
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-customblue mb-2">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Bize Katılın</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            SAVA Teknoloji olarak her zaman yetenekli ve tutkulu profesyonelleri arıyoruz. Eğer siz de siber güvenlik dünyasında fark yaratmak istiyorsanız, sizleri aramızda görmekten mutluluk duyarız.
          </p>
          <Link href="/join_us">
          <Button className="bg-blue-500 text-white hover:bg-blue-600">Bize Katılın</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

