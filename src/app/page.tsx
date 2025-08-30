import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-dark-bg to-primary-dark text-on-dark text-center py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <Image src="/assets/logo_rai.png" alt="Radio Andrés Ibáñez Logo" width={150} height={150} className="mx-auto mb-6 rounded-full shadow-xl border-4 border-primary animate-fade-in" />
          <h1 className="text-4xl font-primary font-bold mb-2 tracking-wide drop-shadow-lg animate-fade-in">Bienvenido a Stereo 97.9 FM</h1>
          <p className="text-xl text-on-dark animate-fade-in">La primera estación premium de Bolivia.</p>
        </div>
      </section>

      {/* Now Playing Section */}
      <section className="py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-primary font-bold mb-8 tracking-wide text-primary">Al Aire</h2>
          <div className="shadow-2xl rounded-2xl p-8 max-w-md mx-auto border border-primary animate-fade-in">
            <p className="text-muted mb-2">Programa Actual (10:00 - 12:00)</p>
            <h3 className="text-2xl font-bold text-main mb-4">En Vivo y en Privado</h3>
            <p className="text-lg text-dark">con Róger Romay</p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-light-bg-gray py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-primary font-bold text-center mb-8 tracking-wide text-primary-dark">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder News Item 1 */}
            <div className="shadow-xl rounded-2xl overflow-hidden border border-primary hover:scale-105 hover:shadow-2xl transition-transform duration-200 animate-fade-in">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Entrevista con Artista Local</h3>
                <p className="text-muted mb-4">Hablamos con la nueva promesa del rock boliviano...</p>
                <Link href="/noticias" className="text-main hover:underline">Leer más</Link>
              </div>
            </div>
            {/* Placeholder News Item 2 */}
            <div className="shadow-xl rounded-2xl overflow-hidden border border-primary hover:scale-105 hover:shadow-2xl transition-transform duration-200 animate-fade-in">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Top 10 de los 90s</h3>
                <p className="text-muted mb-4">Un recorrido por los éxitos que marcaron una década...</p>
                <Link href="/noticias" className="text-main hover:underline">Leer más</Link>
              </div>
            </div>
            {/* Placeholder News Item 3 */}
            <div className="shadow-xl rounded-2xl overflow-hidden border border-primary hover:scale-105 hover:shadow-2xl transition-transform duration-200 animate-fade-in">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Próximo Evento de la Radio</h3>
                <p className="text-muted mb-4">No te pierdas nuestro concierto de aniversario...</p>
                <Link href="/noticias" className="text-main hover:underline">Leer más</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}