import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import ContactCard from "../../components/ContactCard";

export default function Home() {
  return (
    <div>
      <Hero />

      <Projects all={false} />

      <ContactCard />
    </div>
  );
}
