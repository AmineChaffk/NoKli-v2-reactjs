import { FaHeart, FaUser, FaComment } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Yassine_Fisher",
    action: "liked your post",
    content: "Lyouma knt f wa7ed l-blasa zwina bzaf...",
    time: "2h",
  },
  {
    id: 2,
    type: "reply",
    user: "Samir",
    action: "replied to your post",
    content: "Fin had l-blasa?",
    time: "4h",
  },
  {
    id: 3,
    type: "follow",
    user: "Ali_Angler",
    action: "followed you",
    time: "5h",
  },
  {
    id: 4,
    type: "like",
    user: "NatureLover_Ma",
    action: "liked your reply",
    content: "Tbarkllah 3lik a khoya! fna hadxi",
    time: "1d",
  },
  {
    id: 5,
    type: "follow",
    user: "Fédérati on Nationale",
    action: "followed you",
    time: "2d",
  }
];

const Notification = () => {
  return (
    <div className="w-full min-h-screen text-black dark:text-white flex flex-col transition-colors duration-200">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 p-4 transition-colors duration-200">
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <div className="flex flex-col w-full">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex gap-4 p-4 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors duration-200">
            <div className="pt-1 flex justify-end min-w-[30px]">
              {notif.type === 'like' && <FaHeart className="text-pink-500 text-2xl" />}
              {notif.type === 'reply' && <FaComment className="text-[#1d9bf0] text-2xl" />}
              {notif.type === 'follow' && <FaUser className="text-[#1d9bf0] text-2xl" />}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-8 h-8 rounded-full bg-zinc-300 dark:bg-zinc-700 flex justify-center items-center text-sm shrink-0 mb-1">
                {notif.user[0].toUpperCase()}
              </div>
              <div className="flex items-center gap-1 flex-wrap text-[15px]">
                <span className="font-bold hover:underline">{notif.user}</span>
                <span className="text-zinc-800 dark:text-zinc-200">{notif.action}</span>
                <span className="text-zinc-500">· {notif.time}</span>
              </div>
              {notif.content && (
                <p className="text-[15px] text-zinc-500 dark:text-zinc-400 mt-1">{notif.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
