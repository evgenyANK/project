'use strict';
const btn = document.querySelector('.btn');

function myAnimation(){
    const box =document.querySelector('.box');
    let pos =0;
    let id = setInterval(frame,20);
    function frame(){
        if(pos==300){
            clearInterval(id);
        }
        else{
            pos++;
            box.style.top=pos+'px';
            box.style.left=pos+'px';
        }
    }
}
btn.addEventListener('click',myAnimation);