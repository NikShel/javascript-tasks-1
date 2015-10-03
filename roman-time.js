var hours = process.argv[2];
var minutes = process.argv[3];

var romanNumbers = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L'];
var numbers = [1, 4, 5, 9, 10, 40, 50];

function toRoman(number) {
    if (number == 0) {
        return '-';
    }
    var result = '';
    var i = numbers.length - 1;
    while (number > 0) {
        if (number < numbers[i]) {
            i--;
        } else {
            number -= numbers[i];
            result += romanNumbers[i];
        }
    }
    return result;
}

if (!(hours >= 0 && hours < 24 && minutes >=0 && minutes < 60)) {
    console.log('Время указано не верно')
}
else {
    romanHours = toRoman(hours);
    romanMinutes = toRoman(minutes);
    console.log(romanHours + ':' + romanMinutes);
}


