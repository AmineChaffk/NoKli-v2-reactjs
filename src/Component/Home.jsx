import { useState, useEffect } from "react";
import Post from "./Post";
import { Posts } from "./data/Posts";

const Home = () => {
  const [posts, setPosts] = useState(Posts);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = (index) => {
    const updated = [...posts];

    if (updated[index].like) {
      updated[index].like = false;
      updated[index].likesCount -= 1;
    } else {
      updated[index].like = true;
      updated[index].likesCount += 1;
    }

    setPosts(updated);
  };

  const addComment = (index, text) => {
    if (!text.trim()) return;
    const updated = [...posts];
    if (!updated[index].comments) {
      updated[index].comments = [];
    }
    updated[index].comments.unshift({
      id: Date.now(),
      user: "Amine",
      text: text
    });
    setPosts(updated);
  };

  const fetchMorePosts = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const newPosts = Array.from({ length: 10 }).map(() => {
        const randomPost = Posts[Math.floor(Math.random() * Posts.length)];
        return {
          ...randomPost,
          likesCount: Math.floor(Math.random() * 999),
          like: false,
          comments: randomPost.comments ? [...randomPost.comments] : []
        };
      });
      
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 500 >=
        document.documentElement.offsetHeight
      ) {
        if (!isLoading) {
          fetchMorePosts();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen text-black dark:text-white flex flex-col transition-colors duration-200">

      <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 p-4 transition-colors duration-200">
        <h1 className="text-xl font-medium">Home</h1>
      </div>

      <div className="flex flex-col w-full">
        {posts.map((post, index) => (
          <Post
            key={index}
            id={index}
            name={post.name}
            content={post.content}
            image={post.image}
            avatar={post.avatar}
            like={post.like}
            toggleLike={() => toggleLike(index)}
            likeCount={post.likesCount}
            comments={post.comments || []}
            addComment={(text) => addComment(index, text)}
          />
        ))}
        {isLoading && (
          <div className="flex justify-center p-6 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
            <div className="w-8 h-8 border-4 border-[#1d9bf0]/30 border-t-[#1d9bf0] rounded-full animate-spin"></div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;