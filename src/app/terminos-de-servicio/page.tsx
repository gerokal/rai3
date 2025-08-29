import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio - Radio Andrés Ibáñez',
  description: 'Conoce nuestros términos y condiciones de servicio.',
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-primary font-bold text-center mb-12">Términos de Servicio</h1>
      <div className="prose lg:prose-xl mx-auto text-text-main">
        <p>
          Bienvenido al sitio web de Radio Andrés Ibáñez. Al acceder y utilizar nuestro sitio web, usted acepta cumplir con los siguientes términos y condiciones de servicio. Por favor, léalos detenidamente.
        </p>
        <h2>Uso del Sitio Web</h2>
        <p>
          Este sitio web y su contenido son proporcionados únicamente para su uso personal y no comercial. Usted acepta no utilizar el sitio web para ningún propósito ilegal o prohibido por estos términos.
        </p>
        <h2>Propiedad Intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de Radio Andrés Ibáñez o de sus proveedores de contenido y está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual.
        </p>
        <h2>Exclusión de Garantías</h2>
        <p>
          Este sitio web se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas. Radio Andrés Ibáñez no garantiza que el sitio web sea ininterrumpido, libre de errores o seguro.
        </p>
        <h2>Limitación de Responsabilidad</h2>
        <p>
          En ningún caso Radio Andrés Ibáñez será responsable de daños directos, indirectos, incidentales, especiales o consecuentes que surjan del uso o la imposibilidad de usar este sitio web.
        </p>
        <h2>Enlaces a Terceros</h2>
        <p>
          Nuestro sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por Radio Andrés Ibáñez. No tenemos control ni asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de ningún sitio web de terceros.
        </p>
        <h2>Cambios en los Términos</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos de servicio en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en el sitio web. Su uso continuado del sitio web después de la publicación de los cambios constituirá su aceptación de dichos cambios.
        </p>
        <h2>Ley Aplicable</h2>
        <p>
          Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Bolivia, sin dar efecto a ningún principio de conflicto de leyes.
        </p>
        <h2>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos términos de servicio, por favor contáctenos a través de prensa@radioandresibanez.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
