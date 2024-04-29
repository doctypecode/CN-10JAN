// Object Oriented Programming
// A object can be created to access the properties and methods of a class
// Classes are basically a blue print (structure), to created multiple instances of similar objects

// function Car(type){
//     this.type = type
// }

// Car = {
//     price: '20 Lacs',
//     pie: '3.14'
// }


class Car{
    engine;
    length;
    company;
    color;
    // private property
    static pie = '3.14'

    constructor(model, color, type){
        this.model = model
        this.color = color
        this.type = type
        this.prevColor = null
    }

    // private method
    #calculatePrice(){
        // Will do some calculation on various parameters (state Tax,)
        // return final price 
    }

    set setColor(value){
        this.prevColor = this.color;
        this.color = newColor
    }

    set setPrice(value){
        Car.price = value
    }
    

    get getPrice(){
        return  Car.price
    }

    setModel(){
        this.model = value
    }

    getModel(){
        return this.model
    }

    getColor(){
        return this.color
    }

    getType(){
        return this.type
    }
}


// getModel(){
//     return 2015;
// }

// Encapsulation
// Constructor only run once



// console.log(car.getType(), car1.getType())

// car.setColor('blue');
// Car.price = '25L'
// car.setPrice = '20 Lacs'
// console.log(car.getPrice, car.getColor())
// console.log(car1.getPrice, car1.getColor())

// getter - TO get the value of a particular property
// getter - will have no parameters
// setter - To set the value of a particular property
// setters - will have one parameter (value)

// ES10 2019

class Parent{
    constructor(name){
        this.name = name
    }
}

class Child extends Parent{
    constructor(){
        super('Coding Ninjas');
    }
}

const child = new Child();
aObject.someParentProperty()



const car = new Car(2015, 'red');

class Sedan extends Car{
    price;

    constructor(price){
        super(2015, 'red', 'sedan'); // Consider super as the constructor of your parent class
        this.price = price
    }

    calculatePrice

}

const sedan = new Sedan('20 Lacs');
sedan.getModel();

console.log(sedan.getColor())

// class SUV {
//     price

//     constructor(){
//     }

//     calculatePrice(){

//     }
// }