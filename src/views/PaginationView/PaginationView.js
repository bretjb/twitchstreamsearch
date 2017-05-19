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
            },
            emptyResults: this.model.get('totalResults') === 0
        };
    },

    next: function next() {
        const newCurrentPage = this.model.get('currentPage') + 1;
        this.model.set('currentPage', newCurrentPage);
        this.triggerMethod('pagination:updated', newCurrentPage);
    },

    prev: function prev() {
        const newCurrentPage = this.model.get('currentPage') - 1;
        this.model.set('currentPage', newCurrentPage);
        this.triggerMethod('pagination:updated', newCurrentPage);
    }
});
