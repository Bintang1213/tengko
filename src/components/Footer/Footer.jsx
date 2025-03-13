import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const KedaiProfile = () => {
  return (
    <div className="kedai-profile">
      <img src={assets.Tengko} alt="Kedai Wartiyem" className="kedai-profile-img" />
      <div className="kedai-profile-text">
        <h2>Selamat Datang di Kedai Wartiyem!</h2>
        <p>
          Temukan kehangatan di setiap sajian. Dari kopi tradisional hingga makanan khas Nusantara, kami menyajikan dengan cinta dan kualitas terbaik.
        </p>
        <p className="kedai-tagline">
          Menyatukan rasa, mempererat kebersamaan.
        </p>
      </div>
      <img src={assets.Tengko} alt="Hiasan Kedai" className="kedai-decorative" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <KedaiProfile />

      <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-section">
            <img src={assets.Tengko} alt="Logo Kedai" className="footer-logo" />
            <p>
              Nikmati suasana santai dengan menu khas yang menggoda selera.
              Kami percaya bahwa makanan tidak hanya sekadar rasa, tetapi juga pengalaman.
            </p>
            <div className="footer-social-icons">
              <a href="#"><img src={assets.facebook_icon} alt="Facebook" className="social-icon" /></a>
              <a href="#"><img src={assets.twitter_icon} alt="Twitter" className="social-icon" /></a>
              <a href="#"><img src={assets.instagram_icon} alt="Instagram" className="social-icon" /></a>
            </div>
          </div>

          <div className="footer-section">
            <h2>NAVIGASI</h2>
            <ul>
              <li><i className="fas fa-home"></i> <a href="#">Home</a></li>
              <li><i className="fas fa-info-circle"></i> <a href="#">Tentang Kami</a></li>
              <li><i className="fas fa-utensils"></i> <a href="#">Menu</a></li>
              <li><i className="fas fa-envelope"></i> <a href="#">Kontak</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h2>HUBUNGI KAMI</h2>
            <ul>
              <li>📞 +623807844386</li>
              <li>✉ tengko@gmail.com</li>
              <li>📍 Jl. Kedai No. 99, Indonesia</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="footer-copyright">© 2025 Kedai Wartiyem - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
