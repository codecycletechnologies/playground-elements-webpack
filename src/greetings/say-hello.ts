import { LitElement, html, customElement } from 'lit-element';
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
