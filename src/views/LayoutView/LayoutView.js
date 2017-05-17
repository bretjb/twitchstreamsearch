import Marionette from 'backbone.marionette';
import LayoutTemplate from './LayoutTmpl.hbs';

const layoutView = Marionette.View.extend({
    template: LayoutTemplate,
    className: 'main-layout',

    regions: {
        'Search': '#search',
        'PagnatedListView': '#list-view'
    },

    initialize: () => {
        console.log('initialized layoutview');
    }
});

export default layoutView;