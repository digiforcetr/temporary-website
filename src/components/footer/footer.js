'use client'

// Footer.js

import Link from 'next/link';
import { XIcon, Linkedin } from 'lucide-react';
const footer = () => {
    return (
        <footer className="w-full py-6 bg-dark-800">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid md:justify-items-center grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Ürünler</h3>
                        <ul className="space-y-2">
                            <li><Link href="/sava" className="text-gray-400 hover:text-white">SAVA Antivirüs</Link></li>
                            <li><Link href="/passmanager" className="text-gray-400 hover:text-white">Şifre Yöneticisi Ürünü</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Şirket</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
                            <li><Link href="/join_us" className="text-gray-400 hover:text-white">Kariyer</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">İletişim</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
                        <div className="flex space-x-4">
                            <Link href="https://x.com/digiforcetr" className="text-gray-400 hover:text-white">
                                <span className="sr-only">X</span>
                                {/* <XIcon className="h-6 w-6 text-white hover:text-blue-500" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill='#ffffff' shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 462.799"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" /></svg>
                            </Link>

                            <Link href="https://www.linkedin.com/company/digiforcetr" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6 text-white hover:text-blue-500" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-gray-400">© 2024 DigiForce. Tüm hakları saklıdır.</p>
                    <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                        <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                            Gizlilik Politikası
                        </Link>
                        <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                            Kullanım Şartları
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default footer;
