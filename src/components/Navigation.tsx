'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className={`${isHomePage ? 'bg-transparent shadow-none absolute' : 'bg-white shadow-md relative'} top-0 left-0 right-0 z-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Section - Only show full version on home page */}
        {isHomePage ? (
          <div className="relative py-4 border-b border-white/20">
            {/* Mobile Layout */}
            <div className="block md:hidden text-center">
              <div className="mb-4">
                <Image
                  src="/logoImage.png"
                  alt="Divine Healing Therapy Logo"
                  width={120}
                  height={120}
                  className="object-contain mx-auto"
                />
              </div>
              <Link href="/" className="inline-block">
                <h1 className="text-4xl font-bold text-white hover:text-white/80 transition-colors tracking-wide drop-shadow-lg">
                  Divine Healing Therapy
                </h1>
              </Link>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* Logo positioned to the left */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/logoImage.png"
                  alt="Divine Healing Therapy Logo"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
              
              {/* Centered title and subtitle with left margin to avoid logo */}
              <div className="text-center ml-64">
                <Link href="/" className="inline-block">
                  <h1 className="text-9xl sm:text-12xl lg:text-15xl font-bold text-white hover:text-white/80 transition-colors tracking-wide drop-shadow-lg">
                    Divine Healing Therapy
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center py-3">
            <div className="flex items-center">
              <Image
                src="/logoImage.png"
                alt="Divine Healing Therapy Logo"
                width={60}
                height={60}
                className="object-contain mr-4"
              />
              <Link href="/" className="inline-block">
                <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                  Divine Healing Therapy
                </h1>
              </Link>
            </div>
          </div>
        )}
        
        {/* Navigation Menu Section */}
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center justify-end w-full space-x-6 lg:space-x-8">
            <Link href="/" className={`${isHomePage ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-gray-800 hover:text-gray-600'} transition-colors text-xl lg:text-2xl font-medium`}>
              Home
            </Link>
            <Link href="/about" className={`${isHomePage ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-gray-800 hover:text-gray-600'} transition-colors text-xl lg:text-2xl font-medium`}>
              About
            </Link>
            <Link href="/services" className={`${isHomePage ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-gray-800 hover:text-gray-600'} transition-colors text-xl lg:text-2xl font-medium`}>
              Services
            </Link>
            <Link href="/testimonials" className={`${isHomePage ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-gray-800 hover:text-gray-600'} transition-colors text-xl lg:text-2xl font-medium`}>
              Testimonials
            </Link>
            <Link href="/blog" className={`${isHomePage ? 'text-white hover:text-white/80 drop-shadow-md' : 'text-gray-800 hover:text-gray-600'} transition-colors text-xl lg:text-2xl font-medium`}>
              Blog
            </Link>
            <Link href="/schedule" className="bg-[var(--lilac)] text-[var(--mardi-gras)] px-3 lg:px-4 py-2 rounded-md hover:bg-[var(--magenta)] transition-colors text-xl lg:text-2xl font-medium">
              Schedule Session
            </Link>
          </div>

          <div className="md:hidden flex items-center w-full justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isHomePage ? 'text-white hover:text-white/80 focus:text-white/80' : 'text-gray-800 hover:text-gray-600 focus:text-gray-600'} focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-divine-blue rounded-md hover:bg-divine-white transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-divine-blue rounded-md hover:bg-divine-white transition-colors">
              About
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-divine-blue rounded-md hover:bg-divine-white transition-colors">
              Services
            </Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-divine-blue rounded-md hover:bg-divine-white transition-colors">
              Testimonials
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-divine-blue rounded-md hover:bg-divine-white transition-colors">
              Blog
            </Link>
            <Link href="/schedule" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-[var(--lilac)] text-[var(--mardi-gras)] rounded-md hover:bg-[var(--magenta)] transition-colors text-center font-medium">
              Schedule Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
