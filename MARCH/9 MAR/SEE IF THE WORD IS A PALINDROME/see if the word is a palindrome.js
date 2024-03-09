function result(word, reverse_word) {
    return word === reverse_word;
}

let word = "hello";
let reverse_word = word.split("").reverse().join("");

if (result(word, reverse_word)) {
    console.log("true");
} else {
    console.log("false");
}