const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9caca4162amsh72ab63cfa62c031p1ba58djsn4f47edec64df",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

const ytSearch = async () => {
  // await fetch(
  //   "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
};

const ytVideos = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9caca4162amsh72ab63cfa62c031p1ba58djsn4f47edec64df",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  let arr = [];
  await fetch(
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=o2K1BJPvJwg&part=id%2Csnippet&type=video&maxResults=10",
    options
  )
    .then((response) => {
      response.json().then((data) => {
        console.log(data.items[0].snippet);
        data.items.forEach((item) => {
          arr.push(item.snippet.title);
          sessionStorage.setItem("arr", arr);
        });
      });
    })
    // .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export { ytSearch, ytVideos };
