import { useState, useEffect } from "react";
import Header from "./Component/Header"
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import Notification from "./Component/Notification";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Profile from "./Component/Profile";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!currentUser) {
    return (
      <div className="flex justify-center w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <Routes>
          <Route path="/Login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/SignUp" element={<SignUp setCurrentUser={setCurrentUser} />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center w-full min-h-screen bg-white dark:bg-black transition-colors duration-200">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <main className="w-full sm:max-w-150 border-x border-zinc-200 dark:border-zinc-800 min-h-screen pb-16 sm:pb-0 transition-colors duration-200">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
            <Route path="*" element={<Navigate to="/Home" />} />
          </Routes>
        </main>
        <div className="hidden lg:block w-87.5 pl-8 py-4">
        </div>
      </div>
    </>
  )
}

export default App
