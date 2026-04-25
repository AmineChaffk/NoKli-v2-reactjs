import { Link } from "react-router-dom";
import { FaHome, FaMoon, FaSun } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";




const Links = [
  {
    name: "Home",
    link: "/Home",
    icon: <FaHome size={20} />,
  },
  {
    name: "Notification",
    link: "/Notification",
    icon: <IoIosNotifications size={20} />,
  },
  {
    name: "Profile",
    link: "/Profile",
    icon: <FaUser size={20} />,
  }
];

export default function Nav({ toggleTheme, theme, isMobile = false }) {
  return (
    <nav className={`flex ${isMobile ? 'flex-row justify-around w-full' : 'flex-col gap-1 mt-2'} text-black dark:text-white transition-colors duration-200`}>
      <button 
        onClick={toggleTheme}
        className={`group flex text-xl ${isMobile ? 'w-12 h-12 justify-center' : 'w-fit h-10 xl:px-4 gap-2'} items-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors cursor-pointer`}
      >
        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        {!isMobile && <span className="text-lg hidden xl:inline">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>}
      </button>
      {Links.map((link, index) => (
        <Link 
          key={index} 
          to={link.link}
          className={`group flex text-xl ${isMobile ? 'w-12 h-12 justify-center' : 'w-fit h-10 xl:px-4 gap-2'} items-center rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-colors`}  
        >
          {link.icon}
          {!isMobile && <span className="text-lg hidden xl:inline">{link.name}</span>}
        </Link>
      ))}
    </nav>
  );
}