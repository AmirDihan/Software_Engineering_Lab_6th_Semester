///Working of Array
const arr=["book1","book2","book3"];///Initializing the array

arr.push("book4");///Adding a new Book in the array

console.log("\n");

arr.forEach(book =>{
    if(book=="book2")
        console.log(`Found ${book}`);///Searching through array
});
console.log("\n");
console.log("Displaying all stored books in array");

for(let i=0; i<arr.length; i++)     ///Displaying all stored books in array
    console.log(arr[i]);

console.log("\n");

///Working of Object
let members = {
    M001: { name: 'Dihan', id: 'C223094'},
    M002: { name: 'Evan' , id: 'C223085'}
};
console.log("Mapping through keys");
for (member in members) {
    console.log(members[member].id); ///Mapping keys to member details.
}
console.log("\n");

///Tuple like in JavaScript
const book1 = Object.freeze({
    id: "C223094",
    title: "Teach yourself JavaScript",
    author: "Amir Hossan Dihan"
});

console.log(`Book1 id before change ${book1.id}`);

book1.id = "C223085";  //  No effect

console.log(`Book1 id after change ${book1.id}`); // Output: "C223094"
