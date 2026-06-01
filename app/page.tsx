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

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
  <div className="container-width">
    <div className="mb-10 max-w-3xl">
      <span className="text-sm font-black uppercase tracking-[0.25em] text-coral">
        Active Campaigns
      </span>

      <h2 className="mt-3 text-4xl font-black leading-tight text-navy lg:text-[48px]">
        Urgent programs you can support today
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        These campaigns highlight immediate needs where donor support can help
        families, children, and communities receive practical care.
      </p>
    </div>
          <div className="grid gap-6 lg:grid-cols-3">
            
            <CampaignCard
  tag="Emergency food"
  title="30-Day Family Food Pack Drive"
  description="Help provide essential food packs for families facing temporary hardship."
  image="/images/food-support.png"
  raised="$18,500"
  goal="$30,000"
/>

<CampaignCard
  tag="Back to school"
  title="School Supplies for 500 Children"
  description="Support uniforms, books, pens, bags, and mentoring for students."
  image="/images/children-education.png"
  raised="$24,100"
  goal="$40,000"
/>

<CampaignCard
  tag="Water access"
  title="Clean Water Storage Project"
  description="Fund water tanks and hygiene education for underserved communities."
  image="/images/clean-water.png"
  raised="$31,200"
  goal="$50,000"
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
                Make a one-time or monthly donation and help fund programs that support families, children, and communities.
            </p>
          </div>
          <Link href="/donate" className="btn-primary">
            Donate Now <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
