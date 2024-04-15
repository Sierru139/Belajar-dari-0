// array adalah variabel yang lebih sakti, dapat menampung banyak data
// kenapa array? mempermudah pengelolaan nilai/value/data
// array bisa disebut dengan variabel jamak, yang memiliki banyak elemen dan diacu dengan nama yang sama 
// Kumpulan pasangan key dan nilai/key value pair
// index dimulai dari 0
// Array bertipe object
// Array javascript memiliki fungsi/method length untuk menghitung jumlah elemen di dalamnya
// Element pada array boleh memiliki tipe data yang berbeda
// fungsi dalam object disebut method
var hari = ['Senin','Selasa','Rabu']

// array dengan tipe data berbeda
var arrBeda = ['Senin', 2 ,true]
alert(hari[0])

// array dalam array - array multidimensi 
var arrInArr = ['Senin','Selasa','Rabu', ['Kamis', 'Jumat']]
alert(arrInArr[3][0]);