let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case null:
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    default:
        switch ( isNaN( +numOrStr ) ) {
            case true:
                console.log(' number is Ba_NaN');
                break;
            case false: 
                console.log('OK!');
                break;    
        }
    }

