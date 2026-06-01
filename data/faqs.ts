export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Is this donation website ready for real payment integration?",
    answer:
      "Yes. The donation form is structured so a developer can connect Stripe, PayPal, Flutterwave, Pesapal, DPO, Selcom, or mobile money gateways through a secure backend/API route."
  },
  {
    question: "Does the website collect card details directly?",
    answer:
      "No. A secure live version should redirect donors to an approved payment gateway checkout page. Card details should never be stored directly on this website."
  },
  {
    question: "Can the NGO edit causes and campaigns later?",
    answer:
      "Yes. The demo uses data files now, but it can later be connected to a CMS or admin dashboard so non-technical staff can update campaigns."
  },
  {
    question: "Can donations be tracked in a database?",
    answer:
      "Yes. A live version can store donor records, payment status, campaign totals, receipts, and webhook confirmations in a database."
  }
];
