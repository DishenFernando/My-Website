// src/components/SplashScreen.jsx
import './SplashScreen.css';
import { FaCode } from 'react-icons/fa';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-logo-container">
        <FaCode className="splash-icon" />
        <h1 className="splash-title">Dishen Fernando</h1>
        <p className="splash-subtitle">Crafting Clean Code & Elegant Solutions</p>
      </div>
    </div>
  );
};

export default SplashScreen;
