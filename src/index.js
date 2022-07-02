module.exports = function toReadable (number) {
    if (number === undefined) {
        return "undefined";
    }
    let str = "";
    function name(number) {
        switch(number) {
            case 0: return "zero"; break;
            case 1: return "one"; break;
            case 2: return "two"; break;
            case 3: return "three"; break;
            case 4: return "four"; break;
            case 5: return "five"; break;
            case 6: return "six"; break;
            case 7: return "seven"; break;
            case 8: return "eight"; break;
            case 9: return "nine"; break;
            case 10: return "ten"; break;
            case 11: return "eleven"; break;
            case 12: return "twelve"; break;
            case 13: return "thirteen"; break;
            case 14: return "fourteen"; break;
            case 15: return "fifteen"; break;
            case 16: return "sixteen"; break;
            case 17: return "seventeen"; break;
            case 18: return "eighteen"; break;
            case 19: return "nineteen"; break;
        }
    }
    if (number > 99) {
        str += name((number - number % 100) / 100) + " hundred";
        if (number%100 != 0) {
            number = number%100;
            str +=" ";
        }
        else return str;
    }
    if (number < 20) {
        str += name(number);
        return str;
    }
    else if ((number > 19) && (number < 100)) {
        switch ((number - number % 10) / 10) {
            case 2: str += "twenty"; break;
            case 3: str += "thirty"; break;
            case 4: str += "forty"; break;
            case 5: str += "fifty"; break;
            case 6: str += "sixty"; break;
            case 7: str += "seventy"; break;
            case 8: str += "eighty"; break;
            case 9: str += "ninety"; break; 
        }
        if (number%10 < 1) {
            return str;
        }
        else return str += " " + name(number%10);
    }
}
