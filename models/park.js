const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function (name) {
  this.dinosaurs.push(name);
};

Park.prototype.removeDinosaur = function (name) {
  let index = this.dinosaurs.indexOf(name);
  if (index > 1) {
    this.dinosaurs.splice(index, 1)
  }

Park.prototype.mostPopDino = function () {
  let popDino = name;
  for (dinosaur of this.dinosaurs)
  if (dinosaur.guestsAttractedPerDay > popDino.guestsAttractedPerDay) {
    popDino = dinosaur;
    };
  return popDino.species;
};

Park.prototype.findDinos = function (input) {
  let foundDinos = [];
  for (dinosaur of this.dinosaurs)
  if (dinosaur.species === input ) {foundDinos.push(input)};
  return foundDinos;
};

Park.prototype.totalVistors = function () {
  let total = 0;
  for (dinosaur of this.dinosaurs) {
  total += dinosaur.guestsAttractedPerDay;
  };
  return total;
};

Park.prototype.yearlyVisitors = function (visitors) {
  let total = visitors;
  total *= 365;
  return total;
};

Park.prototype.revenue = function (visitors) {
  let total = visitors *= this.price;
  return total;
  };
};
module.exports = Park;
