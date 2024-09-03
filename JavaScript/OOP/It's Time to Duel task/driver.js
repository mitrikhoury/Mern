const Unit = require('./Unit');
const Effect = require('./Effect');

// Create instances of Units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Turn 1: Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);

// Turn 2: Make an instance "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);

// Turn 3: Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
pairProgramming.play(redBeltNinja);

// Turn 3: "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);