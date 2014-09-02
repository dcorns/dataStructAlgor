'use strict';
//Based on Data Structures and Algorithms with JavaScript, by Michael McMillian
//video rental system example
var kiosk = {};
var fs = require('fs');
var List = require('./list');

var customer = new List();

  //asynchronous call
  fs.readFile('films.txt','utf8',function(err, data){
    if (err) throw err;
    var arr = data.split('\n');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].trim();
    }
    console.log(arr);
  });



kiosk.checkOut = function(name, movie, movieList, customerList) {
  if(movieList.contains(movie)){
    var c = new Customer(name, movie);
    customerList.append(c);
    movieList.remove(movie);
  }
  else{
    console.log(movie + 'is not available');
  }
};

kiosk.test = function(){
  console.log('Available movies: \n');
  kiosk.displayList(movieList);
  kiosk.checkOut('Lisa Corns', 'The Godfather', movieList, customers);
  console.log("\nCustomer Rentals: \n");
  kiosk.displayList(customers);
};