import logoImage from '../../images/logo.svg';

class Header extends HTMLElement {
  constructor() {
    super();

    this.links = [
      {
        name: 'Home',
        href: 'home/',
        active: this.checkPathname('home'),
      },
      {
        name: 'Films',
        href: 'pages/films/',
        active: this.checkPathname('films'),
      },
      {
        name: 'Collections',
        href: 'pages/collection-details/',
        active: this.checkPathname('collection-details'),
      },
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  checkPathname(path) {
    const pathname = window.location.pathname.split('/');
    return pathname[pathname.length - 2] === path;
  }

  // eslint-disable-next-line class-methods-use-this
  hrefJoin(href) {
    const primaryHref = 'Web-Development-Basics/';
    return window.location.href.slice(0, window.location.href.search(primaryHref)
      + primaryHref.length) + href;
  }

  /* eslint-disable */
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <img class="header__logo" src="${logoImage}" height="60">
        <nav class="header__nav">
          <ul class="header__nav-list">
            ${this.links
              .map(
                (link) =>
                  `<li class="header__nav-item ${
                    link.active ? 'header__nav-item--active' : ''
                  }">
                    <a class="header__nav-link" href="${this.hrefJoin(link.href)}">${link.name}
                  </li>`
              )
              .join('')}
          </ul>
        </nav>
      </header>
    `;
  }
  /* eslint-disable */
}

customElements.define('header-component', Header);

export default Header;
