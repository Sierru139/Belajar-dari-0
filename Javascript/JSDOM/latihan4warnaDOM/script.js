const judul = document.querySelector('.h1-warna');
const tBeriWarna = document.getElementById('tombolBeriWarna');
const body1 = document.body;

// tombol.addEventListener('click', () => {
//     judul.classList.toggle('warna-h1');
//     body1.classList.toggle('bg-pink');
// })

const tWarnaRandom = document.createElement('button');
const buttonIsi = document.createTextNode('Ubah warnanya secara random!');
tWarnaRandom.appendChild(buttonIsi);
tBeriWarna.setAttribute('type', 'button')
tBeriWarna.after(tWarnaRandom)


tBeriWarna.addEventListener('click', () => {
    judul.classList.toggle('warna-h1');
    body1.classList.toggle('bg-pink');
})

tWarnaRandom.addEventListener('click', () => {
    const r = Math.round(Math.random()* 255 + 1);
    const g = Math.round(Math.random()* 255 + 1);
    const b = Math.round(Math.random()* 255 + 1);
    console.log(r);
    body1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')' ;
});

// dengan slider rgb

const sMerah = document.querySelector("input[name='sMerah']");
const sHijau = document.querySelector("input[name='sHijau']");
const sBiru = document.querySelector("input[name='sBiru']");

var rgbRes = document.getElementById("")
sMerah.addEventListener("input", () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sHijau.addEventListener("input", () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sBiru.addEventListener("input", () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    body1.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    
})

// dengan posisi mouse pada layar
// bisa menggunakan window.
document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    body1.style.backgroundColor = `rgb(${xPos}, ${yPos}, 120)`;
});