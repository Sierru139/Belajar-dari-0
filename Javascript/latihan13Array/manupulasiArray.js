// var arr = ['Manusia', 'Ayamsia', 'Jangangsia'];
// console.log(arr);
//manipulasi Array

// menambah isi array
// var arr = [];
// arr[0] = "Yasir";
// arr[1] = "Bin";
// arr[2] = "Abdul";
// arr[3] = "Azis";

// console.log(arr);

// menghapus isi array
// var arr = ["Yasir", "Bin", "Abdul", "Azis"]
// arr[1] = undefined; //array 1 dirubah menjadi undefined
// console.log(arr);

// menampilkan isi array
// var arr = ['Manusia', 'Ayamsia', 'Jangangsia', 'Udin' ,'AyamUddin'];
// console.log(arr);
// // for( var i = 0; i < 3; i++){ //bisa saja digunakan tetapi jumlahnya harus dihitung manual
// for( var i = 0; i < arr.length; i++){ //menggunakan array.length untuk menghitung jumlah dari array yang ingin dipanggil
//     console.log('Siswa ke ' + (i+1)  + ' : ' +  arr[i]); // memanggil array dengan i yang dimana i adalah nomor yang ditambah terus menerus 
// }

// method pada array =================
// length, untuk menghitung ada berapa jumlah pada array yang dibuat
// join, menggabungkan seluruh array dan mengubahnya menjadi string
// push, pop, shift, unshift, digunakan untuk menambah dan menghapus elemen array
// ===================================

// 1. method Join =======================
// var arr = ['Yasir', 'Bin', 'Abdul'];
// console.log(arr.join(' '));
// ===================================

// 2. method push, memasukkan elemen array. pop, menghapus elemen terakhir pada array
// arr.push('Yasir') //menambahkan elemen baru di bagian pada array
// arr.pop();
// console.log(arr.join(' '));

// 3. method shift dan unshift
// arr.unshift('Lutung'); // menambahkan elemen baru di bagian pertama pada array
// arr.shift(); //menghapus elemen pertama pada array
// console.log(arr.join(' '));
// ==========================================

// 4. slice & splice ===========================
// splice menambahkan elemen pada array yang berada ditengah atau dimanapun
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// arr.splice(2, 0, 'Risay'); //Yasir - Bin - Risay - Abdul
// arr.splice(1, 2, 'Risay', 'Sayri'); //Yasir - Risay - Sayri

// slice mengiris array menjadi array yang baru

// var arr = ['Yasir', 'Bin', 'Abdul', 'Risay', 'Sayri'];
// var arr2 = arr.slice(2, 4) //mengambil elemen dibelakang elemen pada index array ke 2 dan setelah 4, maka hasilnya Abdul - Risay
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 5. foreach
// var angka = [1,2,3,4,5,6,7,8,9,10]
// var siswa = ['Yasir', 'Nasir', 'Pasir']
// // for(var i = 0; i < angka.length; i++) {
// //     console.log(angka[i]);
// // }
// // angka.forEach(function(e) {
// //     console.log(e)
// // })

// siswa.forEach(function(e, i){
//     console.log('Siswa ke ' + (i+1) + ' adalah : ' + e)
// });

// 6. map // mengembalikan array
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e;
// });
// console.log(angka2.join(' - '))

// 7. sort
// var angka = [1,2,5,3,6,8,4,7];
// var angka = [1,2,5,3,10,20,6,8,4,7];
// // angka.sort()
// angka.sort(function(a,b) {
//     return a-b;
// })
// console.log(angka.join(' - '))

// 9.filter // mencari nilai pada array dan mengembalikannya dalam bentuk array
// var angka = [1,2,5,3,10,20,6,8,4,7];
// var angka2 = angka.filter(function(x){
//     // return x < 6; // hasil [ 1, 2, 5, 3, 4 ]
//     // return x % 2 == 0; // hasil [ 2, 10, 20, 6, 8, 4 ]
//     // return x == 3;//hasil = [ 3 ]
// });
// console.log(angka2); 


// 10. find mencari hanya SATU nilai pada array dan mengembalikannya pada NILAI
var angka = [1,2,5,3,10,20,6,8,4,7];
var angka2 = angka.find(function(x){
    return x > 5;
}); 
console.log(angka2);