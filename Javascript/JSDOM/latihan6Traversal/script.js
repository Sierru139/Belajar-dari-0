// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// close.addEventListener('click', () => {
//     card.style.display = 'none';
// })


// DOM Traversal
const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card'); bisa saja pakai ini tapi cara ini salah menurut Pak Sandhika Galih

// Dengan for()
// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//         // console.log(e);
//     })
//         // card[i].style.display = 'none';
// };

// Dengan forEach()
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // prevent default
//         e.stopPropagation(); // bubbling
//     })
// })

// DOM Traversal Method     
// NAMA DOM                 OUTPUT
// parentNode               node
// parentElement            element
// nextSibling              node
// nextElementSibling       element
// previousSibling          node 
// previousElementSibling   element 

const nama = document.querySelector('.nama')
console.log(nama.parentNode);
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling); // akan mengembalikan #text yang berisi enter
console.log(nama.nextElementSibling); // akan mengembalikan element selanjutnya yang sama orang tua yaitu span class = 'telp'
console.log(nama.previousSibling); // akan mengembalikan #text yang berisi enter juga
console.log(nama.previousElementSibling); // akan mengembalikan element sebelumnya yang sama orang tua yaitu img
console.log(nama.previousElementSibling.previousElementSibling); // akan mengembalikan element sebelumnya yang dimana tidak ada


// Prevent Default
// preventDefault() // untuk menghilangkan sifat default dari element


// Event Bubbling
const card = document.querySelectorAll('.card');
card.forEach(function(e){
    e.addEventListener('click', function(){
    })
});

const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})