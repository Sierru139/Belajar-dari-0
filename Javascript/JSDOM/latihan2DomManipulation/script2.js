// DOM MANIPULATION
// NODE MANIPULATION
// 1. create element
const pNew = document.createElement("p"); //paragraf baru akan dibuat tapi tidak kemana mana, hanya ada didalam memori
const textNew = document.createTextNode('Paragraf Baru Cihuy');
// Simpan tulisan kedalam dalam paragraf
pNew.appendChild(textNew);
// Simpan pNew di section id A
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pNew);
pNew.style.color = 'red';

// 2. createTextNode

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Ini list baru coy') // untuk membuatkan text 

// 3. appendChild
liBaru.appendChild(textLiBaru); // untuk menyimpan tulisan kedalam list
const ulPar = document.querySelector('section#b ul')

const li2 = document.querySelector('section#b ul li:nth-child(2)')

// 4. insertBefore
ulPar.insertBefore(liBaru, li2) // masukkan liBaru sebeulum li2


// 5. removeChild

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// const li3 = document.querySelector('section#b ul li:nth-child(3)')
// ulPar.removeChild(li3) // menghapus li3

// 6. replaceChild

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p'); // sama saja dengan document.querySelector('section#b p);

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('paragraf 4 tapi diganti');
h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4); // mengganti p4 dengan h2Baru



// const li4 = document.querySelector('section#b ul li:nth-child(4)')
// const li5 = document.querySelector('section#b ul li:nth-child(5)')

// ulPar.replaceChild(li4, li5) // mengganti li4 dengan li5

pNew.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';

const sectionCUl = document.querySelector('section#c ul');
const li2C = sectionCUl.querySelector('li:nth-child(2)');
const liNewC = document.createElement('li');
const liNewCText = document.createTextNode('List baru yang saya buat');
liNewC.appendChild(liNewCText);

sectionCUl.replaceChild(liNewC, li2C);

liNewC.style.backgroundColor = 'lightgreen';