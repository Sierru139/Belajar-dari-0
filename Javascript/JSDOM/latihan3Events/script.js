// EVENTS 
// cara mendengarkan event
// - Event Handler
// - - Inline HTML Attribute
// - - element method
// - addEventListener()


// LETS CODE

// event handler 
// - Inline HTML attribute, dengan menambahkan attribut onclick pada html
const p3 = document.querySelector('.p3');
function changeColorP3(){
    p3.style.backgroundColor = 'lightblue';
    
}

// - element method

const p2 = document.querySelector('.p2');
p2.onclick = function(){
    p2.style.backgroundColor = 'lightgreen';
    
}; // hanya dapat dilakukan sekali saja

// addEventListener();

const p4 = document.querySelector('.p4');
const p5Isi = document.createTextNode('Ini paragraf baru setelah anda menekannya')

p4.addEventListener('click', function(){
    const p5 = document.createElement('p');
    const ul = document.querySelector('section#b ul')
    p5.appendChild(p5Isi);
    ul.insertBefore(p5, ul.lastChild);
});


// 
const p1 = document.querySelector('.p1');
p1.addEventListener('click', function(){
    p1.style.color = 'brown';
})
p1.addEventListener('click', function(){
    p1.style.backgroundColor = 'red';
})