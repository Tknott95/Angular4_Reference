function getEnergyDrinks(drinks) {
    var drinksPrice = [],
        counter,
        drink;

    for(counter = 0; counter < drinks.length; counter++) {
        drink = drinks[counter];
        drinksPrice.push(drink.price);
    }

    return drinksPrice;
}

var drinksPrice = getEnergyDrinks([
    { brand: "Monster Sun Rise", price: 4.12, caffeine: 300 },
    { brand: "Red Bull", price: 5.33, caffeine: 600 },
    { brand: "Rockstar", price: 3.10, caffeine: 700 },
]);

console.log(JSON.stringify(drinksPrice));
