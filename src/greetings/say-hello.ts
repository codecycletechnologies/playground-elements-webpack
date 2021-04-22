import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement( 'say-hello' )

export class SayHello extends LitElement
{

    render ()
    {
        return html`
            <div>Helloooooooo</div>
        `;
    }
}
