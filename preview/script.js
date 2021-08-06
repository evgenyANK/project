const btn = document.querySelector('button');
let i =0;
const overlay = document.querySelector('.overlay');

const del = (e)=>{
    console.log(e.currentTarget);
    console.log(e.type);
//     i++;
//     if(i==1){
//     btn.removeEventListener('click',del);
// }
};
const a = document.querySelector('a');
a.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
});


btn.addEventListener('click',del);
overlay.addEventListener('click',del);
