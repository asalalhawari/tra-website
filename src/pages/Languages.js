import React, { useState } from 'react';
import './Languages.css'; 

const LANGUAGES_DATA = [
  { name: "Arabic", flag: "sa", code: "AR", native: "العربية", glowColor: "#4CAF50" },
  { name: "English", flag: "gb", code: "EN", native: "English", glowColor: "#0077B6" },
  { name: "French", flag: "fr", code: "FR", native: "Français", glowColor: "#0055A4" },
  { name: "Spanish", flag: "es", code: "ES", native: "Español", glowColor: "#FABD00" },
  { name: "Russian", flag: "ru", code: "RU", native: "Русский", glowColor: "#D52B1E" },
  { name: "Japanese", flag: "jp", code: "JP", native: "日本語", glowColor: "#BC002D" },
  { name: "Turkish", flag: "tr", code: "TR", native: "Türkçe", glowColor: "#E30A17" },
  { name: "German", flag: "de", code: "DE", native: "Deutsch", glowColor: "#FFCE00" },
];

function Languages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="languages" className="languages-page">
      <div className="content-wrapper">
        {/* القسم الأيسر: النصوص */}
        <div className="hero-text-container">
          <p className="premium-label">GLOBAL LANGUAGES</p>
          <h1 className="hero-title">
            Tutorials to guide <br /> you beyond
          </h1>
          <p className="hero-subtitle">
            Once you've completed the courses, learn from our quick design and code tutorials to strengthen your knowledge.
          </p>
        </div>

        <div className="card-carousel-container">
          <div className="cards-wrapper">
            {LANGUAGES_DATA.map((language, index) => {
              const offset = index - activeIndex;
              const direction = Math.sign(offset);

              const style = {
                '--offset': offset,
                '--direction': direction,
                '--abs-offset': Math.abs(offset),
                '--glow-color': language.glowColor, 
              };

              return (
                <div
                  key={language.code}
                  className="language-card"
                  style={style}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-content">
                    <div className="card-header">
                      <img
                        src={`https://flagcdn.com/w80/${language.flag}.png`}
                        alt={`${language.name} flag`}
                        className="language-flag-image"
                      />
                      <span className="language-code">{language.code}</span>
                    </div>
                    <div className="language-info">
                      <h2 className="language-name-large">{language.name}</h2>
                      <p className="language-native">{language.native}</p>
                    </div>
                    <div className="card-footer">
                      <p>Videos, PDF, Files</p>
                      <span className="pro-badge">PRO</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
