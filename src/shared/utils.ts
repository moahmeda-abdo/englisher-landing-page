export const handleWhatsAppClick = () => {
    const phoneNumber = "201000041191"; // without +
    const message = "Hello! I'm interested in learning English with Englisher Academy.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };