import Marionette from 'backbone.marionette';
import SingleStreamView from './SingleStreamView.js';
import EmptyStreamsView from './EmptyStreamsView.js';

export default Marionette.CollectionView.extend({
    childView: SingleStreamView,
    emptyView: EmptyStreamsView
});
