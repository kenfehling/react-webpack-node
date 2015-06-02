'use strict';
var $ = require('jquery');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Navigation = require('../components/Navigation.react');
var FacebookLogin = require('../services/FacebookLogin');
var RestClient = require('../services/RestClient');

require('../utils/initInitialImages');
require('../scss/main.scss');

var App = React.createClass({
    componentWillMount: function() {
        this.state = {
            user: null
        };
        FacebookLogin.addLoginListener(function(accessToken) {
            var callback = function(response) {
                this.setState({ user: response });
            };
            var data = { accessToken: accessToken };
            RestClient.post('/user', data, callback.bind(this));
        }.bind(this));
        FacebookLogin.fbInit();
    },

    render: function() {
        return (
            <div>
                <Navigation />
                <div><a onClick={FacebookLogin.login}>Login</a></div>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;
