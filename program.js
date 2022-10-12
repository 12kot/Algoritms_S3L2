let array = [1, 2, 10, 2, 2, 2, 2, 2, 4, 1, 4, 8, 24, 24, 24, 24, 24, 48]; //исходный массив 

let max = checkNumber(array); //тут хрантся длины цепочек 

console.log(array.splice(max[0], max[1] + 1).join(' ')); //выводим на экран, обрезая массив

function checkNumber(array) { //тут мы отправляем каждый элемент перебираться
    let max = [0, 0];
    let len = 0;

    for (let i = 0; i < array.length - max[1] - 1; i += len) { // - max для сокращения числа операция. max - маскимальная длина последовательности. 
        len = searchIndex(array, i);           //если max = 3, а длина массива 5, то и больше последовательности начиная с индекса 3 не будет
                                                //i += len для того, чтобы не проходить пройденную последовательность повторно
        if (len > max[1])                      
            max = [i, len];
        
        if (len == 0)
            i++;
    }
    
    return max;
}

function searchIndex(array, i) { //начинаем проверять цепочку, начиная с индекса i
    let count = 0;

    for (; i < array.length - 1; i++) {

        if (array[i + 1] % array[i] == 0)
            count++;
        else return count;
    }

    return count;
}