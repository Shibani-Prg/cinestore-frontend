import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 mt-10 border-t border-gray-800">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">
            🎬 CineStore
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
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Trending</li>
            <li className="hover:text-white cursor-pointer">Mood</li>
            <li className="hover:text-white cursor-pointer">Featured</li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-lg">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
            <span className="hover:text-white cursor-pointer">📸</span>
          </div>

          <p className="text-sm mt-4">
            Built with ❤️ using React & TMDB API
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} CineStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;