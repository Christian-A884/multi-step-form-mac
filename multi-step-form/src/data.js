import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const planCards = [
  { image: arcadeImg, title: "Arcade", price: "$9/mo" },

  { image: advancedImg, title: "Advanced", price: "$12/mo" },

  { image: proImg, title: "Pro", price: "$15/mo" },
];

export const addOns = [
  {
    title: "Online service",
    details: "Acces multiplayer games",
    price: "+$1/mo",
  },

  {
    title: "Larger storage",
    details: "Extra 1TB cloud save",
    price: "+$2/mo",
  },

  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    price: "+$2/mo",
  },
];
