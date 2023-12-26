let resultat;
let multiinput = false;
function divide(Numb1 = String, Numb2 = String, flush = false) {
    try {
        if (flush == true) {
            Numb1 = Numb2 = resultat = 0;
            multiinput = false;
            return resultat;
        }

        if (Numb2 == String || multiinput == false) {
            multiinput = true
            return Numb1; // Если пользователь ещё не ввёл значение и нажимает на деление, то ему возвращается 1 результат
        }
        if (multiinput == true) {
            resultat = Numb1 / Numb2
            if (resultat == Infinity || resultat == NaN || Numb1 == Infinity || Numb2 == Infinity) {
                flush = true;
                divide(0, 1, flush) // Не спрашивайте
                throw new Error(console.log('Произошла ошибка в параметрах'));
            }
            else {
                return resultat;
            }
        }
    }
    catch (err) {
        alert("Деление на 0 приводит к ∞")
    }
}
export { Numb1, Numb2, resultat, flush, divide }
