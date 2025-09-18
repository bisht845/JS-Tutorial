const buttons = document.querySelectorAll('.color-box')
// console.log(button);
const body = document.querySelector('body')

buttons.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

         // if (e.target.id === "color1") {
        //     body.style.backgroundColor = '#ff6b6b'
            
        // }
        // if (e.target.id === "color2") {
        //     body.style.backgroundColor = '#4ecdc4'
        // }
        // if (e.target.id === "color3") {
        //     body.style.backgroundColor = '#ffe66d'
        // }
        // if (e.target.id === "color4") {
        //     body.style.backgroundColor = '#6b5b95'
        // }
        
        // Second Approach 
        
        switch (e.target.id) {
            case 'color1':
                body.style.backgroundColor = '#ff6b6b'
                break;
            case 'color2':
                body.style.backgroundColor = '#4ecdc4'
                break;
            case 'color3' :
                body.style.backgroundColor = '#ffe66d'
                break;
            case 'color4':
                body.style.backgroundColor = '#6b5b95'
                break;
            default:
                body.style.backgroundColor = '#fff';
        }
       
    })
})