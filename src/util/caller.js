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

const normalizePage = (page, currentMax) => {
    let userPage = 0;
    if (page != null) {
        userPage = page < 0 ? 0 : page;
        if (page * 25 > currentMax) {
            userPage = page - 1;
        }
    }
    return userPage;
};

const getTwitchStreams = (searchTerm, page, currentMax) => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const userPage = normalizePage(page, currentMax);
    const userOffset = userPage * 25;

    return executeTwitchRequest(`streams/?game=${encodedSearchTerm}&offset=${userOffset}`)
        .then(response => response.json())
        .then(response => new PaginationModel({
            totalResults: response._total,
            totalPages: Math.round(response._total / 25) + 1,
            currentPage: userPage,
            results: new StreamsCollection(response.streams),
            currentSearchTerm: searchTerm
        }));
};

export { executeTwitchRequest as default, getTwitchStreams };
