//object
let car = {
    type: "SUV",
    model: "4Runner TRD Pro",
    color: "Barcelona Red Metallic"
};

console.log(typeof car);
// type property
car.type = "Toyota";
console.log("Car type:", car.type);

//wheel property
car.wheels = 4;
console.log("Car wheels:", car.wheels);