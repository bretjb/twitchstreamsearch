import Marionette from 'backbone.marionette';
import SearchTemplate from './SearchTmpl.hbs';
import * as Caller from '../../util/caller.js';

export default Marionette.View.extend({
    template: SearchTemplate,
    className: 'row',

    ui: {
        searchBox: '#sv-streamSearch',
        searchBtn: '#sv-search'
    },

    events: {
        'click @ui.searchBtn': 'search'
    },

    search: function search(event) {
        const self = this;
        event.preventDefault();
        const searchTerm = this.getSearchTerm();
        Caller
            .getTwitchStreams(searchTerm)
            .then(response => self.triggerMethod('search:updated', response));
    },

    getSearchTerm: function getSearchTerm() {
        return this.getUI('searchBox').val();
    }
});
