document.getElementById("input-data").addEventListener("click", function(){
    document.getElementById("list").style.display = "none";
    document.getElementById("input").style.display = "block";
    

});

document.getElementById("list-data").addEventListener("click", function(){
    document.getElementById("input").style.display = "none";
    document.getElementById("list").style.display = "block";
});


let array = [];
document.getElementById("save").addEventListener("click", function(){
    let text = document.createElement("p");
    let nama = document.getElementById("nama").value;
    let list = document.getElementById("list");

    text.innerHTML = nama;
    array.push(text);
    alert ("Data Berhasil Disimpan");

    list.appendChild(array[array.length -1]) ;

});