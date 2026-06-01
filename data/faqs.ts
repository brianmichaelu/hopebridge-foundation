export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How will my donation be used?",
    answer:
      "Your donation supports programs such as food assistance, school supplies, clean water, healthcare outreach, women and girls empowerment, and elderly care.",
  },
  {
    question: "Can I choose the cause I want to support?",
    answer:
      "Yes. Donors can select a specific cause such as education, food support, clean water, healthcare, or general community support.",
  },
  {
    question: "Is the donation process secure?",
    answer:
      "Yes. A live version of this website can connect to secure payment gateways such as Stripe, PayPal, Flutterwave, Pesapal, DPO, Selcom, or mobile money providers.",
  },
  {
    question: "Can I donate monthly?",
    answer:
      "Yes. Monthly giving can be added through a supported payment provider so donors can give automatically and help the organization plan long-term programs.",
  },
];
