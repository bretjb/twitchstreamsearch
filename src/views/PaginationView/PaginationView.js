import Marionette from 'backbone.marionette';
import PaginationTemplate from './PaginationTmpl.hbs';

export default Marionette.View.extend({
    template: PaginationTemplate,
    className: 'row'
});
