TEMPLATE = '<table id="goodTable"><tr><td>Msg: <input id="msgText" type="text"><button id="msgBtn">Send</button></td></tr></table>';

TableView = Backbone.View.extend ({
  template: function() {
    return _.template(TEMPLATE);
  },
  initialize: function() {
    this.listenTo(app.collection, 'reset', this.addAll);

    app.collection.fetch({reset: true});
    this.render();
  },
  events: {
    'click #msgBtn': 'send'
  },
  send: function() {
    app.collection.create({id:3, name: 'test'});
  },
  render: function() {
    this.$el.html(this.template);
  },
  addOne: function(model) {
    var item = new app.itemView({model: model});
    $('#goodTable').append(item.render());
    console.log(item.el);
  },
  addAll: function() {
    app.collection.each(this.addOne, this);
  }
});

var view = new TableView({el: $('#test')});
