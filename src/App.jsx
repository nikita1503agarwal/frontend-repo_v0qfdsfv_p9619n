import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobList from './components/JobList';
import Process from './components/Process';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <JobList />
        <Process />
        <ApplicationForm />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} KarirKu. Semua hak dilindungi.</p>
          <div className="text-sm text-slate-600">
            Dibuat dengan ❤️ untuk para pencari kerja Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
