'use strict';

var $ = require('jquery');

function toAbsolute(url) {
    var host = window.location.hostname;
    if (host.indexOf('localhost') === 0 || host.indexOf('192.168') === 0) {
        return 'https://' + host + ":" + 9000 + url;
    }
    else {
        return 'https://restify-api.herokuapp.com' + url;
    }
}

function get(url, callback) {
    $.getJSON(toAbsolute(url), callback);
}

function post(url, data, callback) {
    $.post(toAbsolute(url), data, callback, 'json');
}

module.exports = {
    get: get,
    post: post
};