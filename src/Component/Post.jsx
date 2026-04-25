import { useState } from "react";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import Alert from '@mui/material/Alert';


const Post = ({ name, content, image ,like, toggleLike ,likeCount, comments = [], addComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(commentText);
      setCommentText("");
    }
  };

  return (
    <div className="flex flex-col border-b border-zinc-200 dark:border-zinc-800 w-full text-black dark:text-white transition-colors duration-200">
      <div className="flex gap-3 p-4 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors w-full">
        {/* Avatar */}
        <div
        className="w-10 h-10 rounded-full object-cover shrink-0 flex justify-center items-center text-2xl"
        style={{
          "backgroundColor":`${
            // eslint-disable-next-line react-hooks/purity
            `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
          }`
        }}
        >
          {name[0].toUpperCase()}
        </div>
        
        {/* Post Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold hover:underline truncate">{name}</span>
            <span className="text-zinc-500 truncate">@{name.toLowerCase().replace(/\s+/g, '')}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-500 hover:underline">
              {
                // eslint-disable-next-line react-hooks/purity
                Math.floor(Math.random() * 10)
              }h
            </span>
          </div>
          
          <p className="mt-1 text-[15px] whitespace-pre-wrap">{content}</p>
          
          {/* Post Image */}
          {image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 max-h-125 transition-colors duration-200">
              <img src={image} alt="Post media" className="w-full h-full object-cover" />
            </div>
          )}
          
          {/* Post Actions */}
          <div 
            className="flex justify-between mt-3 text-zinc-500 w-full max-w-106.25"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowComments(!showComments);
              }}
              className={`flex items-center gap-2 transition-colors group ${showComments ? 'text-[#1d9bf0]' : ''}`}
            >
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <FaRegComment size={18} />
              </div>
              <span className="text-sm">{comments.length}</span>
            </button>
            <button 
              className={`flex items-center gap-2 transition-colors group`}
            >
              <div className="p-2 rounded-full group-hover:bg-[#00ba7c]/10">
                <FaRetweet size={18} />
              </div>
              <span className="text-sm">{
                // eslint-disable-next-line react-hooks/purity
                Math.floor(Math.random() * 9999)
              }</span>
            </button>
            <button
              className={`flex items-center gap-2 ${like ? "text-pink-500" : "text-black dark:text-white"} transition-colors group`}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike();
              }}
            >
              <div className="p-2 rounded-full group-hover:bg-[#f91880]/10">
                <FaRegHeart size={18} />
              </div>
              <span className="text-sm">
                {
                  likeCount
                }
              </span>
            </button>
            <button
              className={`flex items-center gap-2 transition-colors group`}>
              <div className="p-2 rounded-full group-hover:bg-[#1d9bf0]/10">
                <FiShare size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4 border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-black transition-colors duration-200">
          {/* Add Comment Input */}
          <form onSubmit={handleCommentSubmit} className="flex gap-3 py-3 border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-200">
            <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex justify-center items-center text-xl shrink-0 transition-colors duration-200">
              A
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Post your reply"
                className="w-full bg-transparent text-black dark:text-white outline-none placeholder-zinc-500 text-[15px] pt-2 transition-colors duration-200"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#1d9bf0] text-white font-bold py-1.5 px-4 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a8cd8] transition-colors"
                >
                  Reply
                </button>
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="flex flex-col">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 py-3 border-b border-zinc-200 dark:border-zinc-800/20 last:border-0 hover:bg-zinc-100 dark:hover:bg-zinc-900/30 px-2 -mx-2 rounded-lg transition-colors cursor-pointer" onClick={(e) => e.stopPropagation()}>
                <div className="w-8 h-8 rounded-full bg-zinc-300 dark:bg-zinc-700 flex justify-center items-center text-sm shrink-0 transition-colors duration-200">
                  {comment.user[0].toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm hover:underline truncate">{comment.user}</span>
                    <span className="text-zinc-500 text-sm truncate">@{comment.user.toLowerCase()}</span>
                  </div>
                  <p className="mt-0.5 text-[15px] text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap wrap-break-word">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;