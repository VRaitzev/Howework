// BEGIN

const lines = document.body.innerHTML.trim().split(/\r?\n/);
const paragraphs = lines.map(line => `<p>${line.trim()}</p>`).join('\n');
document.body.innerHTML = paragraphs;

// END