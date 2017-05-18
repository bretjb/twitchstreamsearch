import Backbone from 'backbone';
import StreamsModel from './StreamsModel.js';

export default Backbone.Collection.extend({
    model: StreamsModel
});
