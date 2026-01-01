import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Phone, 
  MessageCircle,
  ChevronRight,
  Sparkles
} from "lucide-react";
import translations from "../data/translations";
import "../styles/home.css";

export default function Home({ lang }) {
  const t = translations[lang].home;
  const tNav = translations[lang].nav;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const statCards = [
    {
      icon: <CheckCircle />,
      title: lang === "en" ? "Trained Staff" : "طاقم مدرب",
      desc: lang === "en" ? "Professionally certified personnel" : "كفاءات مدربة ومعتمدة"
    },
    {
      icon: <Calendar />,
      title: lang === "en" ? "Events & Restaurants" : "مناسبات ومطاعم",
      desc: lang === "en" ? "Specialized teams for all occasions" : "فرق متخصصة لكل المناسبات"
    },
    {
      icon: <Clock />,
      title: lang === "en" ? "Reliable & On-Time" : "موثوق وفي الوقت",
      desc: lang === "en" ? "Punctual service guaranteed" : "خدمة دقيقة مضمونة"
    }
  ];

  const contactButtons = [
    {
      icon: <MessageCircle />,
      text: lang === "en" ? "Chat on WhatsApp" : "تواصل عبر واتساب",
      className: "whatsapp-btn",
      href: `https://wa.me/966501234567?text=${encodeURIComponent(
        lang === "en" 
          ? "Hello Zahraat Al Hudaa, I need information about your services"
          : "مرحباً زهرة الهدى، أريد معلومات عن خدماتكم"
      )}`,
      external: true
    },
    {
      icon: <Phone />,
      text: lang === "en" ? "Call Now" : "اتصل الآن",
      className: "call-btn",
      href: "tel:+97451222788",
      external: false
    }
  ];

  return (
    <section className="home" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="home-container">
        <div className="home-content">
          <div className={`content-wrapper ${animated ? 'animated' : ''}`}>
            <div className="home-badge">
              <Sparkles className="badge-icon" />
              <span>{lang === "en" ? "Premium Staffing Solutions" : "حلول عمالة متميزة"}</span>
            </div>
            <h1 className="home-title">
              <span className="title-line-1">{t.title}</span>
              <span className="title-line-2">{lang === "en" ? "Professional Excellence" : "تميز احترافي"}</span>
            </h1>
            <p className="home-subtitle">{t.subtitle}</p>
            <div className="home-actions">
              <Link to="/services" className="btn primary-btn">
                <span>{tNav.services}</span>
                <ChevronRight className="btn-icon" />
              </Link>
              <Link to="/contact" className="btn secondary-btn">
                <span>{tNav.contact}</span>
              </Link>
            </div>
            <div className="contact-actions">
              {contactButtons.map((btn, index) => (
                btn.external ? (
                  <a
                    key={index}
                    href={btn.href}
                    className={`contact-btn ${btn.className}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {btn.icon}
                    <span>{btn.text}</span>
                  </a>
                ) : (
                  <a
                    key={index}
                    href={btn.href}
                    className={`contact-btn ${btn.className}`}
                  >
                    {btn.icon}
                    <span>{btn.text}</span>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
        <div className="home-visual">
          <div className={`visual-wrapper ${animated ? 'animated' : ''}`}>
            {statCards.map((card, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-icon">
                  {card.icon}
                </div>
                <div className="stat-content">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
            <div className="decoration-circle"></div>
            <div className="decoration-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}