import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => emails
.filter((email) => freeEmailDomains.includes(email.slice(email.indexOf('@')+1)))
.reduce((acc, email) =>
{
    if(!Object.hasOwn(acc, email.slice(email.indexOf('@')+1)))
    acc[email.slice(email.indexOf('@')+1)] = 0;
    acc[email.slice(email.indexOf('@')+1)]++;
    return acc;
}
, {})

//END
export default getFreeDomainsCount