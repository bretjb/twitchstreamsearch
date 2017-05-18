import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        currentPage: 0,
        humanCurrentPage: 0,
        currentSearchTerm: '',
        results: null,
        totalPages: 0,
        totalResults: 0,
    }
});
