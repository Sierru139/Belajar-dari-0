// Membuat object angkot 
// Constructor

function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpangLength === 0){
            console.log("angkot masih kosong");
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++){
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }


}
var angkot1 = new Angkot('Yasir', ['Pangkep', 'Daya'], [], 0);
var angkot2 = new Angkot('Jack', ['Labbakang', 'Pasar Pangkep'], [], 0);
var angkot3 = new Angkot('Rasta', ['Bungoro', 'Bontoa'], [], 0);