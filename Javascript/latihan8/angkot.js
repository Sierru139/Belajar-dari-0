var 
noAngkot = 1,
jumlahAngkot = 10,
angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if( noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot No.'+ noAngkot +' Beroperasi dengan baik');
    } else if( noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot No.'+ noAngkot +' sedang lembur');
    } else {
        console.log('Angkot No.'+ noAngkot +' Tidak beroperasi');
    }
}


// var angka = prompt('masukkan angka:')

// if(angka % 2 == 0) {
//     alert(angka + 'angka yang ada masukkan adalah ganjil')
// } else {
//     alert(angka + 'angka yang ada masukkan adalah ganjil')
// }


// var angka = prompt('masukkan angka:')

// if(angka % 2 === 0) {
//     alert(angka + 'angka yang ada masukkan adalah ganjil')
// } else if(angka % 2 === 1) {
//     alert(angka + 'angka yang ada masukkan adalah ganjil')
// } else {
//     alert('yang anda masukkan bukanlah angka')
// }