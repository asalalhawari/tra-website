// 1. استورد الشعار الخاص بك
import "./Languages.css"

function Languages() {
  const languages = [
    { name: "Arabic", flag: "sa", code: "AR", native: "العربية" },
    { name: "English", flag: "gb", code: "EN", native: "English" },
    { name: "French", flag: "fr", code: "FR", native: "Français" },
    { name: "Spanish", flag: "es", code: "ES", native: "Español" },
    { name: "Russian", flag: "ru", code: "RU", native: "Русский" },
    { name: "Japanese", flag: "jp", code: "JP", native: "日本語" },
    { name: "Turkish", flag: "tr", code: "TR", native: "Türkçe" },
    { name: "German", flag: "de", code: "DE", native: "Deutsch" },
  ]

  return (
    <section id="languages" className="languages-page">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="languages-container">
        <div className="languages-orbit">
          <div className="hero-nucleus">
            {/* 2. تم استبدال الأيقونة بالشعار */}
<img src="/logo7.png" alt="Company Logo" className="nucleus-logo" />
            
            <h1 className="nucleus-title">
              <span className="title-highlight">Global</span> Languages
            </h1>
            <p className="nucleus-subtitle">Connecting cultures, one word at a time.</p>
            <div className="nucleus-stats">
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

          {languages.map((language, index) => (
            <div 
              key={index} 
              className="language-planet" 
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="planet-inner">
                <img
                  src={`https://flagcdn.com/w160/${language.flag}.png`}
                  alt={`${language.name} flag`}
                  className="language-flag-image"
                />
                <div className="language-info">
                  <span className="language-name-large">{language.name}</span>
                  <span className="language-native">{language.native}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages