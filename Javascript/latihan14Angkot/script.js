var penumpang = [];


var tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang diawal array
        penumpang.push(namaPenumpang); 
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri array dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika ada nama yang sama 
            else if ( penumpang[i] == namaPenumpang) {
                // tampilkan kesalahannya
                console.log(namaPenumpang + ' sudah ada didalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi 
            else if( i == penumpang.length - 1 ){
                //tambah penumpang di akhir array
                    penumpang.push(namaPenumpang)
                    // kembalikan isi array & keluar dari function 
                    return penumpang
            }
    }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang){
    // Jika angkot kosong
        if (penumpang.length == 0){
            // tampilkan pesan
            console.log('Penumpang masih kosong')
            // kembalikan isi array & keluar dari function
            return (penumpang)
        } else {
            // telusuri penumpang dari awal
            for (var i = 0; i < penumpang.length; i++) {
                // jika nama penumpang sesuai
                if (penumpang[i] == namaPenumpang){
                    // hapus penumpang dengan mengubah namanya
                    penumpang[i] = undefined;
                    // kembalikan isi array & keluar dari function
                    return (penumpang)
                    // jika tidak terdapat nama penumpang yang ingin dihapus
                } else if(i == namaPenumpang.length - 1){
                    // tampilkan error
                    console.log( namaPenumpang + ' penumpang yang anda sebut tidak ada didalam')
                    return (penumpang)
                }
            }
        }
}
