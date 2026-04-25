import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ setCurrentUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find(u => u.username === username)) {
      setError("Username already taken.");
      return;
    }

    const randomSeed = Math.floor(Math.random() * 1000);
    const avatar = `https://picsum.photos/seed/${randomSeed}/150/150`;

    const newUser = { id: Date.now(), name, username, password, avatar };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setCurrentUser(newUser);
    navigate("/Home");
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white flex justify-center items-center p-4 transition-colors duration-200">
      <div className="w-full max-w-md p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">WathIsThis</h1>
        <h2 className="text-2xl font-bold mb-6 w-full text-left">Create your account</h2>
        
        {error && <div className="w-full p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-lg mb-4 text-sm">{error}</div>}
        
        <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-md bg-transparent border border-zinc-300 dark:border-zinc-700 focus:border-[#1d9bf0] outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-md bg-transparent border border-zinc-300 dark:border-zinc-700 focus:border-[#1d9bf0] outline-none transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-md bg-transparent border border-zinc-300 dark:border-zinc-700 focus:border-[#1d9bf0] outline-none transition-colors"
          />
          <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-3 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors mt-2">
            Sign up
          </button>
        </form>
        
        <div className="mt-8 text-sm text-zinc-500 w-full text-left">
          Already have an account? <Link to="/Login" className="text-[#1d9bf0] hover:underline">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
