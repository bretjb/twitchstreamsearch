import Marionette from 'backbone.marionette';

import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import LayoutTemplate from './LayoutTmpl.hbs';
import PaginationView from '../PaginationView/PaginationView.js';
import SearchView from '../SearchView/SearchView.js';
import StreamsView from '../StreamsView/StreamsView.js';

const layoutView = Marionette.View.extend({
    template: LayoutTemplate,
    className: 'container',

    regions: {
        Search: '#search',
        PaginatedListView: '#list-view',
        Streams: '#streams'
    },

    childEvents: {
        'search:updated': 'onSearchUpdated'
    },

    onRender: function onRender() {
        this.showChildView('Search', new SearchView());
        this.showChildView('PaginatedListView', new PaginationView());
        this.showChildView('Streams', new StreamsView());
    },

    onChildviewSearchUpdated: function searchUpdated(searchItems) {
        const streamsView = this.getChildView('Streams');
        streamsView.collection = searchItems;
        streamsView.render();
    }
});

export default layoutView;
