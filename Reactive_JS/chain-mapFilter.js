var drinks = [
    { brand: "Monster Sun Rise", price: 4.12, caffeine: 300 },
    { brand: "Red Bull", price: 5.33, caffeine: 600 },
    { brand: "Rockstar", price: 3.10, caffeine: 700 },
];

var filteredDrinkPrice =
    drinks
        .filter(function(drink) {
            return drink.price < 5;
        }).map(function(drink) {
            return drink.brand;
        });

filteredDrinkPrice.forEach(function(drink) {
    console.log(`Drinks less then 2 for 5: ${drink}`);
})
