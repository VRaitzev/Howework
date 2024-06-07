import escapeHtml from 'escape-html';

// BEGIN
function handleSubmit(event) {
    event.preventDefault();
  
    const email = escapeHtml(event.target.elements.email.value);
    const name = escapeHtml(event.target.elements.name.value);
    const comment = escapeHtml(event.target.elements.comment.value);
  
    const feedbackDiv = document.createElement('div');
    feedbackDiv.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    `;
  
    event.target.replaceWith(feedbackDiv);
  }
  
  export default function handleFormSubmit() {
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', handleSubmit);
  }
// END