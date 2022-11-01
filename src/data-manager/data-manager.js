import { LitElement, html, css } from 'lit-element';

class DataManager  extends LitElement {

  static get is() {
    return 'data-manager';
  }

  static get properties() {
    return {
        url: {type: String},
        dataApi: {type: Object}
    };
  }

  constructor() {
    super();
    this.url ='';
    this.dataApi={};
  }

  render() {
    return html`
      <button
      type ="button"
      @click="${this.dataManager(this.url)}">button</button>
    `;
  }

  dataManager(url){
    fetch(url)
    .then(response => response.json())
    .then(data => this.saveData(data))
    .catch(error => console.log(error))
}

saveData(data){
    console.log(data);
}
}

customElements.define(DataManager.is, DataManager);
export default DataManager