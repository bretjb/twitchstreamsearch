/*
 * Streams Model is a Backbone clone of the JSON data that
 * comes back from the twitch API. See https://dev.twitch.tv/docs/v5/reference/streams/#get-live-streams
 */

import Backbone from 'backbone';

export default Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        _id: 0,
        average_fps: 0,
        channel: {
            _id: 0,
            broadcaster_language: '',
            created_at: new Date(),
            display_name: '',
            followers: 0,
            game: '',
            language: '',
            logo: '',
            mature: true,
            name: '',
            partner: true,
            profile_banner: '',
            profile_banner_background_color: null,
            status: '',
            updated_at: new Date(),
            url: '',
            video_banner: '',
            views: 0,
        },
        created_at: new Date(),
        delay: 0,
        game: '',
        is_playlist: false,
        preview: {
            large: '',
            medium: '',
            small: '',
            template: ''
        },
        video_height: 0,
        viewers: 0
    }
});
