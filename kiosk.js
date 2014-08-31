'use strict';
//Based on Data Structures and Algorithms with JavaScript, by Michael McMillian
//video rental system example
var kiosk = {};
var fs = require('fs');
var movieList = require('./list');

//var movieList = new List();
var movies = "";

//asynchronous call
fs.readFile('films.txt','utf8',function(err, data){
  if (err) throw err;
  movies = data;
  setList();
});

//Process callback
function setList(){
  console.log(movies);
}