'use strict';

window.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent =document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');
     
    function hideContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
        });
        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabsContent(i=0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    tabsParent.addEventListener('click',(e)=>{
        console.dir(e.target);
        const target = e.target;
        if(target&&target.classList.contains('tabheader__item')){
            tabs.forEach((item,i)=>{
                if(target==item){
                    hideContent();
                    showTabsContent(i);
                }
            });
        }
    });
hideContent();
showTabsContent();
const deadline = new Date(`2021-08-11`);
console.log(deadline.getDate());
function getTimeRemaining(endTime){
    const t =new Date(Date.parse(endTime)-Date.parse(new Date()) );
    document.querySelector('#days').innerHTML=getZero(t.getDate());
    document.querySelector('#hours').innerHTML=getZero(t.getHours());
    document.querySelector('#minutes').innerHTML=getZero(t.getMinutes());
    document.querySelector('#seconds').innerHTML=getZero(t.getSeconds());
    
}
function getZero(num){
    if((num>0)&&(num<10)){
        return(`0${num}`);
    }
    else{
        return num;
    }
}
getTimeRemaining(deadline);
const timer =setInterval(getTimeRemaining,1000,deadline);
if(Date.parse(deadline)-Date.parse(new Date())<=0){
    clearInterval(timer);
}
const buttons = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');
function openModal(){
    modal.style.display='block';
    document.body.style.overflow='hidden';
    clearTimeout(time);
}
buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
         openModal();
    });
});
function closeModal(){
    modal.style.display='none';
     document.body.style.overflow='';
}

modalClose.addEventListener('click',closeModal);
modal.addEventListener('click',(e)=>{
    if(e.target===modal){
        closeModal();
    }
});
document.addEventListener('keydown',(e)=>{
    if((e.code==='Escape')&&(modal.style.display=='block')){
        closeModal();
    }
});
//const time =setTimeout(openModal,5000);
function showModalByScroll(){
    if(window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
        openModal();
        window.removeEventListener('scroll',showModalByScroll);
    }
}
window.addEventListener('scroll',showModalByScroll);
//классы для карточек
class MenuCard{
    constructor(src,alt,title,desc,price,parentSelector,...classes){
        this.src=src;
        this.alt=alt;
        this.title=title;
        this.desc=desc;
        this.price=price;
        this.transfer=30;
        this.classes=classes;
        this.parentSelector=parentSelector;
        this.changeToUAN();

    }
        changeToUAN(){
            this.price=this.price*this.transfer;
        }
        render(){
            const div= document.createElement('div');
            if(this.classes.length===0){
                div.classList.add('menu__item');
            }else{
                this.classes.forEach(classname=>{div.classList.add(classname);});
            }
            
            
            
            const parent = document.querySelector(this.parentSelector);
            div.innerHTML=`
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.desc}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            `;
            parent.append(div);
        }
}
const card1 = new MenuCard("img/tabs/vegy.jpg","vegy",'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',70,'div.menu__field .container');
card1.render();
const card2 = new MenuCard("img/tabs/elite.jpg","elite",'Меню “Премиум"',
'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
6,'div.menu__field .container','menu__item','big');
card2.render();
const card3 = new MenuCard("img/tabs/post.jpg","post",'Меню "Постное"',
'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
4,'div.menu__field .container','menu__item','big');
card3.render();
});