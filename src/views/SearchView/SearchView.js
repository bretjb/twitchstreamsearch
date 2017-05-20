/*
 * Handles display and model updating for all search requests for Twitch Stream Search SPA.
*/

import Marionette from 'backbone.marionette';
import SearchTemplate from './SearchTmpl.hbs';
import * as Caller from '../../util/caller.js';

export default Marionette.View.extend({
    template: SearchTemplate,
    className: 'row search-view my-4',

    ui: {
        searchBox: '#sv-streamSearch',
        searchBtn: '#sv-search'
    },

    events: {
        'click @ui.searchBtn': 'userSearch'
    },

    // Executes when the page is rendered. Will display
    // a default search term.
    onRender: function onRender() {
        this.executeSearch(this.getRandomTitle());
    },

    getRandomTitle: () => {
        const games = ['Dungeons & Dragons', 'Overwatch', 'Earthbound',
        'Rocket League', 'FTL: Faster Than Light'];

        const item = Math.floor(Math.random() * games.length);
        return games[item];
    },

    userSearch: function userSearch() {
        this.executeSearch(this.getSearchTerm());
    },

    getSearchTerm: function getSearchTerm() {
        return this.getUI('searchBox').val();
    },

    // When a search is executed, we call the API, then trigger
    // a updated search event, and finally display the new
    // search term on the DOM.
    executeSearch: function executeSearch(searchTerm, offset) {
        const self = this;
        Caller
            .getTwitchStreams(searchTerm, offset, this.currentMax)
            .then(response => {
                self.currentMax = response.get('totalResults');
                self.triggerMethod('search:updated', response);
            });
        this.ui.searchBox.val(searchTerm);
    }
});
