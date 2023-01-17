import {
  AddCircleOutline,
  CheckroomOutlined,
  EmojiEventsOutlined,
  FeedbackOutlined,
  FeedOutlined,
  FlagOutlined,
  HistoryOutlined,
  Home,
  LightbulbOutlined,
  MovieCreationOutlined,
  MusicNoteOutlined,
  QuestionMarkOutlined,
  SensorsOutlined,
  SettingsOutlined,
  SportsEsportsOutlined,
  Subscriptions,
  VideoLibraryOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed scrollbar-hide hover:scrollbar-default hidden md:flex flex-col h-[94.2vh] overflow-y-auto outline-1 min-w-[245px]">
      <div className="flex flex-col space-y-2 p-4">
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <Home /> <p className="ml-4">Home</p>
        </button>
        <button className="flex rounded-md border-none hover:bg-[#2E2E2E] p-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/483px-Youtube_shorts_icon.svg.png?20210811144940"
            className="h-6 w-6 object-contain"
            alt=""
          />
          <p className="ml-4">Shorts</p>
        </button>
        <button className="flex rounded-md border-none hover:bg-[#2E2E2E] p-2">
          <Subscriptions /> <p className="ml-4">Subscriptions</p>
        </button>
      </div>
      <hr className="border-t-[0.1px] border-[#2e2e2e] w-md" />
      <div className="flex flex-col space-y-2 p-4">
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <VideoLibraryOutlined />
          <p className="ml-4">Library</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <HistoryOutlined />
          <p className="ml-4">History</p>
        </button>
      </div>
      <div className="flex flex-col p-4">
        <p className="text-lg m-2">Explore</p>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <WhatshotOutlined />
          <p className="ml-4">Trending</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <MusicNoteOutlined />
          <p className="ml-4">Music</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <MovieCreationOutlined />
          <p className="ml-4">Films</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <SensorsOutlined />
          <p className="ml-4">Live</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <SportsEsportsOutlined />
          <p className="ml-4">Gaming</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <FeedOutlined />
          <p className="ml-4">News</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <EmojiEventsOutlined />
          <p className="ml-4">Sports</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <LightbulbOutlined />
          <p className="ml-4">Learning</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <CheckroomOutlined />
          <p className="ml-4">Fashion & Beauty</p>
        </button>
      </div>
      <hr className="border-t-[0.1px] border-[#2e2e2e] w-md" />
      <div className="flex flex-col p-4">
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <AddCircleOutline />
          <p className="ml-4">Browse Channels</p>
        </button>
      </div>
      <hr className="border-t-[0.1px] border-[#2e2e2e] w-md" />
      <div className="flex flex-col p-4">
        <p className="text-lg m-2">More From YouTube</p>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <img
            alt=""
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            className="h-6 w-6 object-contain"
          />
          <p className="ml-4">YouTube Premium</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/240px-Youtube_Music_icon.svg.png"
            className="h-6 w-6 object-contain"
            alt=""
          />
          <p className="ml-4">YouTube Music</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-kids-icon.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
          <p className="ml-4">YouTube Kids</p>
        </button>
        <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <img
            src="https://www.freepnglogos.com/uploads/youtube-tv-png/youtube-tv-youtube-watch-record-live-apk-download-from-moboplay-21.png"
            alt=""
            className="h-6 w-6 object-contain"
          />
          <p className="ml-4">YouTube TV</p>
        </button>
      </div>
      <hr className="border-t-[0.1px] border-[#2e2e2e] w-md" />
      <div className="flex flex-col space-y-2 p-6">
      <button className="flex rounded-lg border-none hover:bg-[#2E2E2E] p-2">
          <SettingsOutlined /> <p className="ml-4">Settings</p>
        </button>
        <button className="flex rounded-md border-none hover:bg-[#2E2E2E] p-2">
         <FlagOutlined />
          <p className="ml-4">Report history</p>
        </button>
        <button className="flex rounded-md border-none hover:bg-[#2E2E2E] p-2">
          <QuestionMarkOutlined /> <p className="ml-4">Help</p>
        </button>
        <button className="flex rounded-md border-none hover:bg-[#2E2E2E] p-2">
          <FeedbackOutlined /> <p className="ml-4">Feedback</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
