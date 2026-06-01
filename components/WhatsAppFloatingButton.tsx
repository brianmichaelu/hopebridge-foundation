import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const message =
    "Hello, I am interested in the NGO website and donation system.";
  const href = `https://wa.me/255689824682?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
