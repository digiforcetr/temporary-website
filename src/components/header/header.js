'use client'

import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="py-4 bg-dark sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="shrink-0">
              <a href="/" title="" className="flex items-center align-middle">
                <img className="w-auto h-9 mr-2" src="\logo.png" alt="" />
                <span className="text-white font-bold text-xl">DigiForce</span>
              </a>
            </div>

            <div className="flex justify-end md:hidden">
              <button type="button" className="text-white" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                <span style={{ display: !expanded ? 'block' : 'none' }} aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </span>

                <span style={{ display: expanded ? 'block' : 'none' }} aria-hidden="true">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a href="/product" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Ürünler </a>
              <a href="/faq" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> SSS </a>
              <a href="/contact" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> İletişim </a>
              {/* <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Giriş </a> */}
            </nav>

            <div className="col-span-1 grid justify-items-end">
              <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a href="sava" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-dark border border-transparent rounded-full" role="button"> Ücretsiz Deneyin </a>
              </div>
            </div>
          </div>

          {expanded && (
            <nav className="md:hidden">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="/product" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Ürünler </a>
                <a href="/faq" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> SSS </a>
                <a href="/contact" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> İletişim </a>
                {/* <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a> */}
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a href="sava" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-dark border border-transparent rounded-full" role="button"> Ücretsiz Deneyin </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </>

  );
};

export default Header;
