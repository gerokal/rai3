'use client';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="bg-light-bg p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-primary text-primary mb-6">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-main">Nombre</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-light-bg-gray border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-main">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-light-bg-gray border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-main">Mensaje</label>
          <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-2 bg-light-bg-gray border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
