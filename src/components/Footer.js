// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3 className="footer-title">TENTANG KAMI</h3>
          <p>
            Sie 1 Ketaqwaan adalah organisasi yang berada di lingkungan MAN 1
            JEMBER.
          </p>
        </div>
        <div>
          <h3 className="footer-title">MENU PROFIL</h3>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                › Beranda
              </Link>
            </li>
            <li>
              <a href="#struktur" className="footer-link">
                › Struktur Organisasi
              </a>
            </li>
            <li>
              <a href="#proker" className="footer-link">
                › Program Kerja
              </a>
            </li>
            <li>
              <a href="#kegiatan" className="footer-link">
                › Kegiatan
              </a>
            </li>
            <li>
              <a href="#ekskul" className="footer-link">
                › Ekstrakurikuler
              </a>
            </li>
            <li>
              <Link to="/informasi" className="footer-link">
                › Informasi
              </Link>
            </li>
            <li>
              <a href="#saran" className="footer-link">
                › Kotak Saran
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">SOSIAL MEDIA</h3>
          <ul className="footer-list">
            <li>
              <a href="/page-html/page-comingsoon.html" className="footer-link">
                › Instagram
              </a>
            </li>
            <li>
              <a href="/page-html/page-comingsoon.html" className="footer-link">
                › Facebook
              </a>
            </li>
            <li>
              <a href="/page-html/page-comingsoon.html" className="footer-link">
                › Tiktok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Alamat:</h3>
          <p>
            Jl. Imam Bonjol No.50
            <br />
            Kaliwates Kidul, Kaliwates, <br />
            Kec. Kaliwates,
            <br />
            Kabupaten Jember, Jawa Timur 68131.
          </p>
          <p className="footer-contact">
            📞 0857-3156-5201 / 0851-4102-3076 <br />
            WhatsApp: 0857-3156-5201 / 0851-4102-3076 <br />
            Jika ada eror hubungi Admin yaaa🤩
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
