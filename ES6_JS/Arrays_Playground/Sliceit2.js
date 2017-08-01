var troll = {
    name: 'troll-man'
};

var filters = {
    'hyphenNoMohh': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input = 'name | hyphenNoMohh | uppercase';

var sections = input.split('|').map(x => x.trim());
var ref = troll[sections[0]];
var output = sections
    .slice(1)
    .reduce((prev, next) => {
    if (filters[next]) {
        return filters[next].call(null, prev);
}
return prev;
    }, ref);

console.log(output);
