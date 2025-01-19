"use client"
import Link from 'next/link';
import { Target, MessageCircle, HelpCircle, CreditCard, Menu } from 'lucide-react'; // ya da kullandığınız ikon kütüphanesinden
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'; // Burayı ihtiyacınıza göre düzenleyin

export function NavDropdown() {
  return (
    <nav className="ml-auto flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:gap-6">
        <Link className="text-sm font-medium hover:text-gray-400  flex items-center gap-2" href="/product">
          <Target className="h-5 w-5" />
          Ürünler
        </Link>
        <Link className="text-sm font-medium hover:text-gray-400  flex items-center gap-2" href="/contact">
          <MessageCircle className="h-5 w-5" />
          İletişim
        </Link>
        <Link className="text-sm font-medium hover:text-gray-400  flex items-center gap-2" href="/faq">
          <HelpCircle className="h-5 w-5" />
          SSS
        </Link>
        <Link className="text-sm font-medium hover:text-gray-400  flex items-center gap-2" href="/login">
          <CreditCard className="h-5 w-5" />
          Giriş
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium text-white px-4 py-2 rounded-md">
            <Menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 text-white border border-gray-700 mt-2">
            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 flex items-center gap-2">
              <Target className="h-5 w-5" />
              <Link href="/product" className="w-full">Ürünler</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <Link href="/contact" className="w-full">İletişim</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <Link href="/faq" className="w-full">SSS</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <Link href="/login" className="w-full">Giriş</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
