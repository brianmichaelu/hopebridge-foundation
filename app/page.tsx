import DonationCTA from "@/components/DonationCTA";
import FAQAccordion from "@/components/FAQAccordion";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import ProgramsSection from "@/components/ProgramsSection";
import CampaignCard from "@/components/CampaignCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <ProgramsSection />
      <DonationCTA />

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
              Active Campaigns
            </span>
            <h2 className="mt-3 text-4xl font-black text-navy lg:text-5xl">
              Campaign sections that help donors understand urgency
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CampaignCard
              tag="Emergency food"
              title="30-Day Family Food Pack Drive"
              description="Help provide essential food packs for families facing temporary hardship."
            />
            <CampaignCard
              tag="Back to school"
              title="School Supplies for 500 Children"
              description="Support uniforms, books, pens, bags, and mentoring for students."
            />
            <CampaignCard
              tag="Water access"
              title="Clean Water Storage Project"
              description="Fund water tanks and hygiene education for underserved communities."
            />
          </div>
        </div>
      </section>

      <GallerySection />
      <FAQAccordion limit={3} />

      <section className="section-padding bg-forest text-white">
        <div className="container-width flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-4xl font-black">Ready to support a cause?</h2>
            <p className="mt-3 text-emerald-50/80">
              Make a one-time or monthly demo donation and view the full donor flow.
            </p>
          </div>
          <Link href="/donate" className="btn-primary">
            Go to Donation Page <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
