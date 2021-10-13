(function(){

    'use strict';

    const btn= document.querySelector('button');
    const myText= document.querySelector('p');
       
        btn.addEventListener('click', function(){
            myText.style.color= 'green';
        });
})();