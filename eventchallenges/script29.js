(function () {

    "use strict";

    let pagetop = "";
    const myBody = document.querySelector('body');
    window.addEventListener('scroll', function () {
        pagetop = window.pageYOffset;

        switch (true) {
            case pagetop < 500: myBody.className = 'one'; break;
            case pagetop < 1000: myBody.className = 'two'; break;
            case pagetop < 1500: myBody.className = 'three'; break;
            case pagetop < 2000: myBody.className = 'four'; break;
            default: myBody.className = 'five';
        };
    });
})();
