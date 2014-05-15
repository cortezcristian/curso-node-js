/*global MrWhite, Backbone*/

MrWhite.Models = MrWhite.Models || {};

(function () {
    'use strict';

    MrWhite.Models.Blog = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
