// ? Task:Реализуйте функцию mySplit, которая получает на вход строку, а возвращает массив, который состоит из символов строки.

// Важное уточнение: использовать метод split нельзя!!!

// Solution 1

const mySplit = (str) => [...str];
console.log(mySplit("Hello my friend"));
console.log(mySplit("Solution"));
// solution 2
console.log([..."Solution"]);

// ! Explanation: Оператор деструктуризации (...) отлично работает со строками.
