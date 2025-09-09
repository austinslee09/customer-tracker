let customers={
    Names:['Tim','Dim','Zim'],
    CustomerEmail:['t@mail','dim@mail','zm@mail'],
    Purchase:['Rock','table','pen']
};
console.log(customers);
customers.push("Kim");
customers.Names.shift(1);
console.log(customers)