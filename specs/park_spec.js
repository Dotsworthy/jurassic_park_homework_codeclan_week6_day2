const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
  dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
  dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 35);
  dinosaur3 = new Dinosaur('t-rex', 'carnivore', 40);
  park = new Park('Dino Land', 8, [dinosaur1]);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Land');
  });

  it('should have a ticket price', function (){
    const actual = park.price;
    assert.strictEqual(actual, 8);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.strictEqual(actual.length, 1);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual.length, 2);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual([],[])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur2);
    const actual = park.mostPopDino();
    assert.deepStrictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinos('t-rex')
    assert.deepStrictEqual(actual.length, 2)
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur2);
    const actual = park.totalVistors();
    assert.strictEqual(actual, 85);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const total = park.totalVistors();
    const actual = park.yearlyVisitors(total);
    assert.strictEqual(actual, 18250)
  });

  it('should be able to calculate total revenue for one year', function () {;
  const total = park.totalVistors();
  const year = park.yearlyVisitors(total);
  const actual = park.revenue(year);
  assert.strictEqual(actual,146000)
  });

});
