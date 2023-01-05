import readline from 'readline-sync';
// Define the Data for the application
const VEG = 'Veg';
const NON_VEG = 'Non-Veg';
const DESERTS = 'Deserts';
const BEVERAGES = 'Beverages'
const LUNCH = 'Lunch'

const MENU_CATEGORY = [
  VEG,      // 0
  NON_VEG,  // 1
  DESERTS,  // 2
  BEVERAGES,// 3
  LUNCH,    // 4
];

export function showMenu() {
  const selectedIndex = readline.keyInSelect(MENU_CATEGORY);
  const selectedMenu = MENU_CATEGORY[selectedIndex];
  return selectedMenu;
}
