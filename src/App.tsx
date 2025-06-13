import { Header } from "./components/layout/header";
import { Hero } from "./components/sections/hero";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";
import { Contact } from "./components/sections/contact";
import { Footer } from "./components/layout/footer";
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
