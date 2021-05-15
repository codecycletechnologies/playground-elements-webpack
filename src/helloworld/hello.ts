import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement( 'hello-world' )

export class Hello extends LitElement
{

    render ()
    {
        return html`
            <div>Helloooooooo World, how are you</div>
        `;
    }
}
