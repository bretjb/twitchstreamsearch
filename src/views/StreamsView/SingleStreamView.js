import Marionette from 'backbone.marionette';
import SingleStreamTemplate from './SingleStreamTmpl.hbs';

export default Marionette.View.extend({
    template: SingleStreamTemplate,
    className: 'row',

    onRender: function onRender() {
        console.log(this.model);
    }
});
