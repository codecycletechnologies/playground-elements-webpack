import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement( 'simple-greeting' )
export class SimpleGreeting extends LitElement
{
    @property() name = 'World!!!!';

    render ()
    {
        return html`
        <p>Hello, ${ this.name }!</p>
        <playground-ide line-numbers resizable editable-file-system project-src="./greetings/say-hello.json"> </playground-ide>
        `;
    }
}
