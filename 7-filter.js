// BEGIN
const getGirlFriends = (users) =>
{
    users = users.map((user)=> user["friends"]);
    users = users.flat();
    users = users.filter((user)=> user["gender"]==="female");
    return users;
}
// END
export default getGirlFriends
