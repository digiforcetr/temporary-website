'use client'

import Link from 'next/link'
import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Header from '@/components/header/header' // Header bileşenini import ettik
import Footer from '@/components/footer/footer' // Footer bileşenini import ettik
export default function FAQPage() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Header /> {/* Header bileşenini ekledik */}

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-3xl space-y-8">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-customblue" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Sıkça Sorulan Sorular</h2>
            <p className="mt-2 text-gray-400 text-center">
              DigiForce hakkında en çok sorulan sorular ve cevapları
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>DigiForce nedir?</AccordionTrigger>
              <AccordionContent>
                DigiForce, işletmelere dijital dönüşüm süreçlerinde yardımcı olan yenilikçi bir teknoloji şirketidir. Yapay zeka, bulut bilişim ve siber güvenlik alanlarında çözümler sunuyoruz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Hangi hizmetleri sunuyorsunuz?</AccordionTrigger>
              <AccordionContent>
                Yapay zeka entegrasyonu, bulut altyapı yönetimi, siber güvenlik danışmanlığı, veri analizi ve dijital strateji geliştirme gibi geniş bir yelpazede hizmetler sunuyoruz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>DigiForce'u neden tercih etmeliyim?</AccordionTrigger>
              <AccordionContent>
                Uzman ekibimiz, yenilikçi çözümlerimiz ve müşteri odaklı yaklaşımımızla işletmenizin dijital dönüşümünü hızlandırıyor ve rekabet avantajı sağlıyoruz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Nasıl başvuru yapabilirim?</AccordionTrigger>
              <AccordionContent>
                İletişim sayfamızdan bize ulaşabilir veya doğrudan satış ekibimizle görüşmek için 0212 555 0123 numaralı telefonu arayabilirsiniz. Size özel çözümler için detaylı bir görüşme planlarız.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Hizmetlerinizin fiyatları nedir?</AccordionTrigger>
              <AccordionContent>
                Fiyatlarımız, işletmenizin ihtiyaçlarına ve projenin kapsamına göre değişiklik gösterir. Size özel bir teklif hazırlamak için iletişime geçmenizi öneririz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer /> {/* Footer bileşenini ekledik */}

    </div>
  )
}

