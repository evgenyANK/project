'use strict';
let numberOfFilms;
function start(){
    numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?',100);
    while(numberOfFilms==null||numberOfFilms==''||isNaN(numberOfFilms)){
        numberOfFilms =+prompt('Сколько фильмов вы уже посмотрели?',100);
    }
}
 start();
 let personalMovieDB;
 function rememberFilms(){
     personalMovieDB =  
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
 }
rememberFilms();
function detectMovieLevel(){
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
}detectMovieLevel();
        
function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for (let i=0; i<3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i+1}`);
        if (a!=null||a!=''){
            personalMovieDB.genres[i]=a;
        }
        else{
            console.log('error');
            i--;

        }
    }
}
writeYourGenres();
showMyDB();
