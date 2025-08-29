import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Radio Andrés Ibáñez',
  description: 'Conoce nuestra política de privacidad.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-primary font-bold text-center mb-12">Política de Privacidad</h1>
      <div className="prose lg:prose-xl mx-auto text-text-main">
        <p>
          En Radio Andrés Ibáñez, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información que usted nos proporciona a través de nuestro sitio web.
        </p>
        <h2>Información que Recopilamos</h2>
        <p>
          Recopilamos información que usted nos proporciona directamente, como su nombre y dirección de correo electrónico cuando se suscribe a nuestro boletín o nos contacta a través de nuestro formulario. También podemos recopilar información automáticamente a través de cookies y tecnologías similares, como su dirección IP, tipo de navegador y páginas visitadas.
        </p>
        <h2>Uso de la Información</h2>
        <p>
          Utilizamos la información recopilada para:
        </p>
        <ul>
          <li>Proveer y mantener nuestro servicio.</li>
          <li>Mejorar su experiencia en nuestro sitio web.</li>
          <li>Comunicarnos con usted, responder a sus preguntas y enviarle actualizaciones.</li>
          <li>Analizar el uso de nuestro sitio web para mejorar nuestros servicios.</li>
        </ul>
        <h2>Compartir Información</h2>
        <p>
          No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para operar el sitio web, cumplir con la ley o proteger nuestros derechos.
        </p>
        <h2>Seguridad de la Información</h2>
        <p>
          Implementamos medidas de seguridad razonables para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción.
        </p>
        <h2>Cambios a esta Política</h2>
        <p>
          Podemos actualizar nuestra política de privacidad ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en esta página.
        </p>
        <h2>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta política de privacidad, por favor contáctenos a través de prensa@radioandresibanez.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
