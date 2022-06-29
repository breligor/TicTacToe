let result = undefined; //переменная для объявления победителя
let step = 0; //счетчик хода
let resultMessage = document.getElementById('resultMessage'); // html-блок объявления победителя
const boxes = document.getElementsByClassName('block'); // ячейка
const game = document.getElementById('game'); //все игровое поле
// создание поля 3х3
for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += `<div class="block"><div>`;
}
// игра
    game.onclick = function (event)
    {
        if (result !== undefined)
        {
            return
        }
        else if (event.target.className === 'block' && event.target.textContent === "") //нахождение блока и проверка от повторного нажатия
        {
            if  (step % 2 === 0 ) {
                event.target.innerHTML = 'X';
            }
            else {
                event.target.innerHTML = '0';
            }
            step++;
            checkWinner();
        }
    };

//функция проверки победителя
function checkWinner () {
//массив все выигрышных вариантов
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < arr.length; i++)
    {
        if (boxes[arr[i][0]].innerHTML === 'X'
            && boxes[arr[i][1]].innerHTML === 'X'
            && boxes[arr[i][2]].innerHTML === 'X'
        )
        {
            result = 'крестики победили';
            doResult(result);
        }
        else
            if (boxes[arr[i][0]].innerHTML === '0'
                && boxes[arr[i][1]].innerHTML === '0'
                && boxes[arr[i][2]].innerHTML === '0'
            )
            {
                result = 'нолики победили';
                doResult(result);
            }
    }
    //проверка на ничью
    if (step === 9)
    {
        result = 'ничья';
        doResult(result);
    }
}
//объявление победителя
let doResult = winner => {
resultMessage.innerText = winner;
};
