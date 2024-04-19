// BEGIN

const groupBy = (users, key) =>
{
    return users.reduce((acc, user)=>
{
    if(!Object.hasOwn(acc, user[key]))
    acc[user[key]] = [];
    acc[user[key]].push(user);
    return acc;
}, {})
}
// END
export default groupBy
