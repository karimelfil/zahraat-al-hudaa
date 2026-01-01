import { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Users, 
  Target, 
  Award, 
  Clock,
  Shield,
  Star,
} from "lucide-react";
import translations from "../data/translations";
import "../styles/about.css";

export default function About({ lang }) {
  const t = translations[lang].about;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const features = [
    {
      icon: <CheckCircle />,
      title: lang === "en" ? "Trained Staff" : "طاقم مدرب",
      desc: lang === "en" ? "Professionally certified personnel" : "كفاءات مدربة ومعتمدة"
    },
    {
      icon: <Users />,
      title: lang === "en" ? "Experienced Team" : "فريق ذو خبرة",
      desc: lang === "en" ? "Years of industry expertise" : "سنوات من الخبرة في المجال"
    },
    {
      icon: <Clock />,
      title: lang === "en" ? "24/7 Support" : "دعم متواصل",
      desc: lang === "en" ? "Always available for you" : "متاح دائماً لخدمتكم"
    },
    {
      icon: <Shield />,
      title: lang === "en" ? "Reliable Service" : "خدمة موثوقة",
      desc: lang === "en" ? "Consistent and dependable" : "مستمرة ويمكن الاعتماد عليها"
    }
  ];

  return (
    <section className="about-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <div className={`about-header ${animated ? 'animated' : ''}`}>
          <div className="header-badge">
            {lang === "en" ? "About Our Company" : "عن شركتنا"}
          </div>
          <h1 className="about-title">{t.title}</h1>
          <p className="about-intro">{t.text}</p>
        </div>
        <div className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-header">
              <Target className="card-icon" />
              <h3>{lang === "en" ? "Who We Are" : "من نحن"}</h3>
            </div>
            <p>
              {lang === "en"
                ? "Zahraat Al Hudaa Services is a professional staffing company providing trained and reliable workers for events, restaurants, and corporate environments."
                : "زهرة الهدى للخدمات هي شركة متخصصة في توفير عمالة مدربة وموثوقة للمناسبات والمطاعم وبيئات العمل المؤسسية."}
            </p>
          </div>
          <div className="about-card">
            <div className="card-header">
              <Award className="card-icon" />
              <h3>{lang === "en" ? "Our Mission" : "رسالتنا"}</h3>
            </div>
            <p>
              {lang === "en"
                ? "Our mission is to deliver dependable staffing solutions that help our clients operate smoothly and successfully."
                : "رسالتنا هي تقديم حلول عمالة موثوقة تساعد عملاءنا على العمل بسلاسة ونجاح."}
            </p>
          </div>
          <div className="about-card highlight">
            <div className="card-header">
              <Star className="card-icon" />
              <h3>{lang === "en" ? "Why Choose Us" : "لماذا تختارنا"}</h3>
            </div>
            <ul className="benefits-list">
              <li>
                <CheckCircle className="list-icon" />
                <span>{lang === "en" ? "Carefully selected and trained staff" : "عمالة مختارة ومدربة بعناية"}</span>
              </li>
              <li>
                <CheckCircle className="list-icon" />
                <span>{lang === "en" ? "Flexible short-term and long-term solutions" : "حلول مرنة قصيرة وطويلة المدى"}</span>
              </li>
              <li>
                <CheckCircle className="list-icon" />
                <span>{lang === "en" ? "Commitment to professionalism and reliability" : "الالتزام بالاحترافية والموثوقية"}</span>
              </li>
              <li>
                <CheckCircle className="list-icon" />
                <span>{lang === "en" ? "Support available 24/7" : "دعم متوفر على مدار الساعة"}</span>
              </li>
            </ul>
          </div>
          <div className="about-card">
            <div className="card-header">
              <Clock className="card-icon" />
              <h3>{lang === "en" ? "Our Experience" : "خبرتنا"}</h3>
            </div>
            <p>
              {lang === "en"
                ? "With years of experience in the staffing industry, we understand the importance of timing, quality, and trust."
                : "بفضل سنوات من الخبرة في مجال تأجير العمالة، ندرك أهمية الوقت والجودة والثقة."}
            </p>
          </div>

        </div>

       
        </div>

     
    </section>
  );
}