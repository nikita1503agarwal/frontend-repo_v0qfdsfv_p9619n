import { Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Briefcase className="h-6 w-6 text-indigo-600" />
          <span>KarirKu</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#jobs" className="text-slate-600 hover:text-slate-900">Lowongan</a>
          <a href="#process" className="text-slate-600 hover:text-slate-900">Proses</a>
          <a href="#apply" className="text-slate-600 hover:text-slate-900">Lamar</a>
        </nav>
        <a href="#apply" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700 transition">
          <Mail className="h-4 w-4" />
          Lamar Sekarang
        </a>
      </div>
    </header>
  );
}
