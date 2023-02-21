let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(function(item) {
    item.addEventListener('click', function(set)  {
        let all = set.currentTarget.classList;
        if (all.contains('increase')) {
            count++;
        }
        else if (all.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }
        value.textContent = count;

        if (count > 0 ) {
            value.style.color = 'green';
        }

        else if (count < 0) {
            value.style.color = 'red';
        }else{
            value.style.color = 'gray';
        }
    })
})