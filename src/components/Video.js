import React from "react";
import { useNavigate } from "react-router-dom";

const Video = ({ thumbnail, title, channel, index, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch?v=${id}&ab_channel=${channel.replace(" ", "")}`)}
      className="w-22 scrollbar-hide cursor-pointer mt-2 hover:bg-[#2e2e2e] p-2 rounded-md h-full"
    >
      <a>
        <div className="w-22 px-4 flex items-center justify-center">
          <img
            className="rounded-xl h-52 w-22 object-contain"
            // src={"https://i.ytimg.com/vi/WjAPDofGg28/maxresdefault.jpg"}
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="flex items-center max-w-18 space-y-3 px-4">
          {/* <img
            src={
              "https://yt3.ggpht.com/ytc/AMLnZu8yf1gliJiSD3sWZU3RfwDbFSxFLioF0xggBRwMyw=s68-c-k-c0x00ffffff-no-rj"
            }
            alt="logo"
            className="rounded-full w-9 h-9 object-contain"
          /> */}
          <h4 className="w- font-bold font-roboto">{title}</h4>
        </div>
        <div className="flex flex-col text-[#aaaaaa] px-4">
          <p className="hover:text-white transition ease-in">{channel}</p>
          {/* <div className="flex">
            <p>{"58M views"}</p>&nbsp;&bull;&nbsp;<p>{"4 mo ago"}</p>
          </div> */}
        </div>
      </a>
    </div>
  );
};

export default Video;
