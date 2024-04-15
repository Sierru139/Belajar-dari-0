// menangkap pilihan player
var p = prompt('Masukkan pilihan anda')

// menangkap pilihan komputer
// men-generate pilihan random
var comp = Math.random();

if(comp < 0.34 ) {
    comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67){
    comp ='semut';
} else {
    comp = 'orang';
}

var hasil = '';
// Menentukan rules
if( p == comp){
    hasil = "SERI!";
}else if(p == 'gajah'){
    // } else if (p == 'gajah') {
    //     if (comp == 'orang' ){
    //         hasil = "MENANG!";
    //     } else {
    //         hasil = "KALAH!";
    //     }
        // Ternary dari syntax diatas
        hasil = ( comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang'){
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    }  else if (p == 'semut'){
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = "Kau memasukkan pilihan yang salah!";
    }

// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya ' + hasil );