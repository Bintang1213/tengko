import './Header.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Kecepatan animasi
      once: true,       // Animasi hanya berjalan sekali
    });
  }, []);

  return (
    <div className='header' id='header'>
      <div className="header-contents">
        <h2 data-aos="fade-down">Order badogan ning kene</h2>   
        <p data-aos="fade-right">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, sed.</p>
        <button data-aos="zoom-in">Deleng menu</button>
      </div>
    </div>
  );
};

export default Header;
