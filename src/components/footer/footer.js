import codersCampImage from '/images/CodersCamp.png'
import githubImage from '/images/GitHub.png'

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="footer__nav-link">
              <a href="https://www.coderscamp.edu.pl/" target="_blank">
                <img class="footer__logo" src="${codersCampImage}" alt="coderscamp-logo">
              </a>
              <a href="https://github.com/mcwiekala/CodersCamp2021.Project.Web-Development-Basics" target="_blank">
                <img class="footer__logo" src="${githubImage}" alt="github-logo">
              </a>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('footer-component', Footer);

  
  export default Footer;