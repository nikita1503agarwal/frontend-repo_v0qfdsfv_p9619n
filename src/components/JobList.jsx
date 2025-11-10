import { MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Nusantara Tech',
    location: 'Jakarta, ID',
    type: 'Full-time',
    description:
      'Membangun antarmuka web modern dengan React, kolaborasi dengan tim produk, dan meningkatkan performa UI.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Cakrawala Studio',
    location: 'Bandung, ID',
    type: 'Hybrid',
    description:
      'Rancang pengalaman pengguna yang memukau, buat wireframe, prototipe, dan lakukan uji kegunaan.',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'Garuda Cloud',
    location: 'Yogyakarta, ID',
    type: 'Remote',
    description:
      'Bangun API yang andal dengan Python/FastAPI, integrasi database, dan praktik DevOps dasar.',
  },
];

export default function JobList() {
  return (
    <section id="jobs" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Lowongan Terbaru</h2>
            <p className="text-slate-600">Pilih posisi yang sesuai dengan minat dan keahlianmu.</p>
          </div>
          <a href="#apply" className="hidden md:inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline">
            Lamar Cepat
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <article key={job.id} className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
              <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
              <p className="text-sm text-slate-600">{job.company}</p>
              <p className="mt-3 text-sm text-slate-700 line-clamp-3">{job.description}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
              </div>
              <a href="#apply" className="mt-5 inline-flex w-full justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 font-medium hover:bg-slate-50">
                Lamar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
