import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
@customElement( 'hello-world-ide' )
export class HelloWorldIde extends LitElement
{
    @property() name = 'World!!!!';

    render ()
    {
        return html`
        <p>Hello, ${ this.name }!</p>
        <mwc-button label="standard"></mwc-button>
        <playground-ide line-numbers resizable editable-file-system project-src="./helloworld/hello.json"> </playground-ide>
        `;
    }
}
