/*global MrWhite, Backbone*/

MrWhite.Collections = MrWhite.Collections || {};

(function () {
    'use strict';

    MrWhite.Collections.Blog = Backbone.Collection.extend({

        model: MrWhite.Models.Blog

    });

})();
