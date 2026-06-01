import DonationForm from "@/components/DonationForm";

export default function DonatePage() {
  return (
    <>
      <section className="bg-forest px-5 py-16 text-white lg:px-12">
        <div className="container-width">
          <span className="text-sm font-black uppercase tracking-[0.25em] text-gold">
            Donate
          </span>
          <h1 className="mt-3 max-w-3xl text-5xl font-black lg:text-6xl">
            Your support can change lives
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Choose a one-time or monthly donation and support programs that provide food,
            education, clean water, healthcare, and community care.
          </p>
        </div>
      </section>
      <DonationForm />
    </>
  );
}
