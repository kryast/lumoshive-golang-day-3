document.getElementById("tombol").addEventListener("click", function(){
let list = document.getElementById("list");
let text = document.createElement("li");
let hapus = document.createElement("button");

let input = document.getElementById("input").value;

text.innerHTML = input;

hapus.innerHTML = "X";

list.appendChild(text);
text.appendChild(hapus);

hapus.addEventListener("click", function(){
    list.removeChild(text);

});
});
