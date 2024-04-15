function getPilihanComputer() {
    const comp = Math.round(Math.random() * 2);
    if(comp == 0) return 'batu';
    if(comp == 1) return 'gunting';   
    return 'kertas';
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!'; 
    if( player == 'gunting' ) return ( comp == 'kertas' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'kertas' ) return ( comp == 'batu' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
}


// Ini Hanya untuk membuatnya lebih keren

function putar(){
    const imgCom = document.querySelector('.img-comp')
    const gambar = ['batu', 'gunting', 'kertas'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgCom.setAttribute('src', 'gambar/' + gambar[i++] + '.png')
        if( i == gambar.length) i = 0;
    }, 100)
}





// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', () => {
    // const pilihanComputer = getPilihanComputer()
    // const pilihanPlayer = pBatu.className
    // const hasil = getHasil(pilihanComputer, pilihanPlayer)
    // // gambar pilihan computer
    // const imgComp = document.querySelector('.img-comp');
    // imgComp.setAttribute('src', 'gambar/'+pilihanComputer+'.png');
    // // hasil
    // const result = document.querySelector('.result');
    // result.innerHTML = hasil;
// })
// Yang diatas terlalu ribet, bagaimana kalau kita persingakt >>
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(function () {
            // gambar pilihan computer
            const imgComp = document.querySelector('.img-comp');
            imgComp.setAttribute('src', 'gambar/'+pilihanComputer+'.png');
            // hasil
            const result = document.querySelector('.result');
            result.innerHTML = hasil;    

        },1000)

    })
})


