import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import ContactCard from "../../components/ContactCard";
import Skillcard from "../../components/Skillcard";

export default function Home() {
  return (
    <div className="pt-0.5  w-full flex flex-col items-center">
      <Hero />
      <Skillcard />
      <Projects all={false} />
      <ContactCard />
    </div>
  );
}
