import ContactCard from "../../components/ContactCard";
import SEO from "../../components/SEO";
export default function Contact() {
  return (
    <div className="">
      <SEO
        title="Contact"
        description="Contact form to get in touch with Wladimir Janowitsch"
        name="Wladimir Janowitsch"
        type="contact"
      />
      <ContactCard />
    </div>
  );
}
