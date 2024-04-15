// angka = prompt('masukkan angka');
// // angka = parseInt(prompt('masukkan')); <---- untuk menjadikan string menjadi angka atau integer
// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('anda memasukkan angka bukan 1,2,3')
//         break;
// }  
// Angka diganti dengan string karena tipe data dari prompt yang dimasukkan adalah string, gunakan 'parseInt'untuk membuat string menjadi angka 


var item = prompt('Masukkan nama makanan, \n contoh Nasi, Daging, Sayur, Kerupuk, SoftDrink')
switch (item) {
    case 'Nasi':
        // alert('Nasi, Termasuk makanan yang sehat 😄')
        // break;
    case 'Daging':
        // alert('Daging, Termasuk makanan yang sehat 😄')
        // break;
    case 'Sayur':
        alert('Sayur, Termasuk makanan yang sehat 😄')
        break;
    case 'Kerupuk':
        // alert('Kerupuk, Termasuk makanan yang tidak sehat 🥸')
        // break;
    case 'Softdrink':
        alert('Softdrink, Termasuk makanan yang tidak sehat 🥸')
        break;
    default:
        alert('Makanan yang anda masukkan tidak ada 😅')
        break;
}



// if (angka == 1) {
//     alert('anda memasukkan angka 1')
// } else if (angka == 2){
//     alert('anda memasukkan angka 2')
// } else if(angka == 3){
//     alert('anda memasukkan angka 3')
// } else {
//     alert('anda memasukkan angka bukan 1,2,3')
// }