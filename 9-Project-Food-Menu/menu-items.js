import readline from 'readline-sync';
import { showError } from './showError.js'

const VEG_ITEMS = [
  'Veg Biryani        = 120',
  'Veg Fried Rice     =  90',
  'Upma               =  45'
];

const NON_VEG_ITEMS = [
  'Chicken Biryani    = 140',
  'Mutton Biryani     = 160',
  'Fish Biryani       = 180',
];

const DESERTS_ITEM = [
  'ICE CREAM          = 75',
  'Chocolate          = 55',
];

const BEVERAGES_ITEMS = [
  'Pepsi              = 25',
  'Coke               = 25'
];

const FOOD_ITEMS = {
  'Veg': VEG_ITEMS,
  'Non-Veg': NON_VEG_ITEMS,
  'Deserts': DESERTS_ITEM,
  'Beverages': BEVERAGES_ITEMS
}


export function showMenuItems(category) {
  const menuItems = FOOD_ITEMS[category];
  if(menuItems) {
    const menuItemIndex = readline.keyInSelect(menuItems);
    const selectedItem = menuItems[menuItemIndex];
    return selectedItem;
  } else {
    showError();
  }
}
