var exchanges = [ /* Used data pulled from web here */
    [
        { symbol: "XFX", price: 240.22, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ],
    [
        { symbol: "AXJ", price: 120.22, volume: 5323 },
        { symbol: "SYN", price: 88.47, volume: 98275 }
    ]
];

/* Hand Made concat function */
Array.prototype.concatAll = function() {
    var results = [];

    this.forEach(function(subArray) {
        subArray.forEach(function(item) {
            results.push(item);
        });
    });

    return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
    console.log(JSON.stringify(stock));
})