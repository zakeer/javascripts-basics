
function displayMenuItems(category) {
  const menuItems = FOOD_ITEMS[category];
  if (menuItems) {
    const selectedItemIndex = readline.keyInSelect(menuItems);
    const selectedItem = menuItems[selectedItemIndex];

    if (selectedItem) {
      console.log(chalk.bgRed(`Thanks for Buying ${selectedItem}`))
    } else {
      showNotSelectedMessage()
    }
  } else {
    showNotSelectedMessage()
  }
}