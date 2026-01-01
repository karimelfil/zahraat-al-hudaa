
export default function WhatsAppButton({ lang }) {
  const phoneNumber = "97451222788";

  const message =
    lang === "ar"
      ? "مرحباً، أود الاستفسار عن خدماتكم."
      : "Hello, I would like to know more about your services.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  );
}
