/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const promo =document.querySelector('.promo__adv');
    // promo.forEach(item=>{
    //     item.remove();
    // });
    promo.remove();
    const genre = document.querySelector('.promo__genre');
    const bg = document.querySelector('.promo__bg');
    const ul = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const chkbx = addForm.querySelector('[type="checkbox"]');
    
    genre.innerHTML = 'драма';
    bg.style.cssText ='background-image: url(img/bg.jpg)';
    

   function sortArray(arr){
        arr.sort();
   }
   sortArray(movieDB.movies);
    function createMovieList(parent, films){
        parent.innerHTML='';
     films.forEach((film,i)=>{
        parent.innerHTML+=`<li class ="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
        </li>`;
     });
     document.querySelectorAll('.delete').forEach((film,i)=>{
         film.addEventListener('click',((e)=>{
            film.parentElement.remove();
            movieDB.movies.splice(i,1);
            createMovieList(ul,movieDB.movies);
         })); 
     });
    }
    createMovieList(ul,movieDB.movies);
    
   addForm.addEventListener('submit',(e)=>{
       e.preventDefault();
       let newFilm = addInput.value;
       const favorite =chkbx.checked;
       if(newFilm){
           if(newFilm.length>21){
               newFilm=`${newFilm.substring(0,22)}...`;

           }
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(ul,movieDB.movies);
            if(chkbx.checked){
                console.log('Добавляем любимый фильм');
            }
       }
           
      
   });
});
