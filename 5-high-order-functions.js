import _ from 'lodash';

// BEGIN
const takeOldest = (users, count=1) =>
{
    let dateMas = users.sort((a, b) => 
        {
            if(a.birthday === b.birthday)
            return 0;
            return Date.parse(a.birthday) > Date.parse(b.birthday) ?  1:  -1
         }); 
    return dateMas.slice(0, count);
}
// END
export default takeOldest