
// Event untuk menampilkan Form input Data
document.getElementById("input-data").addEventListener("click", function(){
    document.getElementById("list").style.display = "none";
    document.getElementById("input").style.display = "block";
});
// End Event untuk menampilkan Form input Data 

// Event untuk menampilkan List Data
document.getElementById("list-data").addEventListener("click", function(){
    document.getElementById("input").style.display = "none";
    document.getElementById("list").style.display = "block";
});
// End Event untuk menampilkan List Data

// Deklarasi variable array
let array = [];

// Trigger Event Klik tombol Save
document.getElementById("save").addEventListener("click", function(){
    // membuat element <p></p>
    let text = document.createElement("p");

    // mengambil nilai dari input user
    let nama = document.getElementById("nama").value;

    // membuat variable list data
    let list = document.getElementById("list");

    if (!nama) {
        alert ("masukkan data"); // alert jika Data yang dimasukkan kosong
    } else {
        text.innerHTML = nama; // Jika input user memiliki value, masukkan ke dalam element <p>  
        alert ("Data Berhasil Disimpan"); // alert ketika input berhasil
        document.getElementById("nama").value = ""; // kotak input user diubah kosong kembali
        array.push(text); // element <p> yang telah mempunyai value, di push ke dalam array
        list.appendChild(array[array.length -1]) ; /* membuat element ke dalam List data berdasarkan
        array dengan index terakhir
        */
    }
});