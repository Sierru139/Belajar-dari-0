// function jumlahNomor(a, b) {
//     let total =  a + b;
//     return total;
// }

// alert(jumlahNomor(4, 6))

// KURANG EFEKTIF
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;
// volumeA = a * a * a;
// volumeB = b * b * b;
// var total = volumeA + volumeB;

function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    // JANGAN LUPA RETURN
    return hasil; 
}

var coba = tambah(1,3,5,7);
console.log(coba);