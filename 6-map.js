// BEGIN
const getChildren = (users) =>
{
    if(users.length===0)return [];
    users = users.map((user)=> user["children"]);
    users = users.flat();
    return users;
}
// END
export default getChildren;