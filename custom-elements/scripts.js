class ShadowOrganoid extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode: 'open'});
  }
}

class SpeculaOrganoid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

  }
}

customElements.define('shadow-organoid', ShadowOrganoid);
customElements.define('specula-organoid', SpeculaOrganoid);