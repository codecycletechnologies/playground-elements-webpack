import 'playground-elements';
import { Router } from '@vaadin/router';
import './index'; // Adding the lit-app component here for better performance
import './hello-world-ide';
console.log( 'Entry from index file' );
const router = new Router( document.querySelector( 'main' ) );

router.setRoutes( [
    {
        path: '/',
        component: 'simple-greeting'
    },
    {
        path: '/hello',
        component: 'hello-world-ide'
    },
] );
