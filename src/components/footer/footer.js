class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="footer__nav-link">
              <a href="https://www.coderscamp.edu.pl/" target="_blank">
                <img class="footer__logo" src="./images/CodersCamp-Emblem.png" alt="coderscamp-logo">
              </a>
              <a href="https://github.com/mcwiekala/CodersCamp2021.Project.Web-Development-Basics" target="_blank">
                <img class="footer__logo" src="./images/GitHub-Emblem.png" alt="github-logo">
              </a>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('footer-component', Footer);

  
  export default Footer;