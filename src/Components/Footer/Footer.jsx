import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 mt-10 border-t border-gray-800">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            🎬 Movora
          </h2>
          
          <p className="text-sm">
            Discover trending movies, explore by mood, and dive into detailed
            movie insights — all in one place.
          </p>
        </div>

        {/* NAV LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/trending" className="hover:text-white transition">
                Trending
              </Link>
            </li>

            <li>
              <Link to="/mood" className="hover:text-white transition">
                Mood
              </Link>
            </li>

            <li>
              <Link to="/featured" className="hover:text-white transition">
                Featured
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>

            <div className="flex gap-5 text-xl">

              {/* Portfolio */}
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="hover:text-white hover:scale-110 transition duration-300" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/shibani-prg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-300 hover:scale-110 transition duration-300" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/shibanikumaripani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition duration-300" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/shhibani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 hover:scale-110 transition duration-300" />
              </a>

            </div>

            <p className="text-sm mt-4">
              Built with ❤️ using React & TMDB API.
             
            </p>
         
          
        </div>




      </div>

    </div>

      {/* BOTTOM */ }
  <div className="text-center text-xs text-gray-500 mt-8">
    © {new Date().getFullYear()} Movora. All rights reserved.
  </div>

    </footer >
  );
};

export default Footer;