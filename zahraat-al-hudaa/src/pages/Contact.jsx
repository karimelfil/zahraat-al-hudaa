import { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  ChevronRight,
  Send,
  Navigation,
  CheckCircle,
  Sparkles,
  Zap,
  Users,
  Star
} from "lucide-react";
import translations from "../data/translations";
import "../styles/contact.css";

export default function Contact({ lang }) {
  const t = translations[lang].contact;
  const [animated, setAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const contactMethods = [
    {
      icon: <MessageCircle />,
      title: lang === "en" ? "WhatsApp Direct" : "واتساب مباشر",
      value: "+974 5122 2788",
      description: lang === "en" ? "Instant messaging for quick responses" : "مراسلة فورية للحصول على رد سريع",
      button: {
        text: lang === "en" ? "Start Chat Now" : "ابدأ المحادثة الآن",
        icon: <Zap />,
        href: "https://wa.me/+97451222788",
        type: "primary",
        gradient: "from-green-500 to-emerald-600"
      },
      accentColor: "#25D366",
      pulse: true
    },
    {
      icon: <Phone />,
      title: lang === "en" ? "Phone Call" : "مكالمة هاتفية",
      value: "+974 5122 2788",
      description: lang === "en" ? "Speak directly with our team" : "تحدث مباشرة مع فريقنا",
      button: {
        text: lang === "en" ? "Call Now" : "اتصل الآن",
        icon: <Phone />,
        href: "tel:+97451222788",
        type: "secondary"
      },
      accentColor: "#0d2344"
    },
    {
      icon: <Mail />,
      title: lang === "en" ? "Email Us" : "راسلنا عبر البريد",
      value: "alhudaazahrat@gmail.com",
      description: lang === "en" ? "For detailed inquiries and proposals" : "للاستفسارات التفصيلية والمقترحات",
      button: {
        text: lang === "en" ? "Send Email" : "إرسال بريد",
        icon: <Send />,
        href: "mailto:alhudaazahrat@gmail.com",
        type: "outline"
      },
      accentColor: "#c9a86a"
    },
    {
      icon: <MapPin />,
      title: lang === "en" ? "Visit Us" : "زيارتنا",
      value: lang === "en" ? "Doha, Qatar" : "الدوحة، قطر",
      description: lang === "en" ? "Main office location" : "موقع المكتب الرئيسي",
      button: {
        text: lang === "en" ? "Get Directions" : "احصل على الاتجاهات",
        icon: <Navigation />,
        href: "https://maps.google.com/?q=Doha+Qatar",
        type: "outline"
      },
      accentColor: "#9b87f5"
    },
    {
      icon: <Clock />,
      title: lang === "en" ? "24/7 Availability" : "متاحون 24/7",
      value: lang === "en" ? "Round-the-clock support" : "دعم على مدار الساعة",
      description: lang === "en" ? "Emergency staffing needs welcome" : "نرحب بطلبات العمالة العاجلة",
      status: {
        text: lang === "en" ? "Always Available" : "متاح دائماً",
        icon: <CheckCircle />
      },
      accentColor: "#ff6b6b",
      glow: true
    },
    {
      icon: <Users />,
      title: lang === "en" ? "Quick Response" : "استجابة سريعة",
      value: lang === "en" ? "30 min average response" : "استجابة خلال 30 دقيقة",
      description: lang === "en" ? "Get answers fast" : "احصل على إجابات سريعة",
      status: {
        text: lang === "en" ? "Fast Response Guaranteed" : "ضمان استجابة سريعة",
        icon: <Star />
      },
      accentColor: "#ffa726"
    }
  ];

  return (
    <section className="contact-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-square square-1"></div>
      </div>

      <div className="container">
        <div className={`contact-header ${animated ? 'animated' : ''}`}>
          <div className="header-badge">
            <Sparkles className="badge-icon" />
            <span>{lang === "en" ? "Premium Contact" : "تواصل متميز"}</span>
          </div>
          
          <h1 className="contact-title">
            <span className="title-gradient">{t.title}</span>
          </h1>
          
          <p className="contact-subtitle">
            {t.text}
            <span className="highlight-text">
              {lang === "en" ? " Choose your preferred method below." : " اختر الطريقة المفضلة أدناه."}
            </span>
          </p>
        </div>
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className={`contact-card card-${index + 1}`}
              style={{ 
                '--accent-color': method.accentColor,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`card-glow ${hoveredCard === index ? 'active' : ''}`}></div>
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <div className={`card-icon ${method.pulse ? 'pulse' : ''} ${method.glow ? 'glow' : ''}`}>
                    {method.icon}
                  </div>
                </div>
                
                <div className="card-text">
                  <h3>{method.title}</h3>
                  <div className="card-value">{method.value}</div>
                  <p className="card-description">{method.description}</p>
                </div>
                
                {method.button ? (
                  <a
                    href={method.button.href}
                    target={method.button.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`contact-btn ${method.button.type}`}
                  >
                    <span className="btn-content">
                      {method.button.icon}
                      <span>{method.button.text}</span>
                    </span>
                    {method.button.type === 'primary' && (
                      <span className="btn-arrow">
                        <ChevronRight />
                      </span>
                    )}
                  </a>
                ) : (
                  <div className="status-card">
                    <div className="status-icon">
                      {method.status.icon}
                    </div>
                    <span className="status-text">{method.status.text}</span>
                  </div>
                )}
              </div>
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
        <div className="contact-tips">
          <div className="tip-card">
            <div className="tip-icon">
              <Zap />
            </div>
            <div className="tip-content">
              <h4>{lang === "en" ? "Need Immediate Staff?" : "هل تحتاج إلى عمالة فورية؟"}</h4>
              <p>{lang === "en" 
                ? "Use WhatsApp for the fastest response. We can have staff ready within hours." 
                : "استخدم واتساب للحصول على أسرع استجابة. يمكننا تجهيز العمالة خلال ساعات."}</p>
            </div>
          </div>
          
          <div className="tip-card">
            <div className="tip-icon">
              <Users />
            </div>
            <div className="tip-content">
              <h4>{lang === "en" ? "Custom Requirements?" : "هل لديك متطلبات خاصة؟"}</h4>
              <p>{lang === "en" 
                ? "Call us directly for personalized staffing solutions tailored to your business." 
                : "اتصل بنا مباشرة للحصول على حلول عمالة مخصصة تناسب مؤسستك."}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}