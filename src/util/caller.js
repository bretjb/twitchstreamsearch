import StreamsCollection from '../models/StreamsCollection.js';

const executeTwitchRequest = (endpoint) => {
    const url = `https://api.twitch.tv/kraken/${endpoint}`;

    const userHeaders = new Headers({
        Accept: 'application/vnd.twitchtv.v5+json',
        'Client-ID': '25f8jtj635mg5hq3cd54zxwjij9paf'
    });

    const fetchOptions = {
        method: 'GET',
        headers: userHeaders
    };
    return fetch(url, fetchOptions);
};

const getTwitchStreams = function getTwitchStreams(searchTerm) {
    return executeTwitchRequest(`streams/?game=${searchTerm}`)
        .then(response => response.json())
        .then(response => new StreamsCollection(response.streams));
};

// TODO: Delete me!
window.getTwitchStreams = getTwitchStreams;
window.executeTwitchRequest = executeTwitchRequest;

export { executeTwitchRequest as default, getTwitchStreams };
