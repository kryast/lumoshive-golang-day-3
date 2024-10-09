// buatkan fungsi untuk menghitung keliling persegi panjang, fungsi greet contoh output hello (parameter)

let panjang = 100;
let lebar = 100;


function kelilingPersegiPanjang (){
    return panjang * lebar;
}

function greet (name) {
    return "Hello " + name;
}

console.log(greet("contoh"));
console.log(kelilingPersegiPanjang());

// buatkan properti dari 3 Object yang berupa name : , stock : , price : , description : 
// kemudian tampilkan object seperti ini : 
// name : tas
// price : 300.000
// stock : 7

let produk1 = {
    name : "baju",
    stock : 10,
    price : 300000,
    description : "baju lumoshive"
};
let produk2 = {
    name : "tas",
    stock : 5,
    price : 100000,
    description : "tas lumoshive"
};
let produk3 = {
    name : "celana",
    stock : 7,
    price : 200000,
    description : "celana lumoshive"
};

let daftarBarang = [produk1,produk2,produk3];
console.log(daftarBarang[1].name);
console.log(daftarBarang[0].price);
console.log(daftarBarang[2].stock);