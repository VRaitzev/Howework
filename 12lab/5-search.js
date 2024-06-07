export default (docEl) => {
  // BEGIN
  let elms, result={}, tmp={};
  result.title = docEl.querySelector('.content > h1').textContent.trim()
  result.description = docEl.querySelector(' .description').textContent.trim(),
  result.items = []
  elms = Array.from(docEl.querySelectorAll(' .links > div'));
  elms.map((el) => {
    tmp.title = el.querySelector('h2 > a').textContent.trim(),
    tmp.description= el.querySelector('p').textContent.trim()
    result.items.push(tmp)
    tmp={}
  })
  return result
  // END
};


