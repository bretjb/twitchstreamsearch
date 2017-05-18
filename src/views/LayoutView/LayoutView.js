import Marionette from 'backbone.marionette';

import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import LayoutTemplate from './LayoutTmpl.hbs';
import PaginationView from '../PaginationView/PaginationView.js';
import SearchView from '../SearchView/SearchView.js';
import StreamsView from '../StreamsView/StreamsView.js';
import PaginationModel from '../../models/PaginationModel.js';

const layoutView = Marionette.View.extend({
    template: LayoutTemplate,
    className: 'container',
    model: new PaginationModel(),

    regions: {
        Search: '#search',
        PaginatedListView: '#list-view',
        Streams: '#streams'
    },

    onRender: function onRender() {
        this.showChildView('Search', new SearchView());
        this.showChildView('PaginatedListView', new PaginationView());
        this.showChildView('Streams', new StreamsView());
    },

    onChildviewSearchUpdated: function searchUpdated(paginationResult) {
        this.model = paginationResult;

        // update streams
        const streamsView = this.getChildView('Streams');
        streamsView.collection = paginationResult.get('results');
        streamsView.render();

        // update pagination
        const paginationView = this.getChildView('PaginatedListView');
        paginationView.model = paginationResult;
        paginationView.render();
    },

    onChildviewPaginationUpdated: function onChildViewPaginationUpdated(page) {
        const searchView = this.getChildView('Search');
        searchView.executeSearch(this.model.get('currentSearchTerm'), page);
    }
});

export default layoutView;
