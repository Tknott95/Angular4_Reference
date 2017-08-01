var help = [
    'Usage',
    '   foo-app<input>'
];

if (process.argv[2] === 'help') {
    console.log(help.join('\n'));
}
