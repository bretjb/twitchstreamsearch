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
        'click @ui.searchBtn': 'userSearch'
    },

    onRender: function onRender() {
        this.executeSearch('overwatch');
    },

    userSearch: function userSearch(event) {
        event.preventDefault();
        this.executeSearch(this.getSearchTerm());
    },

    getSearchTerm: function getSearchTerm() {
        return this.getUI('searchBox').val();
    },

    executeSearch: function executeSearch(searchTerm, offset) {
        const self = this;
        Caller
            .getTwitchStreams(searchTerm, offset)
            .then(response => self.triggerMethod('search:updated', response));
    }
});
