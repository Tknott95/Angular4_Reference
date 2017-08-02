function getEnergyDrinks(drinks, maxCaff) {
    return drinks.filter(function(drink) {
        return drink.caffeine < maxCaff;
    });
}

var drinksName = getEnergyDrinks([
    { brand: "Monster Sun Rise", price: 4.12, caffeine: 300 },
    { brand: "Red Bull", price: 5.33, caffeine: 600 },
    { brand: "Rockstar", price: 3.10, caffeine: 700 },
], 400);

console.log(JSON.stringify(drinksName));
