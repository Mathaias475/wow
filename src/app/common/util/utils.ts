export const getColorNameByRarity = (rarity: string): string =>  {

  let color;
switch(rarity) {
  case 'Legendario':
    color = '#D45509';
    break;
  case 'Unico':
    color = '#7F2ABB';
    break;
  }
  return color!;


}
