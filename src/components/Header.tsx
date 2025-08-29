'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-bg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/assets/logo_rai.png" alt="Radio Andrés Ibáñez Logo" width={50} height={50} />
              <span className="text-on-dark font-primary font-bold text-xl hidden sm:block">
                Stereo 97.9 FM
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-on-dark hover:text-primary transition-colors">Inicio</Link>
            <Link href="/programacion" className="text-on-dark hover:text-primary transition-colors">Programación</Link>
            <Link href="/nosotros" className="text-on-dark hover:text-primary transition-colors">Nosotros</Link>
            <Link href="/noticias" className="text-on-dark hover:text-primary transition-colors">Noticias</Link>
            <Link href="/contacto" className="text-on-dark hover:text-primary transition-colors">Contacto</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-on-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full right-0 w-48 bg-dark-bg ${isMenuOpen ? 'block' : 'hidden'}`}> {/* Changed w-full to w-48 */}
        <nav className="px-4 py-4 space-y-2 text-right"> {/* Added text-right */}
            <Link href="/" className="block text-on-dark hover:text-primary transition-colors" onClick={toggleMenu}>Inicio</Link>
            <Link href="/programacion" className="block text-on-dark hover:text-primary transition-colors" onClick={toggleMenu}>Programación</Link>
            <Link href="/nosotros" className="block text-on-dark hover:text-primary transition-colors" onClick={toggleMenu}>Nosotros</Link>
            <Link href="/noticias" className="block text-on-dark hover:text-primary transition-colors" onClick={toggleMenu}>Noticias</Link>
            <Link href="/contacto" className="block text-on-dark hover:text-primary transition-colors" onClick={toggleMenu}>Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;