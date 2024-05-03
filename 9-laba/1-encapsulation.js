// BEGIN
export  function getMutualFriends(user1, user2) {
  const user1Friends = user1.getFriends();
  const user2Friends = user2.getFriends();
  const mutualFriends = user1Friends.filter(user => user2Friends.some(friend => friend.id === user.id));
  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});