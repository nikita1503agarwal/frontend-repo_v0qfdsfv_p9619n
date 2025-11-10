import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ApplicationForm() {
  const [form, setForm] = useState({ name: '', email: '', position: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just simulate submission success
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="apply" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Lamaran terkirim!</h2>
          <p className="text-slate-600 mt-2">Kami akan menghubungimu melalui email jika ada tahap selanjutnya.</p>
          <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
            Kirim lamaran lain
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">Kirim Lamaran</h2>
        <p className="text-slate-600 mb-6">Isi formulir berikut untuk mengirimkan lamaran pekerjaanmu.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nama Kamu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="email@contoh.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Posisi</label>
            <input
              type="text"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Contoh: Frontend Developer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Pesan</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ceritakan pengalaman dan motivasimu"
            />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition">
            <Send className="h-4 w-4" />
            Kirim Lamaran
          </button>
        </form>
      </div>
    </section>
  );
}
