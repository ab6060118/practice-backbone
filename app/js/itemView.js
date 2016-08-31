ITEM_TEMPLATE = '<td><%= name %></td>';

ItemView = Backbone.View.extend ({
  tagName: 'tr',
  template: _.template(ITEM_TEMPLATE),
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }
});

app.itemView = ItemView;
