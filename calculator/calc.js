let a = ''; //first num
let b = ''; //second num
let sign = '';//знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', 'X', '/', '^'];

//экран
const out = document.querySelector('.calc-screen p')

function clearAll() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.C').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //Нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    //Нажато очищение C
    if (event.target.classList.contains('C')) return;

    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;
    //если нажаты кнопки 0-9 или . 
    if (digit.includes(key)) {
        if (b === '' && sign === '') {

            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {

        }
        else {
            b += key;
            out.textContent = a;
        }
        console.log(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажато =
    if (key === '=') {
        switch (sign) {
            case "^":
                a = Math.pow(a, b);
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}