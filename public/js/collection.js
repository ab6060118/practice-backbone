DataCollection = Backbone.Collection.extend ({
  model: DataModel,
  url: 'getList',
});
