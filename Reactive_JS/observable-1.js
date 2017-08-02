var Observable = Rx.Observable;

var button = document.getElementById('button');

// var handler = function(e) {
//     alert('clicked');
//     button.removeEventListener('click', handler);
// };
//
// buttton.addEventListener('click', handler);

var clicks = Observable.fromEvent(button, 'click');
clicks.forEach(function(e) {
    alert('clicked');
});

[1,2,3].forEach(function(f) {
    console.log(f);
});