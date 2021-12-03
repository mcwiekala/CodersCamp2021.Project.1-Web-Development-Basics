class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <ul class="side-map">
            <li><a class="a-footer" href="about.html">About</a></li>
            <li><a class="a-footer" href="terms.html">Terms of use</a></li>
            <li><a class="a-footer" href="contact.html">Contact</a></li>
          </ul>
          <ul class="social-row">
            <li>
              <a class="a-footer" href="https://www.coderscamp.edu.pl/" target="_blank">
                <img class="logo-footer" src="./images/CodersCamp-Emblem.png" alt="github-logo">
              </a>
            </li>
            <li>
              <a class="a-footer" href="https://github.com/mcwiekala/CodersCamp2021.Project.Web-Development-Basics" target="_blank">
                <img class="logo-footer" src="./images/GitHub-Emblem.png" alt="github-logo">
              </a>
            </li>
          </ul>
        </footer>
      `;
    }
  }
  
  export default Footer;