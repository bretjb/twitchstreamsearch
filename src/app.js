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
