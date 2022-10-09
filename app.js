let touch1 = document.querySelector('#touch1');
let touch2 = document.querySelector('#touch2');
let touch3 = document.querySelector('#touch3');
let reset = document.querySelector('.reset');


touch1.onclick = function() {
    if (touch1.checked === true) {
        touch1.disabled = 'true';
    }
}
touch2.onclick = function() {
    if (touch2.checked === true) {
        touch2.disabled = 'true';
    }
}
touch3.onclick = function() {
    if (touch3.checked === true) {
        touch3.disabled = 'true';
    }
}

reset.onclick = function() {
    touch1.disabled = false;
    touch1.checked = false;

    touch2.disabled = false;
    touch2.checked = false;

    touch3.disabled = false;
    touch3.checked = false;
}
