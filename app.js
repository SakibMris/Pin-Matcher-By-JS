function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('pin-input-box').value = pin;
}

document.getElementById('keypads').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C')
            calc.value = '';
    }
    else {
        const prevcalc = calc.value;
        const newcalc = prevcalc + number;
        calc.value = newcalc;
    }
});

function verifyPin() {
    const pin = document.getElementById('pin-input-box').value;
    const typednumber = document.getElementById('typed-numbers').value;
    const success = document.getElementById('success-notify');
    const error = document.getElementById('error-notify');
    if (pin == typednumber) {
        success.style.display = 'block'
        error.style.display = 'none'

    }
    else {
        success.style.display = 'none'
        error.style.display = 'block';
    }
};

