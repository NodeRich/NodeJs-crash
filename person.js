class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello ${this.name}. He is ${this.age}`);
    }
}
module.exports = person;