import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(doc)
{
    Array.from(doc.body.getElementsByTagName('*')).forEach((el)=>
    {
        el.classList.forEach((classEl)=>
            {
                el.classList.replace(classEl, camelCase(classEl).trim()); 
            })
    })
}
// END