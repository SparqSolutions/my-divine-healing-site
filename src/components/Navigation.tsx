'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-divine-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/logoImage.png"
                alt="Divine Healing Therapy Logo"
                width={40}
                height={40}
                className="h-auto object-contain"
              />
              <span className="text-lg sm:text-2xl font-bold text-divine-blue">
                Divine Healing Therapy
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-divine-blue transition-colors text-sm lg:text-base">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-divine-blue transition-colors text-sm lg:text-base">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-divine-blue transition-colors text-sm lg:text-base">
              Services
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-divine-blue transition-colors text-sm lg:text-base">
              Testimonials
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-divine-blue transition-colors text-sm lg:text-base">
              Blog
            </Link>
            <Link href="/schedule" className="bg-divine-blue text-white px-3 lg:px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm lg:text-base">
              Schedule Session
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-divine-blue focus:outline-none focus:text-divine-blue"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-divine-beige">
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
            <Link href="/schedule" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-divine-blue text-white rounded-md hover:bg-blue-600 transition-colors text-center font-medium">
              Schedule Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}