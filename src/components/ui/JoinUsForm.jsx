'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, MailIcon } from 'lucide-react'

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: ''
  })
  const [fileName, setFileName] = useState ('Dosya seçilmedi')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Dosya boyutu 5MB\'dan küçük olmalıdır.')
        e.target.value = ''
        setFileName('Dosya seçilmedi')
      } else {
        setFileName(file.name)
      }
    } else {
      setFileName('Dosya seçilmedi')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    console.log('File:', fileName)
    setFormData({ name: '', email: '', position: '', message: '' })
    setFileName('Dosya seçilmedi')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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

  return (
    <div className="grid place-items-center">
      <div className="gap-8 md:w-1/2 text-center">
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
    // <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700 shadow-2xl">
    //   <CardContent className="p-6">
    //     {isSubmitted ? (
    //       <div className="text-center py-10">
    //         <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
    //         <h3 className="text-2xl font-bold mb-2">Başvurunuz Alındı!</h3>
    //         <p className="text-gray-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
    //       </div>
    //     ) : (
    //       <form onSubmit={handleSubmit} className="space-y-6">
    //         <div className="space-y-2">
    //           <Label htmlFor="name">Ad Soyad</Label>
    //           <Input
    //             id="name"
    //             name="name"
    //             placeholder="Adınız Soyadınız"
    //             value={formData.name}
    //             onChange={handleInputChange}
    //             required
    //             className="bg-gray-700 border-gray-600 focus:border-blue-500"
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="email">E-posta</Label>
    //           <Input
    //             id="email"
    //             name="email"
    //             placeholder="ornek@email.com"
    //             type="email"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //             className="bg-gray-700 border-gray-600 focus:border-blue-500"
    //           />
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="position">İlgilendiğiniz Pozisyon</Label>
    //           <div className="relative">
    //             <select
    //               id="position"
    //               name="position"
    //               value={formData.position}
    //               onChange={handleInputChange}
    //               className="w-full bg-gray-700 border-gray-600 text-white py-2 px-3 pr-8 rounded focus:outline-none focus:border-blue-500 appearance-none"
    //               required
    //             >
    //               <option value="" disabled>Pozisyon seçin</option>
    //               <option value="developer">Yazılım Geliştirici</option>
    //               <option value="data-scientist">Veri Bilimci</option>
    //               <option value="security-analyst">Güvenlik Analisti</option>
    //               <option value="product-manager">Ürün Yöneticisi</option>
    //               <option value="other">Diğer</option>
    //             </select>
    //             <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-400" />
    //           </div>
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="cv">CV / Özgeçmiş</Label>
    //           <div className="flex items-center space-x-2">
    //             <label htmlFor="cv" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors flex items-center">
    //               <Upload className="w-4 h-4 mr-2" />
    //               Dosya Seç
    //             </label>
    //             <input
    //               type="file"
    //               id="cv"
    //               className="hidden"
    //               accept=".pdf,.doc,.docx"
    //               onChange={handleFileChange}
    //             />
    //             <span className="text-sm text-gray-400">{fileName}</span>
    //           </div>
    //           <p className="text-xs text-gray-500">Maksimum dosya boyutu: 5MB. Kabul edilen formatlar: PDF, DOC, DOCX</p>
    //         </div>
    //         <div className="space-y-2">
    //           <Label htmlFor="message">Mesajınız</Label>
    //           <Textarea
    //             id="message"
    //             name="message"
    //             placeholder="Neden SAVA Teknoloji'ye katılmak istiyorsunuz?"
    //             value={formData.message}
    //             onChange={handleInputChange}
    //             required
    //             className="bg-gray-700 border-gray-600 focus:border-blue-500"
    //           />
    //         </div>
    //         <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
    //           Başvuruyu Gönder
    //         </Button>
    //       </form>
    //     )}
    //   </CardContent>
    // </Card>
  )
}

