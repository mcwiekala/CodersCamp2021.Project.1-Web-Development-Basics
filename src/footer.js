class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="social-row">
              <a class="a-footer" href="https://www.coderscamp.edu.pl/" target="_blank">
                <img class="logo-footer" src="./images/CodersCamp-Emblem.png" alt="github-logo">
              </a>
              <a class="a-footer" href="https://github.com/mcwiekala/CodersCamp2021.Project.Web-Development-Basics" target="_blank">
                <img class="logo-footer" src="./images/GitHub-Emblem.png" alt="github-logo">
              </a>
          </div>
        </footer>
      `;
    }
  }
  
  export default Footer;