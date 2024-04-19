// BEGIN
isPrimeOrNot = (num) => 
{ 
    if(num===0 || num === 1 || num<0 ) return false;
    for(let i=2;i<=Math.sqrt(num);i++)
        if(num%i===0)
            return false;
    return true; 
} 

sayPrimeOrNot= (num) => 
{
    if(isPrimeOrNot(num)) console.log('yes');
    else console.log('no');
}
// END
export default sayPrimeOrNot;