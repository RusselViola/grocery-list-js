(function() {
  // build grocery list and insert into DOM, here
  var leek = new GroceryItem("Leek", 4);
  var potato = new GroceryItem("Potato", 4);
  var onion = new GroceryItem("Onion");
  var garlic = new GroceryItem("Garlic clove", 2);
  var carrot = new GroceryItem("Carrot", 1);
  var salt = new GroceryItem("Salt(tbsp)", 1);
  var pepper = new GroceryItem("Pepper(tbsp)", 0.5);
  var thyme = new GroceryItem("Thyme(tsp)", 0.5);
  var redPepperFlakes = new GroceryItem("Red Pepper Flakes(tsp)", 0.25);

  var groceryList = new GroceryList("China-Town Market", "2016/09/02");

  groceryList.addItem(leek);
  groceryList.addItem(potato);
  groceryList.addItem(onion);
  groceryList.addItem(garlic);
  groceryList.addItem(carrot);
  groceryList.addItem(salt);
  groceryList.addItem(pepper);
  groceryList.addItem(thyme);
  groceryList.addItem(redPepperFlakes);

  document.getElementById('main').innerHTML = groceryList.toHTML();
})();
