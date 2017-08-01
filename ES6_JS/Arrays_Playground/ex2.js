var people = [
    {
        name: 'Fred'
    },
    {
        name: 'Alphiee'
    }
];

var people2 = [
    {
        name: 'Trev'
    },
    {
        name:'Rocky'
    }
];

people.concat(people2).forEach( function(person) {
    console.log(person.name);
});