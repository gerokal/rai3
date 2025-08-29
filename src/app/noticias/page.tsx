import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias - Radio Andrés Ibáñez',
  description: 'Las últimas noticias de la estación, eventos, entrevistas y más.',
};

const NoticiasPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-primary font-bold mb-8">Noticias y Blog</h1>
      <p className="text-xl text-main">
        Esta sección está en construcción. ¡Vuelve pronto para enterarte de las últimas noticias de la estación, eventos, entrevistas y artículos sobre tu música favorita!
      </p>
    </div>
  );
};

export default NoticiasPage;
