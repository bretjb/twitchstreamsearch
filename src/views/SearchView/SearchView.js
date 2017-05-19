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

    onRender: function onRender() {
        const title = this.getRandomTitle();
        this.executeSearch(title);
    },

    getRandomTitle: () => {
        const games = ['Dungeons & Dragons', 'Overwatch', 'Earthbound',
        'Rocket League', 'FTL: Faster Than Light'];

        const min = 0;
        const max = games.length;
        const item = Math.floor(Math.random() * max);
        if (games[item] == null) debugger;
        return games[item];
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
        this.ui.searchBox.val(searchTerm);
    }
});
