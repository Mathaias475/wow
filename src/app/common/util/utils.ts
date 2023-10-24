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
  return color;
};

export const getColorClassByName = (name: string): string => {
  let color;
  switch (name) {
    case "Guerrero":
      color = "#96775A";
      break;
    case "Paladin":
      color = "#B96E9E";
      break;
    case "Caballero de la Muerte":
      color = "#A91C33";
      break;
    case "Brujo":
      color = "#8788EE";
      break;
    case "Druida":
      color = "#F2780C";
      break;
    case "Cazador":
      color = "#A9D372";
      break;
    case "Sacerdote":
      color = "#FFFFFF";
      break;
    case "Picaro":
      color = "#FEF468";
      break;
    case "Chaman":
      color = "#0086FF";
      break;
    case "Mago":
      color = "#40C6EB";
      break;
    default:
      color = "#FFFFFF";
  }
  return color;
};
