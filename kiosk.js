'use strict';
//Based on Data Structures and Algorithms with JavaScript, by Michael McMillian
//video rental system example
var kiosk = {};
var fs = require('fs');
var movieList = require('./list');

var movies = createArr('films.txt', function (stuff){
  for (var i = 0; i < movies.length; i++){
    movieList.append(stuff[i]);
  }
});

function createArr(file) {
  //asynchronous call
  fs.readFile(file,'utf8',function(err, data){
    if (err) throw err;
    var arr = data.split('\n');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }
    console.log(arr);
    return arr;
  });
}

function displayList(list){
  for (list.front(); list.hasNext();){
    console.log(list.next());
  }
}