import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Buat Profil',
    desc: 'Lengkapi data diri dan pengalaman kerja agar perusahaan memahami keahlianmu.',
  },
  {
    title: 'Pilih Lowongan',
    desc: 'Telusuri ratusan posisi sesuai minat dan lokasi yang kamu inginkan.',
  },
  {
    title: 'Kirim Lamaran',
    desc: 'Unggah CV dan surat lamaran yang menarik perhatian perekrut.',
  },
  {
    title: 'Ikuti Wawancara',
    desc: 'Persiapkan dirimu dan pantau status seleksi secara real-time.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Proses Rekrutmen</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-700 mb-4">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
