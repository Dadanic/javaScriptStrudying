(function(){

    'use strict';

    const btn= document.querySelector('button');
    const myText= document.querySelectorAll('p');
    
     btn.addEventListener('click', function(){
         for(let i=0; i<myText.length; i++){
             myText[i].style.color= 'green';
        }
         
     })
})();