'use client';


import { useState } from 'react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="bg-light-bg p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold font-primary text-primary mb-6">Envíanos un Mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
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
          <button
            type="submit"
            className="w-full text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-60"
            style={{ background: '#ff6600' }}
            onMouseOver={e => (e.currentTarget.style.background = '#e65c00')}
            onMouseOut={e => (e.currentTarget.style.background = '#ff6600')}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center"><svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Enviando...</span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </div>
        {success && <div className="text-green-600 font-bold text-center">¡Mensaje enviado correctamente!</div>}
        {error && <div className="text-red-600 font-bold text-center">{error}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
