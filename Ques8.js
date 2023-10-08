function Sum(A, B, C) {
    return A + B + C;
}

function Average(A, B, C) {
    return Sum(A, B, C) / 3;
}

const a = parseInt(prompt('Enter the First value'));
const b = parseInt(prompt('Enter the Second value'));
const c = parseInt(prompt('Enter the Third value'));

const sum = Sum(a, b, c);
const avg = Average(a, b, c);

console.log(sum.toFixed(2), avg.toFixed(2));
alert(sum.toFixed(2), avg.toFixed(2));
