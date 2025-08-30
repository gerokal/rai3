'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/assets/logo_rai.png" alt="Radio Andrés Ibáñez Logo" width={50} height={50} />
              <span className="text-black font-primary font-bold text-xl hidden sm:block">
                Stereo 97.9 FM
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-2">
            <Link href="/" className="text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-1 rounded transition-all duration-200">Inicio</Link>
            <Link href="/programacion" className="text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-1 rounded transition-all duration-200">Programación</Link>
            <Link href="/nosotros" className="text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-1 rounded transition-all duration-200">Nosotros</Link>
            <Link href="/noticias" className="text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-1 rounded transition-all duration-200">Noticias</Link>
            <Link href="/contacto" className="text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-1 rounded transition-all duration-200">Contacto</Link>
          </nav>

          {/* El contenedor del botón móvil siempre existe para mantener la estructura del DOM estable */}
          <div className="md:hidden">
            {/* El botón solo se renderiza en el cliente para evitar errores de hidratación */}
            {hasMounted && (
              <button 
                onClick={toggleMenu} 
                className="text-black focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Abrir menú de navegación"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* El panel de navegación móvil solo se renderiza en el cliente */}
      {hasMounted && (
        <div 
          id="mobile-menu"
          className={`md:hidden absolute top-full right-0 w-56 bg-white shadow-lg rounded-b-lg border-l border-border transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
          aria-hidden={!isMenuOpen}
        > 
          <nav className="flex flex-col items-center px-2 py-2 space-y-1">
            <Link href="/" className="w-full text-center text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-2 rounded transition-all duration-200" onClick={toggleMenu}>Inicio</Link>
            <Link href="/programacion" className="w-full text-center text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-2 rounded transition-all duration-200" onClick={toggleMenu}>Programación</Link>
            <Link href="/nosotros" className="w-full text-center text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-2 rounded transition-all duration-200" onClick={toggleMenu}>Nosotros</Link>
            <Link href="/noticias" className="w-full text-center text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-2 rounded transition-all duration-200" onClick={toggleMenu}>Noticias</Link>
            <Link href="/contacto" className="w-full text-center text-black hover:text-primary hover:bg-light-bg hover:underline hover:underline-offset-4 px-3 py-2 rounded transition-all duration-200" onClick={toggleMenu}>Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
