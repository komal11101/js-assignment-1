function Check(A,B)
{
    if(A%10==0 && B%10==0)
    {
        return true;

    }
    else if(A%10!==0 && B%10!==0)
    {
        return false;
    }
    else
    {
        return true;
    }

}
const a=parseInt(prompt('Enter the First value'));
const b=parseInt(prompt('Enter the Second value'));
console.log(Check(12,20));
alert(Check(12,20));