var name = 'trevor knott';

var upCase = name.split(' ')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ');

console.log(upCase);
