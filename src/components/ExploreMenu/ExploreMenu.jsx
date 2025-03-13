import './ExploreMenu.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Kecepatan animasi
      once: true,       // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 data-aos="fade-up">Telusuri menu terbaik kami</h1>
      <p className='explore-menu-text' data-aos="fade-up">Wartiyem warkedokan cungur pengsek kedodokan, tengko om dagangan nih bos damnnn dakjakdjkajhfjhdsjhfsjhfjshdfjs</p>
      
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index} 
            className='explore-menu-list-item' 
            data-aos="zoom-in"
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      
      <hr data-aos="fade-up"/>
    </div>
  );
}

export default ExploreMenu;
