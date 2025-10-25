import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://imgs.search.brave.com/sigOp-IsDcx0rbdl8Up4s0XLjeSziHPm6-i1eG4AhmE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY4L2Vk/Lzg4LzY4ZWQ4OGU1/MTViOTFhZDc5MWMx/NTllODA3ZDM4YzVl/LmpwZw" alt="BeatFlow Logo" />
          <h1>BeatFlow</h1>
        </div>
        <div className={`links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="btns">
          <IoSearch className="search" />
          <div className="login">Login</div>
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
