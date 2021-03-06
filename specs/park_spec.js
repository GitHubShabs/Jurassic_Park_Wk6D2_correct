const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {


  beforeEach(function () {
    park = new Park('Jurassic Park', '£30.25');
    dino1 = new Dinosaur('T-rex', 'herbivore', 20);
    dino2 = new Dinosaur('diplodocus', 'carnivore', 15);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, '£30.25');
  });

  it('should have a collection of dinosaurs',function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection',function() {
    park.addDinosaur(dino1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dino1]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaur(dino1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
