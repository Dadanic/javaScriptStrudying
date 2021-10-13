(function(){

    'use strict';

    const AddBtn= document.querySelectorAll('button')[0];
    const DelBtn= document.querySelectorAll('button')[1];
    const myDiv= document.querySelector('div');

    AddBtn.addEventListener('click', function(){
        const newPara= document.createElement('p');
        const newPT= document.createTextNode('A new paragraph');
        newPara.appendChild(newPT);
        myDiv.appendChild(newPara);
    });

    DelBtn.addEventListener('click', function(){
        const Ps= document.querySelectorAll('p');
        myDiv.removeChild(myDiv.children[Ps.length-1]);
    })
})();