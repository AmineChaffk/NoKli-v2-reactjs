import { useNavigate } from "react-router-dom";
import Post from "./Post";
import { Posts } from "./data/Posts";

const Profile = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/Login");
  };

  if (!currentUser) return null;

  // Mocking user posts
  const userPosts = Posts.slice(0, 2).map(p => ({ ...p, name: currentUser.name, avatar: currentUser.avatar }));

  return (
    <div className="w-full min-h-screen text-black dark:text-white flex flex-col transition-colors duration-200">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 p-4 flex justify-between items-center transition-colors duration-200">
        <div>
          <h1 className="text-xl font-bold">{currentUser.name}</h1>
          <p className="text-sm text-zinc-500">{userPosts.length} posts</p>
        </div>
      </div>

      <div className="flex flex-col border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200 relative pb-4">
        <div className="h-48 w-full bg-zinc-300 dark:bg-zinc-800 transition-colors duration-200"></div>
        <div className="px-4 flex justify-between items-start -mt-16 mb-4">
          <div 
            style={{
              "backgroundColor":`${
                `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
              }`
            }}
            className="w-32 h-32 rounded-full border-4 border-white dark:border-black bg-zinc-200 dark:bg-zinc-800 overflow-hidden transition-colors duration-200 text-6xl font-semibold flex items-center justify-center"
          >
            {currentUser.name[0].toUpperCase()}
          </div>
          <button 
            onClick={handleLogout}
            className="mt-20 border border-zinc-300 dark:border-zinc-700 font-bold py-1.5 px-4 rounded-full hover:bg-red-500/10 hover:text-red-500 hover:border-red-500 transition-colors"
          >
            Log out
          </button>
        </div>
        <div className="px-4">
          <h2 className="text-xl font-bold">{currentUser.name}</h2>
          <p className="text-zinc-500">@{currentUser.username}</p>
          <p className="mt-3">Welcome to my profile! This is a mock bio for {currentUser.name}.</p>
          <div className="flex gap-4 mt-3 text-sm text-zinc-500">
            <p><span className="font-bold text-black dark:text-white">124</span> Following</p>
            <p><span className="font-bold text-black dark:text-white">4,092</span> Followers</p>
          </div>
        </div>
      </div>

      <div className="flex border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
        <div className="flex-1 text-center py-4 font-bold border-b-4 border-[#1d9bf0] cursor-pointer">
          Posts
        </div>
        <div className="flex-1 text-center py-4 font-medium text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors">
          Replies
        </div>
        <div className="flex-1 text-center py-4 font-medium text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors">
          Likes
        </div>
      </div>

      <div className="flex flex-col w-full">
        {userPosts.map((post, index) => (
          <Post
            key={index}
            id={index}
            name={post.name}
            content={post.content}
            image={post.image}
            avatar={post.avatar}
            like={post.like}
            toggleLike={() => {}}
            likeCount={post.likesCount}
            comments={post.comments || []}
            addComment={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
