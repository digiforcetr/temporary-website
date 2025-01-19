'use client'

import Link from 'next/link'
import { Send, MapPin, Phone, Mail, Linkedin, MailIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik

// const contactInfo = [
//   {
//     icon: MapPin,
//     text: (
//       <>
//         DigiForce Teknoloji A.Ş.<br />
//         Maslak Mah. Büyükdere Cad. No:255<br />
//         Nurol Plaza B02 34398<br />
//         Sarıyer/İstanbul, Türkiye
//       </>
//     ),
//   },
//   {
//     icon: Phone,
//     text: '+90 (212) 555 0123',
//   },
//   {
//     icon: Mail,
//     text: 'info@digiforce.com',
//   },
// ]

const contactInfo = [
  {
    icon: Linkedin,
    text: (
      <>
        <a href="https://www.linkedin.com/company/digiforcetr" alt="digiforcetr">LinkedIn/digiforcetr</a>
      </>
    ),
  },
  {
    icon: MailIcon,
    text: (
      <>
        <a href="mailto:digiforce.contact@gmail.com" alt="digiforcetr">digiforce.contact@gmail.com</a>
      </>
    ),
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Header /> {/* Header bileşenini ekledik */}

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-4xl space-y-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Send className="w-6 h-6 text-customblue" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Bize Ulaşın</h2>
            <p className="mt-2 text-gray-400 text-center">
              {/* Sorularınız veya geri bildirimleriniz için formu doldurun veya doğrudan bize ulaşın */}
              Sorularınız veya geri bildirimleriniz için ulaşın
            </p>
          </div>
          <div className="grid place-items-center">
            <div className="gap-8 w-full md:w-1/2 text-center">
              <Card className="bg-[#1a2332] border-[#2a3442]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">İletişim Bilgileri</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <info.icon className="w-5 h-5 text-customblue mr-3 mt-1" />
                        <p className="text-gray-300">{info.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1a2332] border-[#2a3442]">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <info.icon className="w-5 h-5 text-customblue mr-3 mt-1" />
                      <p className="text-gray-300">{info.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Adınız
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="mt-1 bg-[#1a2332] border-[#2a3442] text-white placeholder:text-gray-500"
                  required
                />
              </div>

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

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın..."
                  className="mt-1 bg-[#1a2332] border-[#2a3442] text-white placeholder:text-gray-500"
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Mesaj Gönder
              </Button>
            </form>
          </div>*/}
        </div>
      </main>

      <Footer /> {/* Footer bileşenini ekledik */}
    </div>
  )
}
