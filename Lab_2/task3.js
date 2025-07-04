class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        //why this: Each object have its own unique properties
        //and methods(when using new class)
    }
    greet(){console.log( `Hello ${this.name}`)}

}
let p = new Person("Dihan", 24);
p.greet();