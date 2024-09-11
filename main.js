const Animal ={
    name: "",
    sound: function(){
        return "Animal sound";
    }
};

const Dog = Object.create(Animal);
Dog.sound = function(){
    return "woof!";
};

const Cat = Object.create(Animal);
Cat.sound = function(){
    return "Meow!";
};

const Cow = Object.create(Animal);
Cow.sound = function(){
    return "Mooo!";
};

const Lion = Object.create(Animal);
Lion.sound = function(){
    return "Roar!";
};

const Elephant = Object.create(Animal);
Elephant.sound = function(){
    return "Ugh-ugh!";
};

const dog = Object.create(Dog);
dog.name = "Bax";

const cat = Object.create(Cat);
cat.name = "Mia";

const cow = Object.create(Cow);
cow.name = "Muha";

const lion = Object.create(Lion);
lion.name = "Roby";

const elephant = Object.create(Elephant);
elephant.name = "Rud";

console.log(dog.name + " says: " + dog.sound());
console.log(cat.name + " says: " + cat.sound());
console.log(cow.name + " says: " + cow.sound());
console.log(lion.name + " says: " + lion.sound());
console.log(elephant.name + " says: " + elephant.sound());