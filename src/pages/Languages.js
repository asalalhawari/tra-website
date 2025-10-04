import { FaGlobe, FaLanguage, FaEarthAmericas } from "react-icons/fa6"
import "./Languages.css"

function Languages() {
  const languages = [
    { name: "Arabic", flag: "🇸🇦", code: "AR", native: "العربية" },
    { name: "English", flag: "🇬🇧", code: "EN", native: "English" },
    { name: "French", flag: "🇫🇷", code: "FR", native: "Français" },
    { name: "Spanish", flag: "🇪🇸", code: "ES", native: "Español" },
    { name: "Russian", flag: "🇷🇺", code: "RU", native: "Русский" },
    { name: "Japanese", flag: "🇯🇵", code: "JP", native: "日本語" },
    { name: "Turkish", flag: "🇹🇷", code: "TR", native: "Türkçe" },
    { name: "German", flag: "🇩🇪", code: "DE", native: "Deutsch" },
  ]

  return (
    <section id="languages" className="languages-page">
      <div className="languages-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

      <div className="languages-container">
        {/* Hero Section */}
        <div className="languages-hero">
          <div className="languages-hero-icon">
            <FaGlobe className="globe-icon" />
          </div>
          <h1 className="languages-hero-title">
            <span className="title-highlight">Our</span> Languages
          </h1>
          <p className="languages-hero-subtitle">
            Breaking barriers and connecting cultures through expert translation services
          </p>
          <div className="languages-stats">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Languages</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>

        {/* Languages Grid */}
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-card" style={{ "--delay": `${index * 0.1}s` }}>
              <div className="language-card-inner">
                <div className="language-card-front">
                  <div className="language-flag-large">{language.flag}</div>
                  <div className="language-code-large">{language.code}</div>
                  <div className="language-name-large">{language.name}</div>
                </div>
                <div className="language-card-back">
                  <div className="language-native">{language.native}</div>
                  <FaLanguage className="language-back-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Languages Text */}
        <div className="more-languages-text">
          <FaEarthAmericas className="more-languages-icon" />
          <span>And many more languages available upon request</span>
        </div>
      </div>
    </section>
  )
}

export default Languages
