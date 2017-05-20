/*
 * View for when a search term comes back empty.
*/
import Marionette from 'backbone.marionette';
import EmptyStreamsTemplate from './EmptyStreamsTmpl.hbs';

export default Marionette.View.extend({
    template: EmptyStreamsTemplate,
    className: 'row'
});
