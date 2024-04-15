const container = document.querySelector('.container');
const bigImg = document.querySelector('.bigImg');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function(e) {

    // cek apakah yang diklik adalah thumbnail
    if (e.target.className == 'thumb'){
        bigImg.src = e.target.src; 
        bigImg.classList.add('fade')
        
        setTimeout(function(){
            bigImg.classList.remove('fade')
        }, 500)

        thumbs.forEach(function(thumb){
            // if (thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });
        
        e.target.classList.add('active');
    }

})
// thumb.forEach(function(e){
//     e.addEventListener('click', function(){
//         bigImg.style.display = 'none';
//     })
// })




// MANTAPPPPPUUUUU