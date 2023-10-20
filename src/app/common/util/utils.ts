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
