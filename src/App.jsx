import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Volunteering from "./components/Volunteering";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-[Poppins] text-slate-200 bg-slate-900 min-h-screen">
      <Header />

      <main className="w-full relative">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Volunteering />
      </main>

      <Footer />
    </div>
  );
}

export default App;
