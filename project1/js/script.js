'use strict';
let numberOfFilms =prompt('Сколько фильмов вы уже посмотрели?',100);
let personalMovieDB =  
    {count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false};
   
    for(let i=0;i<2;i++){
       let a= prompt('Последний просмотренный вами фильм?','');
       let b =prompt('На сколько вы его оцениваете?','');
        if(a!=null&&b!=null&&a!=''&&b!=''&&a.length<20){
            personalMovieDB.movies[a]=b;
        }else{
            console.log('error');
            i--;
        }
    }
    if (personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count>=10&&personalMovieDB.count<=30){
        console.log("Вы классический зритель");
    }
     else if (personalMovieDB.count>30){
        console.log("Вы киноман");
    }  
    else{
        console.log("Произошла ошибка");
    }
        


console.log(personalMovieDB);
