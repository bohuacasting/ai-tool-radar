'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#7C3AED]">AIToolRadar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#7C3AED] transition">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#7C3AED] transition">
              Blog
            </Link>
            <Link href="/compare" className="text-gray-700 hover:text-[#7C3AED] transition">
              Compare
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#7C3AED] transition">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#7C3AED]">
              Home
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-[#7C3AED]">
              Blog
            </Link>
            <Link href="/compare" className="block py-2 text-gray-700 hover:text-[#7C3AED]">
              Compare
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-[#7C3AED]">
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
