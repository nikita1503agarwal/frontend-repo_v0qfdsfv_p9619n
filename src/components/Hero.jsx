import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">
            <Star className="h-3.5 w-3.5" />
            Bangun karier impianmu
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Temukan dan lamar pekerjaan dengan cepat dan mudah
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Jelajahi lowongan terbaru, pahami proses rekrutmen, dan kirim lamaran yang mencuri perhatian. Semua dalam satu tempat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#jobs" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
              Jelajahi Lowongan
            </a>
            <a href="#apply" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
              <Rocket className="h-4 w-4 mr-2" />
              Kirim Lamaran
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 border border-slate-200 shadow-inner" />
        </div>
      </div>
    </section>
  );
}
