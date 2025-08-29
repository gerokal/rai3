import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acerca de Nosotros - Radio Andrés Ibáñez',
  description: 'Conoce más sobre nuestra historia, misión, visión y el equipo de Stereo 97.9 FM.',
};

const NosotrosPage = () => {
  return (
    <div className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-primary font-bold text-center mb-12">Acerca de Nosotros</h1>

          <div className="space-y-10 text-lg text-main">
            <section>
              <h2 className="text-2xl font-bold font-primary text-primary mb-4">Quiénes Somos</h2>
              <p>
                En STEREO 97 - RADIO ANDRÉS IBÁÑEZ nos enorgullece ser una emisora pensada para llenar el vacío musical que tanto se necesitaba en nuestra ciudad. Nuestra programación está cuidadosamente diseñada para ofrecer lo mejor de los 80, 90 y 2000, combinando géneros como rock and roll, pop rock, rock latino, alternativo, dance y baladas tanto en inglés como en español. Nos dirigimos a un público adulto contemporáneo, apasionado por la música que marcó una época. Lejos de seguir las tendencias actuales, nos mantenemos fieles a un legado musical que nos conecta con nuestras raíces y nuestra historia colectiva, sin incluir géneros urbanos como reguetón o trap. Aquí, la calidad y la autenticidad de la música son lo primero.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-primary text-primary mb-4">Nuestra Misión</h2>
              <p>
                Nuestra misión es ofrecer a nuestra audiencia una experiencia sonora única y memorable, basada en la música que ha marcado generaciones. Nos comprometemos a ser una emisora que promueve el legado cultural de los 80, 90 y 2000, brindando entretenimiento y evocando recuerdos a través de canciones que han sido parte de la vida de nuestros oyentes. Con una programación variada, buscamos conectar emocionalmente con un público adulto contemporáneo, creando un espacio de compañía y disfrute sin sacrificar calidad ni autenticidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-primary text-primary mb-4">Nuestros Valores</h2>
              <p>
                Nos guiamos por el compromiso con la calidad, la pasión por la música y el respeto por nuestra audiencia. Creemos en ofrecer un contenido auténtico, que conecte emocionalmente con nuestros oyentes, manteniendo siempre una programación fiel a nuestros principios. Valoramos la diversidad musical, asegurando un espacio inclusivo donde todos puedan disfrutar. Además, nos esforzamos por innovar sin perder de vista nuestras raíces, buscando siempre ser una emisora cercana, confiable y relevante.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-primary text-primary mb-4">Nuestra Cobertura</h2>
              <p>
                Nuestra señal FM es un puente sonoro que llega a todos los rincones de Santa Cruz de la Sierra. Desde el corazón de la ciudad hasta la zona sur, donde alcanzamos Paurito, al norte en Warnes, por el este hasta Cotoca, y al oeste llegando a La Guardia y Porongo, nuestra programación se disfruta de forma continua. Además, ofrecemos una conexión digital a través de nuestra página web, www.stereo97.com, para que nuestra música y contenido lleguen a quienes nos escuchan desde cualquier lugar. Con STEREO 97, la experiencia sonora trasciende las fronteras físicas, siempre con el compromiso de ofrecer una programación de calidad sin importar donde estés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-primary text-primary mb-4">Nuestro Equipo</h2>
              <p>
                El corazón de nuestra emisora es un equipo de locutores apasionados, comprometidos con la misión de brindar entretenimiento y compañía a nuestra audiencia. Cada uno de nuestros locutores es un experto en su campo, con la capacidad de cautivar, informar y conectar emocionalmente con nuestros oyentes. Su presencia en el aire refleja el compromiso con la calidad y la autenticidad que nos define, ofreciendo programas que se han ganado el reconocimiento del público por su calidez y profesionalismo. En STEREO 97, el equipo no solo es parte de una emisora, es la voz que transforma cada emisión en una experiencia única.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosotrosPage;
