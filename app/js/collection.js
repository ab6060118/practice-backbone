DataCollection = Backbone.Collection.extend ({
  model: DataModel,
  url: 'users',
});

app.collection = new DataCollection();
