export const getColorNameByRarity = (rarity: string): string => {
  let color;
  switch (rarity) {
    case "Legendario":
      color = "wow-orange";
      break;
    case "Unico":
      color = "wow-violet";
      break;
    case "Raro":
      color = "wow-blue";
      break;
    case "Magico":
      color = "wow-green";
      break;
    case "Comun":
      color = "wow-gray";
      break;
    default:
      color = "wow-gray";
      break;
  }
  return color!;
};

export const getColorBoxShadowByRarity = (rarity: string): string => {
  let color;
  switch (rarity) {
    case "Legendario":
      color = "#D45509";
      break;
    case "Unico":
      color = "#7F2ABB";
      break;
    case "Raro":
      color = "#0159B2";
      break;
    case "Magico":
      color = "#19F003";
      break;
    case "Comun":
      color = "#FAFAFB";
      break;
    default:
      color = "#FAFAFB";
      break;
  }
  return color!;
}
