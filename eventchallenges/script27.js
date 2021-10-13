(function(){

    'use strict';

    const myForm= document.querySelector('form');
    const myH= document.querySelector('h1');

    myForm.addEventListener('submit', function(evt){
        evt.preventDefault();

        const myNum= parseInt(document.querySelector('input').value);
        
        if (myNum){
            myH.style.fontSize= myNum + 'px';
        }
        else{
            alert('please enter a number!');
        } 

    }); 
})();