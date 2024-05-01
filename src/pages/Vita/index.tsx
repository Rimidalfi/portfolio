import VitaEntires from "../../components/VitaEntries";
import SEO from "../../components/SEO";
export default function Vita() {
  return (
    <>
      <SEO
        title="Vita"
        description="Curriculum Vitae (CV) of Wladimir Janowisch"
        name="Wladimir Janowitsch"
        type="timeline"
      />
      <VitaEntires />
    </>
  );
}
