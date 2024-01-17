const me = {
  firstName: "Milo",
  middleName: "Hari",
  lastName: "Shanley",
  knownName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(me.knownName());

const me2 = {
  firstName: "Joe",
  middleName: "Bob",
  lastName: "Jackson",
};
console.log(me.knownName.call(me2));

//Q4
function updateName(name) {
  let originalName = name;

  return function newName(updatedName) {
    originalName = updatedName;
    return updatedName;
  };
}
const _updateName = updateName();
console.log(_updateName);
console.log(_updateName("milo"));
console.log(_updateName("Dillon"));

function Animal(species, nutrition) {
  this.species = species;
  this.nutrition = nutrition;
}

const animal1 = new Animal("Lion", "carnivore");
console.log(animal1);

class Ship {
  constructor(type, name, origin) {
    this.type = type;
    this.name = name;
    this.origin = origin;
  }

  shipName() {
    return this.name;
  }
}

const newShip = new Ship("Defiant", "USS Defiant", "Earth");
console.log(newShip.shipName());

class ScienceShip extends Ship {
  constructor(type, name, origin, laboratories) {
    super(type, name, origin);
    this.laboratories = laboratories;
  }

  shipInfo() {
    return this.shipName() + " " + this.laboratories;
  }
}

const scienceShip1 = new ScienceShip("Science", "Aurora", "Earth", 3);
console.log(scienceShip1.shipInfo());
