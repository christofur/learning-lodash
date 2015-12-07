'use strict';
var _ = require('lodash');

/*

    If we list all of the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9.
    The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

 */

var problem1 = function () {
    this.solve = function(){
        return solveWithoutLodash();
    }

    function solveWithoutLodash(){

        var total = 0;

        for(var i = 1; i < 100; i++)
        {
            if(i % 3 == 0 || i % 5 == 0)
            {
                total = total + i;
            }
        }

        return total;

    }

    function solveWithLodash(){

    }

}

module.exports = problem1;