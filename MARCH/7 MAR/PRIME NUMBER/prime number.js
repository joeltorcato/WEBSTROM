const number = 4; //enter number

if (number <= 1) {
    console.log('error');
} else {
    let is_prime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            is_prime = false;
            break;
        }
    }
    if (is_prime) {
        console.log('prime');
    } else {
        console.log('not prime');
    }
}