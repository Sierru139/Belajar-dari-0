
function namaMu(params) {
    var nama = prompt('Masukkan Nama Anda :D ');
    document.getElementById('btnNama').classList.add('hidden');
    document.getElementById('namaAnda').innerHTML = nama + ",";
}

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Selamat Pagi";
} else if (time < 15) {
  greeting = "Selamat Siang";
} else if (time < 18){
  greeting = "Selamat Sore";
} else {
  greeting = "Selamat Malam";
}


function confr() {
    var pil = confirm('Batal = false, Ok = true');
    if ( pil === true ) {
        alert('ANDA MENEKAN YES')
    } else {
        alert('ANDA MENEKAN NO')
    }
    };

function switsh() {
  angka = parseInt(prompt('Masukkan angka 1 sampai 3'));

  switch (angka) {
    case 1:
      alert('anda memasukkan angka 1');
      break;
    case 2:
      alert('anda memasukkan angka 2');
      break;
    case 3:
      alert('anda memasukkan angka 3');
      break;    
    default:
      alert('anda memasukkan angka diluar123 tapi' + angka)
      break;
  }
}

function gantiIsi (){
  document.getElementById('lorem').innerHTML = 'Text ini sudah diganti'
}

function beriWarna (){
  document.getElementById('pWarna').innerHTML = 'terimakasih 😊'
  document.getElementById('pWarna').style.backgroundColor = 'lightgreen'
}

function gantiWarna (){
  document.getElementById('pWarna2').classList.toggle('bg-green-400')
  document.getElementById('pWarna2').classList.remove('font-bold')
}