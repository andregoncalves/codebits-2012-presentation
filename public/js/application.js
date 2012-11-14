








/*var app = angular.module('todo', []);*/

/*
app.controller('AppCtrl', function($scope) {
  
  // Step 1 : title
  //$scope.title = 'Codebits';
  
});
*/

/*
app.controller('AppCtrl', function($scope) {
  
  // Step 1 : title
  $scope.title = 'Codebits';
  
  // Step 2 : items
  var items = [
    { text: 'Register', done: true, completed_at: false },
    { text: 'Attend Opening Keynote', done: false, completed_at: false },
    { text: 'Meet new interesting people', done: false, completed_at: false },
    { text: 'Survive nuclear tacos', done: false, completed_at: false },
    { text: 'Win Programming Contest', done: false, completed_at: false },
  ];
  
  // Step 2 : Publish on $scope
  $scope.items = items;
  
});
*/

/*
app.controller('AppCtrl', function($scope) {
  
  // Step 1 : title
  $scope.title = 'Codebits';
  
  // Step 2 : items
  var items = [
    { text: 'Register', done: true, completed_at: false },
    { text: 'Attend Opening Keynote', done: false, completed_at: false },
    { text: 'Meet new interesting people', done: false, completed_at: false },
    { text: 'Survive nuclear tacos', done: false, completed_at: false },
    { text: 'Win Programming Contest', done: false, completed_at: false },
  ];
  
  // Step 2 : Publish on $scope
  $scope.items = items;
  
  // Step 3 : Add remaining tasks
  $scope.remaining = function() {
    return $scope.items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  }
  
});*/

/*app.controller('AppCtrl', function($scope) {
  
  // Step 1 : title
  $scope.title = 'Codebits';
  
  // Step 2 : items
  var items = [
    { text: 'Register', done: true, completed_at: false },
    { text: 'Attend Opening Keynote', done: false, completed_at: false },
    { text: 'Meet new interesting people', done: false, completed_at: false },
    { text: 'Survive nuclear tacos', done: false, completed_at: false },
    { text: 'Win Programming Contest', done: false, completed_at: false },
  ];
  
  // Step 2 : Publish on $scope
  $scope.items = items;
  
  // Step 3 : Add remaining tasks
  $scope.remaining = function() {
    return $scope.items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  }
  
  $scope.addItem = function() {
    var item = { text: $scope.newItem.text, done: false, completed_at: false };
    $scope.items.push(item);

    // Clear the form text input
    $scope.newItem.text = '';
  }
  
});*/

/*
var app = angular.module('todo', ['ngResource']);

app.controller('AppCtrl', function($scope, Item) {
  
  // Step 1 : title
  $scope.title = 'Codebits';
  
  // Step 6 : item query
  $scope.items = Item.query();
  
    // Step 3 : Add remaining tasks
  $scope.remaining = function() {
    return $scope.items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  }
  
  $scope.addItem = function() {
    //var item = { text: $scope.newItem.text, done: false, completed_at: false };
    var item = new Item({text: $scope.newItem.text, done:false });
    $scope.items.push(item);

    // Clear the form text input
    $scope.newItem.text = '';
    
    // Save task collection to mongolab
    item.$save();
  }
  
  $scope.archive = function() {
    $scope.items = $scope.items.filter(function(item) {
      if (item.done) {
        item.$remove();
        return false;
      }
      return true;
    });
  };
  
});

app.constant('apiKey', '50a29dfde4b0cd0bfc12434f');

app.factory('Item', function($resource, apiKey) {
  var Item = $resource('https://api.mongolab.com/api/1/databases/codebits/collections/items/:id', {
    apiKey: apiKey
  }, {
    update: {method: 'PUT'}
  });

  Item.prototype.$remove = function() {
    Item.remove({id: this._id.$oid});
  };

  Item.prototype.$update = function() {
    return Item.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
  };

  Item.prototype.done = false;

  return Item;
});
*/

/*
var app = angular.module('todo', ['ngResource']);

app.controller('AppCtrl', function($scope, Item) {
  
  // Step 1 : title
  $scope.title = 'Codebits';
  
  // Step 6 : item query
  $scope.items = Item.query();
  
    // Step 3 : Add remaining tasks
  $scope.remaining = function() {
    return $scope.items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  }
  
  $scope.addItem = function() {
    //var item = { text: $scope.newItem.text, done: false, completed_at: false };
    var item = new Item({text: $scope.newItem.text, done:false });
    $scope.items.push(item);

    // Clear the form text input
    $scope.newItem.text = '';
    
    // Save task collection to mongolab
    item.$save();
  }
  
  $scope.archive = function() {
    $scope.items = $scope.items.filter(function(item) {
      if (item.done) {
        item.$remove();
        return false;
      }
      return true;
    });
  };
  
});

app.constant('apiKey', '50a29dfde4b0cd0bfc12434f');

app.factory('Item', function($resource, apiKey) {
  var Item = $resource('https://api.mongolab.com/api/1/databases/codebits/collections/items/:id', {
    apiKey: apiKey
  }, {
    update: {method: 'PUT'}
  });

  Item.prototype.$remove = function() {
    Item.remove({id: this._id.$oid});
  };

  Item.prototype.$update = function() {
    return Item.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
  };

  Item.prototype.done = false;

  return Item;
});

app.directive('taskList', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<ul class="unstyled" ng-transclude></ul>'
  }
});

app.directive('task', function() {
  return {
    require: '^tasks',
    restrict: 'E',
    template: '<li class="done-{{item.done}}">' + 
                '<input type="checkbox" class="input" ng-model="item.done"> {{item.text}}' + 
               '</li>'
  }
});
*/

/*
var app = angular.module('todo', ['ngResource']);

app.controller('AppCtrl', function($scope, Item) {
  $scope.title="Codebits";
  
  // Step 6 : item query
  $scope.items = Item.query();
  
    // Step 3 : Add remaining tasks
  $scope.remaining = function() {
    return $scope.items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  }
  
  $scope.addItem = function() {
    //var item = { text: $scope.newItem.text, done: false, completed_at: false };
    var item = new Item({text: $scope.newItem.text, done:false });
    $scope.items.push(item);

    // Clear the form text input
    $scope.newItem.text = '';
    
    // Save task collection to mongolab
    item.$save();
  }
  
  $scope.archive = function() {
    $scope.items = $scope.items.filter(function(item) {
      if (item.done) {
        item.$remove();
        return false;
      }
      return true;
    });
  };
  
});


app.controller('HeaderCtrl', function($scope) {
  $scope.title = "Andre's";  
});


app.constant('apiKey', '50a29dfde4b0cd0bfc12434f');

app.factory('Item', function($resource, apiKey) {
  var Item = $resource('https://api.mongolab.com/api/1/databases/codebits/collections/items/:id', {
    apiKey: apiKey
  }, {
    update: {method: 'PUT'}
  });

  Item.prototype.$remove = function() {
    Item.remove({id: this._id.$oid});
  };

  Item.prototype.$update = function() {
    return Item.update({id: this._id.$oid}, angular.extend({}, this, {_id: undefined}));
  };

  Item.prototype.done = false;

  return Item;
});

app.directive('taskList', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<ul class="unstyled" ng-transclude></ul>'
  }
});

app.directive('task', function() {
  return {
    require: '^tasks',
    restrict: 'E',
    template: '<li class="done-{{item.done}}">' + 
                '<input type="checkbox" class="input" ng-model="item.done"> {{item.text}}' + 
               '</li>'
  }
});
*/