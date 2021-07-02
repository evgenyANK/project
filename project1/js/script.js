'use strict';
let numberOfFilms =prompt('Сколько фильмов вы уже посмотрели?',100);
let personalMovieDB =  
    {count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false};
let lastFilm1 = prompt('Последний просмотренный вами фильм?','');
let reit1 = prompt('На сколько оцениваете его?','');
let lastFilm2 = prompt('Последний просмотренный вами фильм?','');
let reit2 = prompt('На сколько оцениваете его?','');
personalMovieDB.movies[lastFilm1]=reit1;
personalMovieDB.movies[lastFilm2]=reit2;

console.log(personalMovieDB);
