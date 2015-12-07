'use strict';

var problemsCollection = new Array();
var problem1 = require('./problems/problem1.js');
problemsCollection.push(new problem1());

var problems = function () {

    this.solve = function(problemNumber){
        return problemsCollection[problemNumber - 1].solve();
    }
}

if ( typeof module !== "undefined" ) {
  module.exports = problems;
}