var 
noAngkot = 1,
jumlahAngkot = 10,
angkotBeroperasi = 6;

for ( ; noAngkot < jumlahAngkot; noAngkot++) {
    console.log("angkot no. " + noAngkot + " sedang beroperasi dengan baik");     
}

for (let noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log("angkot no. " + noAngkot + " tidak beroperasi dengan baik");
    
}
