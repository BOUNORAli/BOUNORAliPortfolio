import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Roles } from "@/components/Roles";
import { Approach } from "@/components/Approach";
import { Trajectory } from "@/components/Trajectory";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Roles />
        <Approach />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
