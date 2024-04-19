const run = (text) => {
    // BEGIN
const takeLast = (text, num) => 
{
  let revStr = '';
    if(text.length < num) return null
    for(let i=text.length-1; i>=text.length-num; i--)
    {
      revStr+=text[i];
    }
    return revStr;
}
    // END
  
    return takeLast(text, 4);
  };
  
export default run;