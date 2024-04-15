// base case
function cetakAngka(n) {
    if(n === 0) {
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);


// Faktorial
function faktorial(n) {
    if (n === 0) return 1; {
        return n * faktorial(n - 1); 
    }
}

// Dapat menggantikan looping, Fibonacci, Pencarian penulusuran pada struktur data list dan tree,