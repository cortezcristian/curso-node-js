/*global MrWhite, Backbone, JST*/

MrWhite.Views = MrWhite.Views || {};

(function () {
    'use strict';

    MrWhite.Views.Blog = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
