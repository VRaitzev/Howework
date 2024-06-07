export default () => {
  // BEGIN
  let count = 0;
  let button = document.getElementById('alert-generator');
  let divAlert = document.querySelector('.alerts.m-5');
  
  button.addEventListener('click', () => {
    count++;
    const divAL = document.createElement('div');
    divAL.classList = 'alert alert-primary';
    divAL.textContent = 'Alert ' + count;
    divAlert.insertBefore(divAL, divAlert.firstChild); 
  });
  // END
};