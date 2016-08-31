var app = app ? app : {};

DataModel = Backbone.Model.extend ({
  url: 'users'
});

app.model = DataModel;
