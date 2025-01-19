import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DigiForce | Kusursuz Güvenlik"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-12 w-full flex items-center justify-center bg-[#F77500] text-white">
          <p>digiforce.com.tr şuan geliştirme aşamasındadır, beta testlerimize katılarak ürünlerimizi test etmek için iletişime geçin. <Link href={"https://linkedin.com/company/digiforcetr"} target="_blank" className="font-semibold">LinkedIn: DigiForce</Link></p>
        </div>
        {children}
      </body>
    </html>
  );
}
