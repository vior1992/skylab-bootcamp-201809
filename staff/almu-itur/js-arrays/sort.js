function sort(arr) {

    var indexMain = 0;
    var indexSecondary = 0;
    var indexTemp = 0;
    var tempNumber = [];
    var arraySorted = [];

    for(indexMain = 0; indexMain <= arr.length; indexMain++) {
        
        tempNumber = arr[indexMain];
        tempNumberString = number.toString(tempNumber);

        console.log('Entra en el primer for y tempNumber es ' + arr[indexMain]);

        for(indexSecondary = indexMain + 1; indexSecondary <= arr.length; indexSecondary++) {

            console.log('Entra en el segundo for y compara con ' + arr[indexSecondary]);
            tempDigitString = number.toString(arr[indexSecondary]);
            
            console.log(arr[indexSecondary][0]);
            console.log(arr[indexSecondary][0] + ' es < ' + tempNumber[0]);
            if(arr[indexSecondary][0] < tempNumber[0] ) {
                tempNumber = arr[indexSecondary];
                indexTemp = indexSecondary;
                console.log('Ha encontrado un numero menor');
                console.log('Nuevo valor de tempNumber es ' + tempNumber);
            }
        }
        arraySorted[indexMain] = tempNumber;
        arr[indexTemp] = arr[indexMain];
        console.log('El array original es: ' + arr);
        console.log('El array sorted tiene esta pinta: ' + arraySorted);

        }
        console.log('Array final ' + arraySorted);
}