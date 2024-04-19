const smallestDivisor = (num) => {
    // BEGIN
    if (num===1) return 1;
const iter = (num, div) =>
{
  if(num%div===0)
  return div;
  return iter(num, div+1)
}
  return iter(num, 2)
    // END
  };
  
export default smallestDivisor;
  