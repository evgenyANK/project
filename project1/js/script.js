'use strict';
let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        rememberFilms: function(){
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
        },
        start: function(){
             personalMovieDB.count =+prompt('Сколько фильмов вы уже посмотрели?','');
            while(personalMovieDB.count==null||personalMovieDB.count==''||isNaN(personalMovieDB.count)){
            personalMovieDB.count =+prompt('Сколько фильмов вы уже посмотрели?','');
            }   
        },
        detectMovieLevel: function(){
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
        },
        showMyDB: function(){
            if(!personalMovieDB.privat){
             console.log(personalMovieDB);
            }
        },
        writeYourGenres: function(){
            for (let i=0; i<3; i++){
                let a = prompt(`Ваш любимый жанр под номером ${i+1}`);
                if (a!=null&&a!=''){
                    personalMovieDB.genres[i]=a;
                }
                else{
                    console.log('error');
                    i--;
        
                }
            }
        },
        toggleVisibleMyDB : function(){
            if(personalMovieDB.privat==true){
                personalMovieDB.privat=false;
            }
            else{
                 personalMovieDB.privat=true;
            }
        }
};
personalMovieDB.start();
 personalMovieDB.rememberFilms();
 personalMovieDB.detectMovieLevel();
 personalMovieDB.writeYourGenres();
 personalMovieDB.showMyDB();
 personalMovieDB.toggleVisibleMyDB();
 personalMovieDB.genres.forEach(function(value,n, array){
    console.log(`Любимый жанр ${n+1} - это ${value} из массива  ${array})`
    );
 });

