// BEGIN
export default function prettify(docEl) {
    docEl.querySelectorAll('div').forEach((el) => {
        el.childNodes.forEach((divEl) => {
            if (divEl instanceof Text && divEl.textContent.trim().length > 0) {
                const pEl = docEl.createElement('p');
                pEl.textContent = divEl.textContent.trim();
                el.replaceChild(pEl, divEl);
            }
        })
    })
}
// END