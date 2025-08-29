import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/radioandresibanez' },
    { name: 'YouTube', url: 'https://www.youtube.com/@radioandresibanez97.9' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@radioandresibanez' },
    { name: 'Instagram', url: 'https://www.instagram.com/radioandresibanez/' },
  ];

  return (
    <footer className="bg-dark-bg-light text-on-dark pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-primary font-bold text-on-dark mb-4">Stereo 97.9 FM</h3>
            <p className="text-on-dark">La primera estación premium de Bolivia. Música de los 80s, 90s y 2000s.</p>
          </div>
          <div>
            <h3 className="text-lg font-primary font-bold text-on-dark mb-4">Contacto</h3>
            <p className="text-on-dark">Av. Canal Cotoca, 3er. Anillo Interno, Calle 4, Nº 3045</p>
            <p className="text-on-dark">Tel: +591 3 347-7777</p>
            <p className="text-on-dark">Email: prensa@radioandresibanez.com</p>
          </div>
          <div>
            <h3 className="text-lg font-primary font-bold text-on-dark mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-on-dark hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Legal Links */}
        <div className="mt-8 pt-6 border-t border-dark-medium flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
          <Link href="/politica-de-privacidad" className="text-on-dark hover:text-primary transition-colors">Política de Privacidad</Link>
          <Link href="/terminos-de-servicio" className="text-on-dark hover:text-primary transition-colors">Términos de Servicio</Link>
          <Link href="/politica-de-cookies" className="text-on-dark hover:text-primary transition-colors">Política de Cookies</Link>
        </div>
        <div className="border-t border-dark-medium mt-8 pt-6 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Radio Andrés Ibáñez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
