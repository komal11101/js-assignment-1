function Is_Valid(A,B)
{
    return (A < 10 && B > A);
}
const a=parseInt(prompt('Enter the First value'));
const b=parseInt(prompt('Enter the Second value'));
console.log(Is_Valid(5,3));
alert(Is_Valid(5,3));