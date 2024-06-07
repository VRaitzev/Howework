export default () => {
  // BEGIN
  const navs = document.querySelectorAll('.nav');
  navs.forEach(nav => {
      nav.querySelectorAll('.nav-link').forEach(button => {
          button.addEventListener('click', () => {
              const activeButton = nav.querySelector('.nav-link.active');
              activeButton.classList.remove('active');
              const activeTabId = activeButton.dataset.bsTarget;
              const activeTab = document.querySelector(activeTabId);
              activeTab.classList.remove('active');
  
              button.classList.add('active');
              const tabId = button.dataset.bsTarget;
              const tab = document.querySelector(tabId);
              tab.classList.add('active');
          });
      });
  });
  // END
};
