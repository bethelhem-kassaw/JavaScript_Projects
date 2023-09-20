const routes = {
    '/': {
      linkLabel: 'Home',
      fileName: 'Project_Template/Pages/home.html'
    },
    '/about': {
      linkLabel: 'About',
      fileName: 'Project_Template/Pages/productList.html'
    },
    '/friends': {
      linkLabel: 'Friends',
      fileName: 'Project_Template/Pages/productsDetails.html'
    },
  };

  const app = document.querySelector('#app');
const nav = document.querySelector('#nav');

// function to create new nav items
const renderNavlinks = () => {
    const navFragment = document.createDocumentFragment();
    Object.keys(routes).forEach(route => {
      const { linkLabel } = routes[route];
  
      const linkElement = document.createElement('a')
      linkElement.href = route;
      linkElement.textContent = linkLabel;
      linkElement.className = 'nav-link';
      navFragment.appendChild(linkElement);
    });
  
    nav.append(navFragment);
  };

  const registerNavLinks = () => {
    nav.addEventListener('click', (e) => {
      e.preventDefault();
      const { href } = e.target;
      history.pushState({}, "", href);
      navigate(e); // pending implementation
    });
  };

//   const renderContent = route => app.innerHTML = routes[route].content; 
  const renderContent = route => {
    const fileName = routes[route].fileName;
  
    if (fileName) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', fileName, true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          app.innerHTML = xhr.responseText;
        } else {
          app.innerHTML = 'Error loading page.';
        }
      };
  
      xhr.send();
    } else {
      app.innerHTML = 'Page not found.';
    }
  };

const navigate = e => {
    const route = e.target.pathname;
    // this is responsible for adding the new path name to the history stack
    history.pushState({}, "", route);
    renderContent(route);
};

const registerBrowserBackAndForth = () => {
    window.onpopstate = function (e) {
      const route = location.pathname;
      renderContent(route);
    };
  };
  
  const renderInitialPage = () => {
    const route = location.pathname;
    renderContent(route);
  };

  (function bootup() {
    renderNavlinks();
    registerNavLinks();
    registerBrowserBackAndForth();
    renderInitialPage();
  })();