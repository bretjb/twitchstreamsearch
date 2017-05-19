import Marionette from 'backbone.marionette';
import SingleStreamTemplate from './SingleStreamTmpl.hbs';

export default Marionette.View.extend({
    template: SingleStreamTemplate,
    className: 'single-stream row my-3',
});
