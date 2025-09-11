const customers=[{
    name: "Tim", customerEmail: "t@mail", purchase:"rock"},
    {name: "Zim", customerEmail: "zimm@mail", purchase:"table"},
    {name: "Dim", customerEmail: "dm@mail", purchase:"key"
}];
console.log(customers);

Obj2={name:"Pim", customerEmail:"Pimm@mail", purchase:"tree"}
customers.push(Obj2)
console.log(customers);

obj3={name:"Tim", customerEmail:"t@mail", purchase: "Rock"}
customers.shift();

console.log(customers)

customers.splice(2,1,"dmm@mail");

console.log(customers)

customers.forEach(obj => (`Name: ${Object.name}` | `customer email: ${Object.customerEmail}` | `purchase: ${Object.purchase}` ));

console.log(customers)

customers.purchase.push(2,2,"glue")

console.log(customers)