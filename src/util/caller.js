import PaginationModel from '../models/PaginationModel.js';
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

const getTwitchStreams = (searchTerm, page) => {
    //debugger;
    let userOffset = 0;
    if (page != null) {
        userOffset = page * 25;
    }
    return executeTwitchRequest(`streams/?game=${searchTerm}&offset=${userOffset}`)
        .then(response => response.json())
        .then(response => new PaginationModel({
            totalResults: response._total,
            totalPages: Math.round(response._total / 25),
            currentPage: page, // maybe?
            results: new StreamsCollection(response.streams),
            currentSearchTerm: searchTerm
        }));
};

// TODO: Delete me!
window.getTwitchStreams = getTwitchStreams;
window.executeTwitchRequest = executeTwitchRequest;

export { executeTwitchRequest as default, getTwitchStreams };
