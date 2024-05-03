// BEGIN
const each=(arr_obj, fn) => {
    for (const key of arr_obj) {
    fn.apply(key, arguments);
}
}
export default each
// END
