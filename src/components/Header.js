import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import {
  Mic,
  MoreVert,
  Search,
  AccountCircleRounded,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setSearch, setSearchResults } from "../slices/searchResultsSlice";

const Header = () => {
  const [search1, setSearch1] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9caca4162amsh72ab63cfa62c031p1ba58djsn4f47edec64df",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    console.log(
      "Fetching data for: " + search1.toLowerCase().replaceAll(" ", "+")
    );
    await fetch(
      `https://youtube-v31.p.rapidapi.com/search?q=${search1
        .toLowerCase()
        .replaceAll(" ", "+")}&part=snippet%2Cid&regionCode=IN&maxResults=100`,
      options
    )
      // .then((response) => response.json())
      .then((response) => {
        let arr = [];
        response
          .json()
          .then((data) => {
            data.items.forEach((item) => {
              arr.push({ ...item.snippet, id: item.id.videoId });
              // console.log(item.snippet);
            });
          })
          .finally(() => {
            console.log(arr);
            dispatch(
              setSearchResults({
                searchResults: arr,
              })
            );
            dispatch(
              setSearch({
                search: search1,
              })
            );
            // searchResults = arr;
            // console.log("Search Results"+searchResults);
            // sessionStorage.setItem("results", JSON.stringify(arr));
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex bg-[#0f0f0f] items-center justify-between fixed h-14 w-full">
      <div className="flex items-center pl-6 h-14">
        <DensityMediumIcon fontSize="small" />
        <div className="flex items-center justify-center p-8">
          <img
            alt=""
            src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
            className="h-8 w-8"
          />
          <p className="font-bold font-roboto text-xl tracking-tighter">
            YouTube <sup className="font-thin font-roboto">IN</sup>
          </p>
        </div>
      </div>
      {/* CENTER */}
      <div className="flex items-center h-12 w-[720px]">
        <div className="flex items-center justify-center">
          <input
            type="text"
            onChange={(e) => setSearch1(e.target.value)}
            placeholder="Search"
            value={search1}
            className="rounded-l-full rounded-r-none bg-black border border-[#2E2E2E] w-[500px] h-10 max-w-full p-4 outline-0 font-[16px]"
          />
          <button
            onClick={() => handleSearch()}
            className="rounded-r-full rounded-l-none bg-[#2E2E2E] pl-4 pr-4 h-10"
          >
            <Search />
          </button>
        </div>
        <button className="rounded-full p-2 bg-[#181818] ml-4">
          <Mic />
        </button>
      </div>
      {/* RIGHT */}
      <div className="flex items-center p-8 h-14">
        <div>
          <MoreVert className="mr-3" />
          <button className="text-blue-500 border border-[#2E2E2E] bg-transparent rounded-full p-2 w-28 hover:bg-[#202544]">
            <AccountCircleRounded /> Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
