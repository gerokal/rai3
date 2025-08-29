import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto - Radio Andrés Ibáñez',
  description: 'Ponte en contacto con nosotros. Envíanos un mensaje o encuéntranos en nuestra dirección.',
};

const ContactoPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-primary font-bold text-center mb-12">Contacto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="text-lg">
          <h2 className="text-2xl font-bold font-primary text-primary mb-6">Información de Contacto</h2>
          <div className="space-y-4 text-main">
            <p>
              <strong>Dirección:</strong><br />
              Av. Canal Cotoca, 3er. Anillo Interno, Calle 4, Nº 3045
            </p>
            <p>
              <strong>Teléfono:</strong><br />
              +591 3 347-7777
            </p>
            <p>
              <strong>Email:</strong><br />
              prensa@radioandresibanez.com
            </p>
            <p>
              <strong>Horario de atención:</strong><br />
              Lunes a Viernes de 8:00 a 18:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;