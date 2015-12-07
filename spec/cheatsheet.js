var expect = require('chai').expect;
var _ = require('lodash');
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

describe('arrays()', function () {
    'use strict';

    it('chunks', function () {
        var chunked = _.chunk(alphabet, 2); //[a,b][c,d][e,f]..
        expect(chunked.length).to.equal(13);
        expect(chunked[3][0]).to.equal('g');
    });

    it('compacts', function(){
        var compacted = _.compact([0, 1, false, 2, '', 3]); //removes 0, false, '' etc..
        expect(compacted.length).to.equal(3);
        expect(compacted[0]).to.equal(1);
    });

    it('dropsRightWhile', function(){
        var users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        // dropRightWhile gets rid of items which don't match the predicate (middle argument)
        // pluck grabs a single value from a range of values - ie, 'user' brings out the name 'barney', 'fred' etc

        var pluck1 = _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
        expect(pluck1.length).to.equal(2);
        expect(pluck1[0]).to.equal('barney');

        var pluck2 = _.pluck(_.dropRightWhile(users, 'active', false), 'user');
        expect(pluck2.length).to.equal(1);

        var pluck3 = _.pluck(_.dropRightWhile(users, 'active'), 'user');
        expect(pluck3.length).to.equal(3);
    });

    it('fills', function(){
        var array = [1, 2, 3];

        _.fill(array, 'a');
        expect(array[1]).to.equal('a');

        array = _.fill(Array(3), 2);
        expect(array[1]).to.equal(2);

        array = _.fill([4, 6, 8], '*', 1, 2);
        expect(array[1]).to.equal('*');
        expect(array[2]).to.equal(8);
    });

    it('finds index', function(){

        var users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
        ];

        var result = _.findIndex(users, function(chr) {
            return chr.user == 'barney';
        });

        expect(result).to.equal(0);

        result = _.findIndex(users, { 'user': 'fred', 'active': false });

        expect(result).to.equal(1);

        result = _.findIndex(users, 'active', false);

        expect(result).to.equal(0);

        result = _.findIndex(users, 'active');

        expect(result).to.equal(2);

    });

    it('finds last index', function(){

        var users = [
            { 'user': 'barney',  'active': true },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': false }
        ];

        var result = _.findLastIndex(users, function(chr) {
            return chr.user == 'pebbles';
        });

        expect(result).to.equal(2);

        result = _.findLastIndex(users, 'active', false);

        expect(result).to.equal(2);

        result = _.findLastIndex(users, 'active');

        expect(result).to.equal(0);

    });

    it('gets first', function(){
        var result = _.first([1, 2, 3]);

        expect(result).to.equal(1);

        result = _.first([]);

        expect(result).to.equal(undefined);

    });

    it('flattens', function(){

        //flatten by one level
        var result = _.flatten([1, [2, 3, [4]]]);

        expect(result.length).to.equal(4);
        expect(result[3][0]).to.equal(4);

        //deep flatten - flatten all levels
        result = _.flatten([1, [2, 3, [4]]], true);

        expect(result.length).to.equal(4);
        expect(result[3]).to.equal(4);

    });

    it('flattens deep', function(){

        var result = _.flattenDeep([1, [2, 3, [4]]]);

        expect(result.length).to.equal(4);
        expect(result[3]).to.equal(4);
    });

    it('gets intersection', function(){
        var result = _.intersection([1, 2], [4, 2], [2, 1]); //gets flat list of values which appear in all elements

        expect(result.length).to.equal(1);
        expect(result[0]).to.equal(2);
    });

    it('pulls', function(){

        var array = [1, 2, 3, 1, 2, 3];
        _.pull(array, 2, 3); //removes 2 and 3, mutates array

        expect(array.length).to.equal(2);
        expect(array[0]).to.equal(1);

    });

    it('pulls at', function(){

        var array = [5, 10, 15, 20];
        var evens = _.pullAt(array, 1, 3); //removes elements at index 1,3 - returns the removed elements

        array = [5, 10, 15, 20];
        var odds = _.pullAt(array, 0, 2); //removes elements at index 1,3 - returns the removed elements

        expect(evens[1]).to.equal(20);
        expect(odds[1]).to.equal(15);

    });


});
