import React, { useState } from "react";
import "./App.css";
import meImg from "./assets/me.jpg";
import heroImg from "./assets/hero.jpg";

// ✅ خدماتنا
const services = [
  {
    title_ar: "إدارة الحملات الإعلانية",
    title_en: "Ads Management",
    image: new URL("./assets/services/service-ads.jpg", import.meta.url).href,
    desc_ar:
      "ننفذ استراتيجيات إعلانية مدروسة على فيسبوك، إنستجرام، وتيك توك لتحقيق أفضل النتائج وتحسين الأداء الإعلاني.",
    desc_en:
      "We execute data-driven ad strategies on Facebook, Instagram, and TikTok to achieve optimal results and performance.",
  },
  {
    title_ar: "تصميم الإعلانات",
    title_en: "Ad Design",
    image: new URL("./assets/services/service-design.jpg", import.meta.url).href,
    desc_ar:
      "تصميمات عصرية تُبرز هوية البراند بأسلوب جذاب وتحقق أعلى معدلات التفاعل.",
    desc_en:
      "Modern, creative ad designs that highlight your brand identity and drive engagement.",
  },
  {
    title_ar: "كتابة المحتوى",
    title_en: "Copywriting",
    image: new URL("./assets/services/service-copy.jpg", import.meta.url).href,
    desc_ar: "محتوى مؤثر يحكي قصة البراند ويحوّل الزوار إلى عملاء فعليين.",
    desc_en:
      "Impactful copy that tells your brand story and converts visitors into loyal customers.",
  },
  {
    title_ar: "تحليل البيانات",
    title_en: "Analytics",
    image: new URL("./assets/services/service-analytics.jpg", import.meta.url)
      .href,
    desc_ar:
      "تحليل متقدم للأداء واستخراج تقارير دقيقة تساعد على اتخاذ قرارات ذكية.",
    desc_en:
      "Advanced analytics and insights that help make smart marketing decisions.",
  },
  {
    title_ar: "متاجر شوبيفاي",
    title_en: "Shopify Stores",
    image: new URL("./assets/services/service-shopify.jpg", import.meta.url)
      .href,
    desc_ar: "تصميم وتطوير متاجر شوبيفاي احترافية موجهة للتحويل.",
    desc_en:
      "Professional Shopify store design and development focused on conversion.",
  },
  {
    title_ar: "الذكاء الاصطناعي في التسويق",
    title_en: "AI Marketing",
    image: new URL("./assets/services/service-ai.jpg", import.meta.url).href,
    desc_ar:
      "استخدام أدوات الذكاء الاصطناعي لتوليد أفكار دعائية مبتكرة وتحسين الأداء العام.",
    desc_en:
      "Using AI tools to create innovative ad ideas and improve overall performance.",
  },
];

// ✅ اللوجهات (روابط مباشرة)
const partners = [
  "https://i.postimg.cc/XJ8xBFqc/bubbly.jpg",
  "https://i.postimg.cc/j2ScH5nW/djeep.jpg",
  "https://i.postimg.cc/3Nx1XR0m/easy.jpg",
  "https://i.postimg.cc/prLCfT5K/lex.jpg",
  "https://i.postimg.cc/vTZhrBxr/tatwar.jpg",
];

export default function App() {
  const [lang, setLang] = useState("ar");
  const isArabic = lang === "ar";

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f7f8fa",
        color: "#222",
        margin: 0,
        padding: 0,
      }}
    >
      {/* ---------- HERO ---------- */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
          overflow: "hidden",
          padding: "0 40px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(135deg, rgba(0,180,180,0.3), rgba(255,255,255,0.7)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* الصورة أعلى الشمال */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: isArabic ? "unset" : "60px",
            right: isArabic ? "60px" : "unset",
            zIndex: 3,
          }}
        >
          <img
            src={meImg}
            alt="Eslam Mamdouh"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #00a89b",
              boxShadow: "0 0 25px rgba(0,168,155,0.5)",
            }}
          />
        </div>

        {/* النص */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "#0e4658" }}>
            {isArabic
              ? "براندك في إيد أمينة... تفكير، تنفيذ، ونتائج."
              : "Your Brand Is in Safe Hands — Strategy, Action, Results."}
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "20px",
              maxWidth: "700px",
              color: "#333",
            }}
          >
            {isArabic
              ? "بنصمم استراتيجيات تسويق ذكية مبنية على تحليل السوق وتحقيق أهدافك التجارية بطرق مبتكرة وحديثة."
              : "We design smart marketing strategies built on market analysis and innovative methods to achieve your business goals."}
          </p>

          {/* ✅ أزرار اللغة */}
          <div style={{ marginTop: "35px" }}>
            <button
              onClick={() => setLang("ar")}
              style={{
                background: lang === "ar" ? "#00a89b" : "#e0e0e0",
                color: lang === "ar" ? "#fff" : "#222",
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                marginRight: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              🇪🇬 عربي
            </button>
            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#00a89b" : "#e0e0e0",
                color: lang === "en" ? "#fff" : "#222",
                padding: "12px 25px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              🌍 English
            </button>
          </div>
        </div>
      </section>

      {/* ---------- WHY HZ ---------- */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#00a89b",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Why Choose HZ?
        </h2>
        <p
          style={{
            color: "#444",
            fontSize: "1.1rem",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          {isArabic
            ? "إحنا مش مجرد شركة تسويق... إحنا شريكك الحقيقي في النمو. بنحول أفكارك لنجاح ملموس باستخدام الإبداع والتحليل والخبرة."
            : "We’re not just marketers — we’re your true growth partners. We transform your ideas into measurable success through creativity, analytics, and expertise."}
        </p>
      </section>

      {/* ---------- SERVICES (بأنيميشن احترافي) ---------- */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f9fbfc",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#00a89b",
            marginBottom: "40px",
            fontWeight: "700",
          }}
          className="fade-in-up"
        >
          {isArabic ? "خدماتنا" : "Our Services"}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-in-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",
              }}
            >
              <img
                src={s.image}
                alt={isArabic ? s.title_ar : s.title_en}
                style={{
                  width: "100%",
                  height: "210px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "25px" }}>
                <h3 style={{ color: "#00796b", marginBottom: "10px" }}>
                  {isArabic ? s.title_ar : s.title_en}
                </h3>
                <p style={{ color: "#333", lineHeight: "1.6" }}>
                  {isArabic ? s.desc_ar : s.desc_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SUCCESS PARTNERS ---------- */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "90px 20px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "#00a89b",
            fontWeight: "700",
            marginBottom: "40px",
          }}
        >
          {isArabic ? "شركاء النجاح" : "Success Partners"}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "50px",
            animation: "scroll 3s linear infinite",
            width: "max-content",
            margin: "0 auto",
          }}
        >
          {partners.map((logo, i) => (
            <div
              key={i}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "12px",
                backgroundColor: "#f4f7f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo}
                alt={`partner-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        style={{
          background: "linear-gradient(135deg, #00a89b, #00e0c6)",
          color: "#fff",
          textAlign: "center",
          padding: "35px 10px",
        }}
      >
        <p>📧 mamdouheslam913@gmail.com</p>
        <p>📱 01091837869 | 01110167731</p>
        <p style={{ fontSize: "0.9rem", color: "#f0f0f0" }}>
          © 2025 HZ Marketing — All Rights Reserved.
        </p>
      </footer>

      <style>
        {`
          @keyframes fadeInCard {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .fade-in-card {
            animation: fadeInCard 1s ease-in-out;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 1.8rem !important;
              text-align: center !important;
            }
            p {
              font-size: 1rem !important;
              text-align: center !important;
            }
          }
        `}
      </style>
    </div>
  );
}






































































