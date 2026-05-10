import BackgroundShapes from "@/components/BackgroundShapes";
import Envelope from "@/components/Envelope";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-soft-beige overflow-hidden">
      <BackgroundShapes />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <header className="absolute top-10 text-center animate-fade-in px-4">
          <h1 className="font-serif text-3xl sm:text-5xl text-rose-dust mb-2">
            Anneler Günün Kutlu Olsun
          </h1>
          <p className="font-cursive text-xl sm:text-2xl text-rose-dust/70">
            Senin için küçük bir sürpriz...
          </p>
        </header>

        <Envelope />

        <footer className="absolute bottom-5 text-rose-dust/40 text-sm italic">
          Her zaman sevgiyle...
        </footer>
      </div>
    </main>
  );
}
