import _ from 'lodash';

// BEGIN
const average = (...rest) => Boolean(rest.length)?_.sum(rest)/rest.length:null;
// END
export default average;