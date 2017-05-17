import Marionette from 'backbone.marionette';

const MainApp = Marionette.Application.extend({
    onStart: () => {
        console.log('STARTED');
    }
});

var app = new MainApp();
app.start();