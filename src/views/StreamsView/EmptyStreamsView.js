import Marionette from 'backbone.marionette';
import EmptyStreamsTemplate from './EmptyStreamsTmpl.hbs';

export default Marionette.View.extend({
    template: EmptyStreamsTemplate,
    className: 'row'
});
