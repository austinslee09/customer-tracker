const customers=[{
    names:['Tim','Dim','Zim']},
    {customerEmail:['t@mail','dim@mail','zm@mail']},
    {purchase:['Rock','table','pen']
}];
console.log(customers);

Obj2={name:"kim", customerEmail:"kimm@mail", purchase:"tree"}
customers.push(Obj2)
console.log(customers);

let removeOne= customers.names.shift();
let removetwo= customers.customerEmail.shift();
let removethree= customers.purchase.shift();
console.log(customers)
customers.forEach(obj => (`Name: ${Object.name}` | `customer email: ${Object.customerEmail}` | `purchase: ${Object.purchase}` ));