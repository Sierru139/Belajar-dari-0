// DOM SELECTION 
// - getElementById() // akan menghasilkan element
const judul = document.getElementById('judul') ;
judul.style.color = 'red' ;
judul.style.backgroundColor = 'purple' ;
judul.innerHTML = 'Yasir';

// - getelementsByTagName() // akan menghasilkan html Collection
// // akan bersifat array
// const p = document.getElementsByTagName("p");
// // const h1 = document.getElementsByTagName("h1")[0]; //Bisa menggunakan ini karena sifatnya array
// p[0].style.backgroundColor = 'purple'; // masukkan index jika ingin menambahkan atribut

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'red'; 
    
// } // menggunakan pengulangan karena sifatnya array



// - getElementsByClassName() // akan menghasilkan html Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = '<div style="background-color: black; color: white;">ANJAY</div>';



// - quertSelector() // akan menghasilkan element
// - misal di css adalah memilih class secara spesifik contoh
// section#b ul li:nth-child(2){}
const p4 = document.querySelector('#b p');
p4.style.color = '#27c250';
p4.style.backgroundColor = 'white';
p4.style.fontSize = '25px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// hanya mengembalikan 1 element saja contoh // dapat dilakukan untuk memilih semua tag
const plagi = document.querySelector('p') // ini hanya akan mengembalikan element yang pertama kalinya ditemui
plagi.style.backgroundColor = 'lightblue'

// - querySelectorAll() // akan menghasilkan node list 
const plglgi = document.querySelectorAll('p');
// plglgi[1].style.backgroundColor = 'lightgreen';
// plglgi[1].style.color = 'blue';

// for (let i = 0; i < plglgi.length; i++){
//     plglgi[i].style.backgroundColor = 'lightgreen';
//     plglgi[i].style.color = 'blue';
// } // untuk memilih semua element 