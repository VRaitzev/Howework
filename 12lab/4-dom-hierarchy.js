// BEGIN
const extractData = (docEl) =>
{
    let elms, result=[];
    elms = docEl.getElementsByTagName('p');
    elms = Array.from(elms);
    elms.map((el) => {result.push(el.textContent.trim())})
    return result
}
export default extractData
// END