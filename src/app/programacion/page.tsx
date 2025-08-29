import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programación - Radio Andrés Ibáñez',
  description: 'Consulta nuestro horario de programas semanal.',
};

const programs = {
  'Lunes a Viernes': [
    { time: '07:00 - 08:00', name: 'El Lobo del Aire', host: 'Mario Rosado' },
    { time: '08:00 - 09:30', name: 'Mañana es Mejor', host: 'Marcelo Vera' },
    { time: '10:00 - 12:00', name: 'En Vivo y en Privado', host: 'Róger Romay' },
    { time: '14:00 - 16:00', name: 'Comenzando la Tarde', host: 'Mario Rosado' },
    { time: '16:00 - 18:00', name: 'Poder, Medios y Miedos', host: 'José Pomacusi' },
    { time: '18:00 - 20:00', name: 'After Office', host: 'María René Lievana' },
  ],
  'Sábado': [
    { time: '07:00 - 09:00', name: 'Centrino', host: 'Marcelo Valencia' },
    { time: '09:00 - 12:00', name: 'Cabina 97', host: 'Eduardo Martínez' },
    { time: '12:00 - 14:00', name: 'Contra Reloj', host: 'Manolo DJ' },
    { time: '14:00 - 16:00', name: 'Radio Show', host: 'Juan Carlos Quisbert' },
    { time: '16:00 - 18:00', name: 'The Classic', host: 'Edgar Mesa' },
    { time: '19:00 - 21:00', name: 'Adictiva', host: 'Marcelo La Fuente' },
    { time: '21:00 - 23:00', name: 'Sesión Mix', host: 'Herland Castaña' },
  ],
  'Domingo': [
    { time: '06:00 - 10:00', name: 'Programación Musical', host: '' },
    { time: '10:00 - 12:00', name: 'Alcalde con los Vecinos', host: '' },
    { time: '12:00 - 14:00', name: 'Contra Reloj', host: 'Manolo DJ' },
    { time: '14:00 - 01:00', name: 'Programación Musical', host: '' },
  ],
};

const ProgramacionPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-primary font-bold text-center mb-12">Nuestra Programación</h1>
      <div className="space-y-12">
        {Object.entries(programs).map(([day, schedule]) => (
          <div key={day}>
            <h2 className="text-2xl font-bold font-primary text-main mb-6">{day}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full shadow-md rounded-lg">
                <thead className="bg-dark-bg text-on-dark">
                  <tr>
                    <th className="py-3 px-6 text-left">Horario</th>
                    <th className="py-3 px-6 text-left">Programa</th>
                    <th className="py-3 px-6 text-left">Conductor</th>
                  </tr>
                </thead>
                <tbody className="text-main">
                  {schedule.map((program, index) => (
                    <tr key={index} className="border-b border-border-dark hover:bg-light-bg-gray">
                      <td className="py-4 px-6">{program.time}</td>
                      <td className="py-4 px-6 font-bold">{program.name}</td>
                      <td className="py-4 px-6">{program.host}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramacionPage;
