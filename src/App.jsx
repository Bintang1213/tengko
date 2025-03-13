import { motion } from 'framer-motion'; // Import Framer Motion
import Navbar from './components/navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion'; // Untuk animasi keluar-masuk halaman

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation(); // Untuk mengetahui halaman saat ini

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path='/' 
              element={
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } 
            />
            <Route 
              path='/cart' 
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cart />
                </motion.div>
              } 
            />
            <Route 
              path='/order' 
              element={
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <PlaceOrder />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default App;
