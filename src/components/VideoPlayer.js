import React, { useEffect, useState } from "react";
import Header from "./Header";
import YouTube from "react-youtube";
import {
  ContentCutOutlined,
  DownloadOutlined,
  MoreHoriz,
  PlaylistAddOutlined,
  ReplyOutlined,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

const VideoPlayer = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    console.log(
      window.location.href.substring(
        window.location.href.indexOf("=") + 1,
        window.location.href.indexOf("&")
      )
    );
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9caca4162amsh72ab63cfa62c031p1ba58djsn4f47edec64df",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${window.location.href.substring(
        window.location.href.indexOf("=") + 1,
        window.location.href.indexOf("&")
      )}`,
      options
    )
      .then((response) => {
        console.log(
          response.json().then((data) => {
            let arr1 = [];
            let arr2 = [];
            data.items.forEach((item) => {
              arr1.push({ ...item.snippet, id: item.id });
              arr2.push({ ...item.statistics });
            });
            setVideoDetails(arr1);
            setStatistics(arr2);
            console.log(arr1);
            console.log(arr2);
          })
        );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen overflow-y-auto bg-[#0f0f0f]">
      <div className="flex bg-[#0f0f0f] h-14 text-white">
        <Header />
      </div>
      <div className="bg-[#0f0f0f] p-2 flex item-center justify-center w-full object-contain">
        {/* <YouTube
          videoId={window.location.href.substring(
            window.location.href.indexOf("=") + 1,
            window.location.href.indexOf("&")
          )}
        /> */}
        <iframe
          src={`https://www.youtube.com/embed/${window.location.href.substring(
            window.location.href.indexOf("=") + 1,
            window.location.href.indexOf("&")
          )}?autoplay=1&mute=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          height={720}
          width={1080}
        />
      </div>
      <div className="flex flex-col p-2 text-white w-full items-start">
        <p className="ml-[410px] font-bold text-xl min-w-52 text-ellipsis mt-3">
          {videoDetails[0]?.title}
        </p>
        <div className="ml-[410px] flex space-x-40 flex-row items-center justify-between">
          <div className="flex flex-row space-x-3 mt-10 items-center">
            <p className=" font-bold text-lg min-w-52 text-ellipsis">
              Channel: {videoDetails[0]?.channelTitle}
            </p>
            <button className="bg-white rounded-full text-black min-w-max p-3">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row mt-10 text-white">
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-200">
              <ThumbUpOutlined />
              {statistics[0]?.likeCount}
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-200">
              <ThumbDownAltOutlined />
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-200">
              <ReplyOutlined /> Share
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-200">
              <DownloadOutlined /> Download
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-200">
              <ContentCutOutlined /> Clip
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-100">
              <PlaylistAddOutlined /> Save
            </button>
            <button className="p-2 border border-[#2e2e2e] rounded-full m-2 hover:bg-[#2e2e2e] transition-all ease-in duration-100">
              <MoreHoriz />
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[410px] max-w-[1000px] mb-3 text-white rounded-lg p-4 bg-[#2e2e2e]">
        <p className="font-semibold">
          {statistics[0]?.viewCount}
          {" views "}
          Premiered {new Date(videoDetails[0]?.publishedAt).toDateString()}
        </p>
        {"\n"}
        <p className="font-medium">{statistics[0]?.commentCount} comments</p>
        <br />
        <p className="text-blue-500">
          {videoDetails[0]?.tags.map((tag) => (
            <>#{tag} </>
          ))}
        </p>
        <br />
        <br />
        <p>{videoDetails[0]?.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
