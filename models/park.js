const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const dinoNumber = this.dinosaurs.indexOf(dinosaur);
  this.dinosaur.splice(dinoNumber, 1);
};



module.exports = Park;
