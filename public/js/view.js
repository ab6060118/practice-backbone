TEMPLATE = '<table id="goodTable"><tr><td>Enable: <input type="checkbox"></td></tr><tr id="dataRow"></tr></table>';

TableView = Backbone.View.extend ({
  el: $('#test'),
  template: function() {
    return _.template(TEMPLATE);
  },
  initialize: function() {
    this.collection = new DataCollection();
    var test = this.collection.fetch();
    console.log(test);
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
  }
});

var view = new TableView();
