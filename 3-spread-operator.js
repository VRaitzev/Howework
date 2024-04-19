// BEGIN
const convert = (...date) => 
{
    if(date.length===0) return []
    let convDate=[];
    for(let i of date)
    {
        i[1]++;
        if(i[1]>12) {i[1] = i[1]-12; i[0]++}
        let newDate = new Date(i);
        convDate.push(newDate.toDateString());
    }
    return convDate;
}
// END
export default convert;