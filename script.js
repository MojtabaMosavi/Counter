const buttons = document.querySelectorAll('.btn')
const dipslayArea = document.querySelector(".displayArea")

// looping through buttons 
buttons.forEach((btn) => 
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            dipslayArea.innerHTML = 1 + parseInt(dipslayArea.innerHTML);
            dipslayArea.classList.add('positiveNumber');
            
        }else if(styles.contains('decrease')){
            // decressing the count 
            dipslayArea.innerHTML = -1 + parseInt(dipslayArea.innerHTML);
            dipslayArea.classList.add('negativeNumber');

        }else {
        // resetting the counter 
        dipslayArea.innerHTML = "0";
        dipslayArea.classList.remove('positiveNumber');
        dipslayArea.classList.remove('negativeNumber');
        }
    }));