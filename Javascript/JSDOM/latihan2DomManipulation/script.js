// DOM MANIPULATION

// MANIPULASI ELEMENT
// 1. innerHTML // akan mengubah seluruh isi dari html
// const sectionA = document.querySelector("section#b");
// sectionA.innerHTML = 'Hello dunia';

document.getElementById("judul").innerHTML = 'Assalamualaikum dunia, saya sudah ganti';


// 2. .style
const paragrafs = document.querySelectorAll("p");
for (let i = 0; i < paragrafs.length; i++) {
// harus menggunakan camel casing untuk jenis css style
paragrafs[i].style.color = '#d9256a';
paragrafs[i].style.backgroundColor = '#dbc074';
}


// 3. setAttribute // untuk menambahkan attribute pada element
const button = document.getElementsByTagName('button')[0];
button.setAttribute('name', 'Yasir')

const a = document.querySelector('section#a a');
a.setAttribute('href', 'https://www.google.com/')
// bisa getAttribute untuk melihat atribut, removeAttribute untuk menghapus atribut


// 4. classList // untuk memanipulasi isi dari atribut class
// jenis kelas : 
// classList.add(); 
// classList.remove(); 
// classList.toggle(); 
// classList.item(); 
// classList.contains(); 
// classList.replace()

const button2 = document.querySelector('.button1');
button2.classList.add('btn1') // tidak boleh menggunakan spasi untuk memberi lebih dari 1 class

button2.classList.remove('dihilangkan'); // menghilangkan class

button2.classList.toggle('warnabaru'); // mengubah class, jika tidak ada maka akan ada dan jika ada maka tidak ada

console.log(button2.classList.item(1)); // akan mengembalikan nama class yang disebut
console.log(button2.classList.contains('warnabaru')) // akan menanyakan pada javascript apakah ada class yang disebutkan, jika ada maka hasilnya true

button2.classList.replace('btn1', 'btn2'); // akan mengganti kelas yang disebutkan menjadi class yang ingin dimasukkan



// MANIPULASI NODE









