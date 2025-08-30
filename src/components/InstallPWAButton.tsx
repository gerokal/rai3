'use client';

import { useState, useEffect } from 'react';

// Define el tipo de evento de manera más precisa para navegadores modernos
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallPWAButton = () => {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!prompt) return;

    await prompt.prompt();
    
    // Opcional: rastrear el resultado para analíticas
    const { outcome } = await prompt.userChoice;
    console.log(`Respuesta del usuario al prompt de instalación: ${outcome}`);

    // El prompt solo se puede usar una vez.
    setPrompt(null);
  };

  // Si no hay prompt, no renderizar nada.
  if (!prompt) {
    return null;
  }

  // Renderizar el botón usando JSX
  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-24 right-4 z-50 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-colors animate-fade-in"
      aria-label="Instalar la aplicación web progresiva"
    >
      Instalar App
    </button>
  );
};

export default InstallPWAButton;