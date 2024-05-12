import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Motorcycles", "Shop", "Services", "Ride"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Embrace the Spirit of Adventure.",
        "Where Legends Roar.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4.17,
    },
    {
      id: 2,
      textLists: ["Precision, Passion, Performance"],
      video: highlightSecondVideo,
      videoDuration: 3.10,
    },
    {
      id: 3,
      textLists: [
        "Heritage on Two Wheels",
        "Every ride is a story waiting to be told.",
      ],
      video: highlightThirdVideo,
      videoDuration: 4.33,
    },
    {
      id: 4,
      textLists: ["Built not just to ride, but to reign the roads."],
      video: highlightFourthVideo,
      videoDuration: 5.73,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];