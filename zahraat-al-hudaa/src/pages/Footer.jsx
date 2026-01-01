import { NavLink } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  Clock,
  Users,
  Building,
  Calendar,
  Shield
} from "lucide-react";
import translations from "../data/translations";
import "../styles/footer.css";

export default function Footer({ lang }) {
  const t = translations[lang];

  const services = [
    { icon: <Calendar />, label: lang === "en" ? "Events" : "مناسبات" },
    { icon: <Building />, label: lang === "en" ? "Restaurants" : "مطاعم" },
    { icon: <Users />, label: lang === "en" ? "Companies" : "شركات" },
    { icon: <Shield />, label: lang === "en" ? "Premium" : "متميزة" }
  ];

  return (
    <footer className="footer" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-title">
            <span className="footer-logo">{lang === "en" ? "ZAHRAT AL HUDA" : "زهرة الهدى"}</span>
            <span className="footer-subtitle">{lang === "en" ? "SERVICES" : "الخدمات"}          </span>
          </h3>
          <p className="footer-text">
            {lang === "en"
              ? "Professional staffing solutions for events, restaurants, and companies."
              : "حلول احترافية لتأجير العمالة للمناسبات والمطاعم والشركات."}
          </p>
          <div className="services-badges">
            {services.map((service, index) => (
              <div key={index} className="service-badge">
                <div className="badge-icon">
                  {service.icon}
                </div>
                <span>{service.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">
            {lang === "en" ? "Quick Links" : "روابط سريعة"}
          </h4>
          <NavLink to="/" className="footer-link">
            {t.nav.home}
          </NavLink>
          <NavLink to="/about" className="footer-link">
            {t.nav.about}
          </NavLink>
          <NavLink to="/services" className="footer-link">
            {t.nav.services}
          </NavLink>
          <NavLink to="/contact" className="footer-link">
            {t.nav.contact}
          </NavLink>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">
            {lang === "en" ? "Contact" : "تواصل معنا"}
          </h4>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <Phone className="contact-icon" />
            </div>
            <span>+974 5122 2788</span>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <span>alhudaazahrat@gmail.com</span>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <MapPin className="contact-icon" />
            </div>
            <span>{lang === "en"
              ? "Doha, Qatar , Madinat Khalifa"
              : "الدوحة، قطر، مدينة خليفة"}</span>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <Clock className="contact-icon" />
            </div>
            <span>{lang === "en" ? "24/7 Support" : "دعم 24/7"}</span>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">
            {lang === "en" ? "Follow Us" : "تابعنا"}
          </h4>
          <div className="instagram-card">
            <div className="instagram-header">
              <Instagram className="instagram-logo" />
              <div className="instagram-info">
                <span className="instagram-name">Zahraat Al Hudaa</span>
                <span className="instagram-handle">@zahrat.alhuda</span>
              </div>
            </div>
            
            <p className="instagram-description">
              {lang === "en" 
                ? "Follow us for updates, staff showcases, and service highlights." 
                : "تابعونا للحصول على آخر التحديثات وعروض العمالة وأبرز الخدمات."}
            </p>
            
            <a
              href="https://www.instagram.com/zahrat.alhuda?igsh=MjFyMXd6a2Yxa2s5"
              target="_blank"
              rel="noreferrer"
              className="instagram-btn"
            >
              <Instagram className="instagram-btn-icon" />
              <span>{lang === "en" ? "Visit Profile" : "زيارة الملف"}</span>
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zahraat Al Hudaa Services.  
          {lang === "en" ? " All rights reserved." : " جميع الحقوق محفوظة."}
        </p>
      </div>
    </footer>
  );
}