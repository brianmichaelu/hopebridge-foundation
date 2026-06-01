import ContactSection from "@/components/ContactSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <FAQAccordion limit={3} />
    </>
  );
}
