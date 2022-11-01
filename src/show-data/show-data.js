import { LitElement, html, css } from 'lit-element';
import '../data-manager/data-manager';

class ShowData  extends LitElement {

  static get is() {
    return 'show-data';
  }

  static get properties() {
    return {
        url:{type:String}
    };
  }

  constructor() {
    super();
    this.url='https://api.datos.gob.mx/v1/calidadAire';
  }

  render() {
    return html`
    
    <data-manager .url="${this.url}"></data-manager>

    <table border>
	<tr>
		<TH>Head1</TH> <TH>Head2</TH> <TH>Head3</TH>
	</tr>
	<tr>
		<TD>A</TD> <TD>B</TD> <TD>C</TD>
	</tr>
	<tr>
		<TD>D</TD> <TD>E</TD> <TD>F</TD>
	</tr>
    </table>
  
    `;
  }
}

customElements.define(ShowData.is, ShowData);
export default ShowData