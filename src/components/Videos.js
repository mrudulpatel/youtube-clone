import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSearchResults } from "../slices/searchResultsSlice";
import Video from "./Video";
import words from "random-words";

const Videos = () => {
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (state) => state.searchResults.arr.searchResults
  );
  useEffect(() => {
    setResults(searchResults);
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    const fetchFromAPI = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9caca4162amsh72ab63cfa62c031p1ba58djsn4f47edec64df",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };
      console.log("Fetching data for first time");
      await fetch(
        `https://youtube-v31.p.rapidapi.com/search?q=${words(2)}&part=snippet%2Cid&regionCode=IN&maxResults=100`,
        options
      )
        .then((response) => {
          let arr = [];
          response
            .json()
            .then((data) => {
              data.items.forEach((item) => {
                arr.push({ ...item.snippet, id: item.id.videoId });
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
                  search: "new",
                })
              );
            });
        })
        .catch((err) => console.error(err));
    };
    fetchFromAPI();
  }, []);
  return (
    <div className="p-5">
      {results?.length >= 0 ? (
        <Grid container columns={4}>
          {results.map((video, i) => (
            <Grid item xs="1">
              <Video
                title={video?.title}
                channel={video?.channelTitle}
                thumbnail={video?.thumbnails.high.url}
                index={i}
                id={video?.id}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p className="h-screen">Please search to get results</p>
      )}
    </div>
  );
};

export default Videos;
