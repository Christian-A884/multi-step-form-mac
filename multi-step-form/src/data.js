import arcadeImg from "./assets/images/icon-arcade.svg";
import advancedImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const plans = [
  { image: arcadeImg, title: "Arcade", monthlyPrice: 9 },

  { image: advancedImg, title: "Advanced", monthlyPrice: 12 },

  { image: proImg, title: "Pro", monthlyPrice: 15 },
];

export const addOns = [
  {
    title: "Online service",
    details: "Acces multiplayer games",
    monthlyPrice: 1,
  },
  {
    title: "Larger storage",
    details: "Extra 1TB cloud save",
    monthlyPrice: 2,
  },
  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    monthlyPrice: 2,
  },
];
console.log(addOns.map((addOpt) => addOpt));
