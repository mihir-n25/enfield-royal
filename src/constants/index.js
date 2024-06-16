import {
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
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