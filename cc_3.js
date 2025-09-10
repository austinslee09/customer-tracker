let customers={
    names:['Tim','Dim','Zim'],
    customerEmail:['t@mail','dim@mail','zm@mail'],
    purchase:['Rock','table','pen']
};
console.log(customers);

let extra= customers.names.push("Kim");
let mailing= customers.customerEmail.push("Kimm@mail");
let but= customers.purchase.push("bee");
console.log(customers);

let removeOne= customers.names.shift();
let removetwo= customers.customerEmail.shift();
let removethree= customers.purchase.shift();
console.log(customers)
let re= customers.forEach(element => { console.log(element)
    
});