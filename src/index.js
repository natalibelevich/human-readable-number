//981 - nine hundred eighty one
module.exports = function toReadable (number) {
    if(number <=10) {
        return numbers[number]
    } else if(number <= 20) {
        const result = numbers[number];
        return result ? result : numbers[number%10]+'teen'
    } else if(number <100) {
        const tens = Math.floor(number/10) *10;
        const ones = number % 10;
        const tensStr = numbers[tens] ? numbers[tens] : numbers[tens/10] + 'ty';
        return tensStr +  (ones ? ' ' +numbers[ones] : '');
    } else if(number < 1000) {
        const hundreds = Math.floor(number/100);
        const left = number % 100;
        return numbers[hundreds] + ' hundred' +  (left ?  ' ' +toReadable(number%100) : '')
    }
};

const suffixes ={
    10: 'ty',
    100: 'hundred ',
};

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    15: 'fifteen',
    18: 'eighteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    80: 'eighty'
};
