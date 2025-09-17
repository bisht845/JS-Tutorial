  const buttons = document.querySelectorAll('.color-box')
        // console.log(buttons)
        const body = document.querySelector('body')

        buttons.forEach(function (button) {
            // console.log(button);
            button.addEventListener('click', function (e) {
                // console.log(e);
                // console.log(e.target);
                // if (e.target.id === 'red') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'blue') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'green') {
                //     body.style.backgroundColor = e.target.id;
                // }
                // if (e.target.id === 'yellow') {
                //     body.style.backgroundColor = e.target.id;
                // }

                //  Second Approach
                const color = e.target.id;
                switch (color) {
                    case 'red':
                        body.style.backgroundColor = 'red';
                        break;
                    case 'blue':
                        body.style.backgroundColor = 'blue';
                        break;
                    case 'green':
                        body.style.backgroundColor = 'green';
                        break;
                    case 'yellow':
                        body.style.backgroundColor = 'yellow';
                        break;

                    default:
                        body.style.backgroundColor = '#212121'
                }
            })
        });
