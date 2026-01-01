import { useState, useEffect } from "react";
import { 
  Calendar,
  Building,
  Users,
  Clock,
  Star,
  Shield,
  CheckCircle,
} from "lucide-react";
import translations from "../data/translations";
import "../styles/services.css";

export default function Services({ lang }) {
  const t = translations[lang].services;
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const servicesData = [
    {
      icon: <Calendar />,
      title: lang === "en" ? "Event Staff" : "عمال مناسبات",
      desc:
        lang === "en"
          ? "Professional staff for weddings, exhibitions, conferences, and special events."
          : "عمالة احترافية لحفلات الزفاف والمعارض والمؤتمرات والمناسبات الخاصة.",
      features: [
        lang === "en" ? "Wedding & Party Staff" : "طاقم أعراف وحفلات",
        lang === "en" ? "Exhibition & Conference Staff" : "طاقم معارض ومؤتمرات",
        lang === "en" ? "Hosts & Servers" : "مضيفين ونادلين",
        lang === "en" ? "Event Coordinators" : "منسقين فعاليات"
      ]
    },
    {
      icon: <Building />,
      title: lang === "en" ? "Restaurant Staff" : "عمال مطاعم",
      desc:
        lang === "en"
          ? "Trained waiters, kitchen helpers, and service staff for restaurants and cafes."
          : "نُدُل ومساعدي مطبخ وطاقم خدمة مدربين للمطاعم والمقاهي.",
      features: [
        lang === "en" ? "Waiters & Servers" : "نادلين وخدمة",
        lang === "en" ? "Kitchen Assistants" : "مساعدي مطبخ",
        lang === "en" ? "Cafe & Bar Staff" : "طاقم مقاهي وبارات",
        lang === "en" ? "Restaurant Managers" : "مديري مطاعم"
      ]
    },
    {
      icon: <Users />,
      title: lang === "en" ? "Corporate Staff" : "عمال شركات",
      desc:
        lang === "en"
          ? "Reliable support staff for offices, companies, and corporate environments."
          : "عمالة مساندة موثوقة للمكاتب والشركات وبيئات العمل المؤسسية.",
      features: [
        lang === "en" ? "Office Support" : "دعم مكاتب",
        lang === "en" ? "Reception & Admin" : "استقبال وإداريين",
        lang === "en" ? "Corporate Events" : "فعاليات مؤسسية",
        lang === "en" ? "Temporary Teams" : "فرق مؤقتة"
      ]
    },
    {
      icon: <Clock />,
      title: lang === "en" ? "Temporary Workers" : "عمالة مؤقتة",
      desc:
        lang === "en"
          ? "Flexible short-term staffing solutions based on your business needs."
          : "حلول عمالة مؤقتة مرنة حسب احتياجات عملك.",
      features: [
        lang === "en" ? "Short-term Contracts" : "عقود قصيرة المدى",
        lang === "en" ? "On-Demand Staffing" : "عمالة حسب الطلب",
        lang === "en" ? "Seasonal Workers" : "عمال موسميين",
        lang === "en" ? "Project-Based Teams" : "فرق حسب المشروع"
      ]
    },
  ];

  const benefits = [
    {
      icon: <Shield />,
      title: lang === "en" ? "Verified Staff" : "طاقم موثوق",
      desc: lang === "en" ? "All staff undergo background checks" : "جميع العمالة تخضع لفحوصات خلفية"
    },
    {
      icon: <Star />,
      title: lang === "en" ? "Premium Quality" : "جودة ممتازة",
      desc: lang === "en" ? "Professionally trained and certified" : "مدربين ومعتمدين مهنياً"
    },
    {
      icon: <CheckCircle />,
      title: lang === "en" ? "Reliable Service" : "خدمة موثوقة",
      desc: lang === "en" ? "Consistent and dependable staffing" : "عمالة مستمرة ويمكن الاعتماد عليها"
    }
  ];

  return (
    <section className="services-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="services-container">
        <div className={`services-header ${animated ? 'animated' : ''}`}>
          <div className="header-badge">
            {lang === "en" ? "Our Services" : "خدماتنا"}
          </div>
          <h1>{t.title}</h1>
          <p>
            {lang === "en"
              ? "We provide reliable and professional staffing services tailored to your needs."
              : "نقدم خدمات عمالة موثوقة واحترافية مصممة لتلبية احتياجاتك."}
          </p>
        </div>
        <div className="benefits-section">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
              
              <p className="service-description">{service.desc}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}