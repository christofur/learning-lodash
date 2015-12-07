var path = require('path');
var expect = require('chai').expect;

var problems = require(path.join(__dirname, '..', './problems.js'));
problems = new problems();

describe('problems()', function () {
  'use strict';

  it('solves_problem1', function () {
    expect(problems.solve(1)).to.equal(2318);
  });

});
