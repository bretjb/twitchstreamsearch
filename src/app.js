/*
 * Entry point for Marionette application.
 *
 * Loads globally necessary objects (e.g., Promise polyfill for fetch api),
 * and sets up the LayoutView for displaying the individual components of the
 * stream search spa.
*/

import Marionette from 'backbone.marionette';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';

import LayoutView from './views/LayoutView/LayoutView.js';

const MainApp = Marionette.Application.extend({
    region: 'body',

    onStart: function onStart() {
        this.showView(new LayoutView());
    }
});

// add global promise polyfill. Used by fetch polyfill.
if (!window.Promise) {
    window.Promise = Promise;
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new MainApp();
    app.start();
});
