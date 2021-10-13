(function(){

    'use strict';

    const AddBtn= document.querySelectorAll('button')[0];
    const DelBtn= document.querySelectorAll('button')[1];
    const myDiv= document.querySelector('div');
    const PrintBtn= document.querySelectorAll('button')[2];

    PrintBtn.addEventListener('click', function(){
        // console.log(myDiv.childNodes.length); 
        console.log(myDiv.children.length);
    })

    AddBtn.addEventListener('click', function(){
        const Ps= document.querySelectorAll('p')
        const newPara= document.createElement('p');
        const newPT= document.createTextNode(`This is paragraph number ${Ps.length+1}`);
        newPara.appendChild(newPT);
        myDiv.appendChild(newPara);
    });

    DelBtn.addEventListener('click', function(){
        if (myDiv.children.length ==1){
            alert("Don't delete the last paragraph!");
        }
           /* if ($('#div').is(':empty')){
            alert("Don't delete the last paragraph!"); 
        } // why does this not work? */
        else{
            const Ps= document.querySelectorAll('p');
        myDiv.removeChild(myDiv.children[Ps.length-1]);}
    })
})();