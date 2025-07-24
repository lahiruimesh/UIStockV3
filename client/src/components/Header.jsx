import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent shadow-sm transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white drop-shadow">
          UIStock
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-white font-medium drop-shadow">

          <Link to="/" className="hover:text-blue-300 transition mr-8">
            Home
          </Link>

          <Link to="/" className="hover:text-blue-300 transition mr-8">
            About
          </Link>

          <Link to="/" className='hover:text-blue-300 transition mr-8'>
            Features
          </Link>

          <Link to="/" className='hover:text-blue-300 transition mr-8'>
          Blogs
          </Link>

          <Link to="/" className='hover:text-blue-300 transition mr-8'>
          Contact
          </Link>

        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
