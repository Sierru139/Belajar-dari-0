// Object adalah array yang lebih sakti
// Object dapat menyimpan string, angka, boolean, array, dan function
// var siswa = {
//     // variabel dalam object adalah property 
//     // INI PROPERTY
//     nama : 'Yasir',
//     lulus : true,
//     nilaiSemester : [90, 85, 79, 91],

//     // Dapat Menampung object lagi
//     alamat : {
//         kota : 'Pangkep',
//         provinsi : 'Sulawesi Selatan'
//     },
//     // END OF PROPERTY

//     // function dalam object adalah method
//     // INI METHOD
//     nilaiRataRata : function(){ 
//         var total = 0;
//         var nilaiR = this.nilaiSemester;
//         for(var i = 0; i < nilaiR.length; i++){
//             total += nilaiR[i];
//         }
//         return total/nilaiR.length;
//     }
//     // END OF METHOD
// }

// console.log(siswa.nama);
// console.log(siswa.nilaiRataRata()); // Cara memunculkan function dalam object
// console.log(siswa.nilaiSemester[0]); // Cara memunculkan array dalam object
// console.log(siswa.alamat["kota"]); // Cara memunculkan object dalam object


// // NEW OBJECT 
// // OBJECT LITERAL
// var orang = {
//     nama : 'Yasir',
//     umur : 17,
//     pekerjaan : 'Murid SMA',
//     sapa : function(){
//         return 'Halo nama saya ' + this.nama + ' Saya sudah berada di Dunia ini selama ' + this.umur + ' dan saya sekarang adalah ' + this.pekerjaan;
//     }
// }

// console.log(orang.sapa());

// var namaAnda = {
//     nama : prompt('Masukkan nama anda')
// }

// alert('Halo ' + namaAnda.nama)

// // FUNCTION DECLARATION
// function buatObjectSiswa(nama, nilai, email, jurusan) {
//     var ssw = {};
//     ssw.nama = nama;
//     ssw.nilai = nilai;
//     ssw.email = email;
//     ssw.jurusan = jurusan;
//     return ssw;
// }

// var sis1 = buatObjectSiswa("Rasta", 96, "Rastasanjaya@gmail.com", "Rekayasa Perangkat Lunak"); 


// // CONSTRUCTOR
// function Siswa(nama, nilai, email, jurusan){
//     this.nama = nama;
//     this.nilai = nilai;
//     this.email = email;
//     this.jurusan = jurusan;
// }

// var sis2 = new Siswa("Rasta", 96, "Rastasanjaya@gmail.com", "Rekayasa Perangkat Lunak");


// Membuat object (Video 3)


// // cara 1 - Function Declaration
// function halo() {
//     console.log('Halo Dunia')
// }

// halo()

// // cara 2 - Object Literal

// var obj = {};
// obj.halo = function () {
//     console.log('Halo')
// }

// obj.halo()

// cara 3 - Constructor

// function Halo(){
//     console.log('Halo Dunia')
// }

// new Halo();

// THIS 

// console.log(this)

// var a = 10;
// console.log(this.a)


// // cara 1 - function declaration
// function halo() {
//     console.log(this)
//     console.log('Halo Dunia')
// }

// this.halo()

// // cara 2 - object literal
// var obj = {a : 10, nama : 'yasir'};
// obj.halo = function () {
//     console.log(this)
//     console.log('Halo')
// }

// obj.halo()

// cara 3 - constructor
function Halo() {
    console.log(this)
    console.log('Halo Dunia')
}

var obj1 = new Halo();
var obj2 = new Halo();

// this.Halo()