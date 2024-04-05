import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const planCards = [
  { image: arcadeImg, title: "Arcade", price: "$9/mo", priceYear: "$90/yr" },

  { image: advancedImg, title: "Advanced", price: "$12/mo", priceYear: "$120/yr" },

  { image: proImg, title: "Pro", price: "$15/mo", priceYear: "$150/yr" },
];

export const addOns = [
  {
    title: "Online service",
    details: "Acces multiplayer games",
    price: "+$1/mo",
    priceYear: "+$10/yr"
  },

  {
    title: "Larger storage",
    details: "Extra 1TB cloud save",
    price: "+$2/mo",
    priceYear: "+$20/yr"
 
  },

  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    price: "+$2/mo",
    priceYear: "+$20/yr"

  },
];
console.log(addOns.map((addOpt)=>addOpt))