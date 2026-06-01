export type Cause = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  raised: number;
  target: number;
};

export const causes: Cause[] = [
  {
    slug: "feed-the-hungry",
    title: "Feed the Hungry",
    category: "Food Support",
    image: "/images/food-support.png",
    description:
      "Provide nutritious meals and emergency food packs for vulnerable families and children.",
    raised: 18500,
    target: 30000
  },
  {
    slug: "every-child-in-school",
    title: "Every Child in School",
    category: "Education",
    image: "/images/children-education.png",
    description:
      "Support school supplies, tuition assistance, uniforms, and mentoring for children.",
    raised: 24100,
    target: 40000
  },
  {
    slug: "safe-water-for-all",
    title: "Safe Water for All",
    category: "Clean Water",
    image: "/images/clean-water.png",
    description:
      "Help communities access clean water through wells, filters, tanks, and hygiene training.",
    raised: 31200,
    target: 50000
  },
  {
    slug: "women-girls-empowerment",
    title: "Women & Girls Empowerment",
    category: "Empowerment",
    image: "/images/women-empowerment.png",
    description:
      "Fund skills training, leadership programs, dignity kits, and small business support.",
    raised: 16400,
    target: 28000
  },
  {
    slug: "primary-healthcare-access",
    title: "Primary Healthcare Access",
    category: "Healthcare",
    image: "/images/healthcare.png",
    description:
      "Support outreach clinics, medical screening, health education, and basic care access.",
    raised: 22600,
    target: 35000
  },
  {
    slug: "elderly-support",
    title: "Support for Elderly People",
    category: "Elderly Care",
    image: "/images/elderly-care.png",
    description:
      "Provide home visits, food support, health checkups, and companionship for elderly people.",
    raised: 9800,
    target: 20000
  }
];

export const featuredCauses = causes.slice(0, 3);
