import Header from "../components/Header";
import FintechCard from "../components/FintechCard";
import { fintechs } from "../data/fintechs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">
          Best Fintech Apps for Africans
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fintechs.map(app => (
            <FintechCard key={app.name} app={app} />
          ))}
        </div>
      </main>
    </>
  );
}