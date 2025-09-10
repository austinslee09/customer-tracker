let customers={
    Names:['Tim','Dim','Zim'],
    CustomerEmail:['t@mail','dim@mail','zm@mail'],
    Purchase:['Rock','table','pen']
};
console.log(customers);

let extra= customers.Names.CustomerEmail.Purchase.push("Kim", "kimm@MediaList", "bee");
console.log(customers);

let removeOne= customers.shift();
console.log(customers)
