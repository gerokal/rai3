import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - Radio Andrés Ibáñez',
  description: 'Conoce nuestra política de uso de cookies.',
};

const CookiePolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-primary font-bold text-center mb-12">Política de Cookies</h1>
      <div className="prose lg:prose-xl mx-auto text-text-main">
        <p>
          Este sitio web utiliza cookies para mejorar su experiencia de navegación. Al continuar utilizando nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política.
        </p>
        <h2>¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o teléfono móvil) cuando visita ciertos sitios web. Las cookies permiten que un sitio web reconozca el dispositivo de un usuario y recuerde sus preferencias.
        </p>
        <h2>¿Cómo Utilizamos las Cookies?</h2>
        <p>
          Utilizamos cookies para diversos fines, incluyendo:
        </p>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Son necesarias para el funcionamiento básico de nuestro sitio web, permitiendo la navegación y el uso de sus funciones.</li>
          <li><strong>Cookies de Rendimiento:</strong> Recopilan información sobre cómo los visitantes utilizan nuestro sitio web, por ejemplo, qué páginas visitan con más frecuencia. Esta información se utiliza para mejorar el funcionamiento del sitio web.</li>
          <li><strong>Cookies de Funcionalidad:</strong> Permiten que el sitio web recuerde las elecciones que usted hace (como su nombre de usuario, idioma o la región en la que se encuentra) y proporcionan características mejoradas y más personales.</li>
          <li><strong>Cookies de Publicidad:</strong> Se utilizan para mostrar anuncios más relevantes para usted y sus intereses. También se utilizan para limitar el número de veces que ve un anuncio, así como para ayudar a medir la efect efectividad de las campañas publicitarias.</li>
        </ul>
        <h2>Control de Cookies</h2>
        <p>
          Usted tiene el derecho de decidir si acepta o rechaza las cookies. Puede configurar o modificar los controles de su navegador para aceptar o rechazar las cookies. Si elige rechazar las cookies, aún podrá utilizar nuestro sitio web, aunque su acceso a algunas funciones y áreas de nuestro sitio puede verse restringido.
        </p>
        <h2>Cambios en la Política de Cookies</h2>
        <p>
          Podemos actualizar nuestra Política de Cookies ocasionalmente. Le recomendamos revisar esta página periódicamente para estar informado sobre cómo utilizamos las cookies.
        </p>
        <h2>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre nuestra Política de Cookies, por favor contáctenos a través de prensa@radioandresibanez.com.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
