let count = 0;
let count_ten = 0;
let count_check = 10;
function counter() {
    count++;
    document.querySelector('#score').innerHTML = `Your Score: ${count}`;
    if (count == count_check) {
        count_ten++;
        count_check += 10;
        document.querySelector('#points').innerHTML = `Your pointer ${count_ten}`;

    }
    if (count_ten == 1) {
        document.querySelector('p').innerHTML = 'Your 10 Score = 1 Points.';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn1').onclick = counter;
});
