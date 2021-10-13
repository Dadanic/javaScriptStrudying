(function () {

    'use strict';

    let myKey;
    const myBody = document.querySelector('body');
    window.addEventListener('keydown', function (event) {
        myKey = event.which;
        switch (myKey) {
            case 66: myBody.className = 'one'; break;
            case 86: myBody.className = 'two'; break;
            case 67: myBody.className = 'three'; break;
            case 70: myBody.className = 'four'; break;
            case 71: myBody.className = 'five'; break;
            default: alert('HEY! NO CHEATING U DONKEY!');
        };
    });
})();