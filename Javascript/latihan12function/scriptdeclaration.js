// function Declarations
// function name(params<-optional) {
    // functionBody
// }


function functionDeclaration(nama) {
    alert('Halo ' + nama)
}
functionDeclaration(prompt('Masukkan Nama Anda :D '))

// ==================================================

// function Expression
// harus didefinisikan terlebih dahulu sebelum dipanggil
// lebih powerful, sebagai closure, sebagai argumen untuk function lain,IIFE (Immediately Invoked Function Expression)

// function name<-optional(params<-optional) {
    // functionBody
// }

var functionExpression = function (nama2) {
    console.log('Halo ' + nama2)
}
functionExpression('Yasir')