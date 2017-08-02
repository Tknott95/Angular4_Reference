var exchanges = [ /* Used data pulled from web here */
    [
        { symbol: "XFX", price: 240.22, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 }
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

exchanges.forEach(function(e) {
    e.forEach((function(s) {
        console.log(JSON.stringify(s));
    }))
})