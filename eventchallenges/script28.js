(function(){

    'use strict';

    const myDiv= document.querySelector('div');

    myDiv.addEventListener('mouseover', function(){
        myDiv.className= 'big';
    });

    myDiv.addEventListener('mouseout', function(){
        myDiv.removeAttribute('class');
    });
})();