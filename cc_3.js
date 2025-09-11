const customers=[{
    names:["Tim","Dim","Zim"]},
    {customerEmail:["t@mail","dim@mail","zm@mail"]},
    {purchase:["Rock","table","pen"]
}];
console.log(customers);

Obj2={name:"kim", customerEmail:"kimm@mail", purchase:"tree"}
customers.push(Obj2)
console.log(customers);

obj3={name:"Tim", customerEmail:"t@mail", purchase: "Rock"}
customers.shift();

console.log(customers)

customers.splice(1,1,Dmm@mail)
customers.forEach(obj => (`Name: ${Object.name}` | `customer email: ${Object.customerEmail}` | `purchase: ${Object.purchase}` ));