function inverter_números(array) {
    return array.reverse().join(', ');
}

const numbers = [1, 2, 3, 4, 5];
const inverted_numbers = inverter_números(numbers);
console.log(inverted_numbers);