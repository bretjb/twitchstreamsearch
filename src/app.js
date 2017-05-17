import Marionette from 'backbone.marionette';
import LayoutView from './views/LayoutView/LayoutView.js';

const MainApp = Marionette.Application.extend({
    region: 'body',

    onStart: function onStart() {
        this.showView(new LayoutView());
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const app = new MainApp();
    app.start();
});