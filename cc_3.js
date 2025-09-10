let customers={
    Names:['Tim','Dim','Zim'],
    CustomerEmail:['t@mail','dim@mail','zm@mail'],
    Purchase:['Rock','table','pen']
};
console.log(customers);

let extra= customers.Names.push("Kim");
console.log(customers);

let removeOne= customers.shift();
console.log(customers)
