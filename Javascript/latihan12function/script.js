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


// MENGGUNAKAN FUNCTION
function jumlahVolumeDuaKubus(a, b){
    var volumeA = a * a * a;
    var volumeB = b * b * b;
    var total = volumeA + volumeB ;
    return total;
}

alert('Jumlah Volumenya adalah ' + jumlahVolumeDuaKubus(8, 3))
alert('Jumlah Volumenya adalah ' + jumlahVolumeDuaKubus(9, 3))