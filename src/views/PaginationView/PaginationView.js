import Marionette from 'backbone.marionette';
import PaginationTemplate from './PaginationTmpl.hbs';
import PaginationModel from '../../models/PaginationModel.js';

export default Marionette.View.extend({
    template: PaginationTemplate,
    className: 'row',
    model: new PaginationModel(),

    ui: {
        next: '#pv-next',
        prev: '#pv-prev'
    },

    events: {
        'click @ui.next': 'next',
        'click @ui.prev': 'prev'
    },

    templateContext: function templateContext() {
        const self = this;
        return {
            humanCurrentPage: function humanCurrentPage() {
                return self.model.get('currentPage') + 1;
            }
        };
    },

    next: function next() {
        this.triggerMethod('pagination:updated', this.model.get('currentPage') + 1);
        this.render();
    },

    prev: function prev() {
        this.triggerMethod('pagination:updated', this.model.get('currentPage') - 1);
        this.render();
    }
});
