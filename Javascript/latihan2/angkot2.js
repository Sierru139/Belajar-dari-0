var 
jmlAngkot = 10,
angkotBeroperasi = 6,
noAngkot = 1;

 while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " Sedang beroperasi dengan baik");
    noAngkot++;
}


for (noAngkot = angkotBeroperasi + 1;noAngkot <= jmlAngkot; noAngkot++) {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi ");
}