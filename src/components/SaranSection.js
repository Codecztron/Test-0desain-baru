import React from "react";
import "../styles/SaranSection.css"; // Import the CSS file

function SaranSection() {
  return (
    <section id="saran" className="saran-section">
      <div className="saran-container">
        <h2 className="saran-title">Kotak Saran</h2>
        <p className="saran-description">
          Berikan semua kritik, saran, dan apresiasi anda kepada kami😊
        </p>
        <p className="saran-description">
          Tenang semua masukan yang anda berikan akan bersifat anonim😶‍🌫️ jadi
          jangan ragu untuk bersuara yaaa🤩
        </p>
        <a
          href="https://kotaksaran-ketaqwaanman1jember.vercel.app/"
          className="saran-button"
        >
          Berikan Masukan
        </a>
      </div>
    </section>
  );
}

export default SaranSection;
