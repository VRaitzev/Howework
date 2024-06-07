// BEGIN
const bom_func = (str) =>
    {
        location.href=str;
        str='';
        str += navigator.appCodeName;
        str += `/${navigator.appVersion}`;
        str +=` ${location.href}`;
        return str
    }
export default bom_func;
// END