/*
 * Handles display and model updating for all pagination for Twitch Stream Search SPA.
 *
 * Displays pagination data and user interaction with pagination controls.
*/

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
        'click @ui.next': 'onClickNext',
        'click @ui.prev': 'onClickPrev'
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

    onClickNext: function onClickNext() {
        const newCurrentPage = this.model.get('currentPage') + 1;
        this.model.set('currentPage', newCurrentPage);
        this.triggerMethod('pagination:updated', newCurrentPage);
    },

    onClickPrev: function onClickPrev() {
        const newCurrentPage = this.model.get('currentPage') - 1;
        this.model.set('currentPage', newCurrentPage);
        this.triggerMethod('pagination:updated', newCurrentPage);
    }
});
