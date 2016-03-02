angular.module('maintenance', ['ngRoute'])
  .controller('adminCtrl', AdminCtrl)
  .controller('mainCtrl', MainCtrl)
  .controller('locationsCtrl', LocationsCtrl)
  .controller('sitesCtrl', SitesCtrl)
  .factory('currentSpot', currentSpot)
  .config(function($routeProvider){
    $routeProvider.when('/locations', {
      templateUrl:'views/locations.html'
    });
    $routeProvider.when('/sites', {
      templateUrl: 'views/sites.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/main.html'
    });
  });

function AdminCtrl($scope) {
 
}

function currentSpot(){
  var activeMenuId = '';
  var titleText = title;

  return {
    setCurrentSpot: function(menuId, title){
      activeMenuId = menuId;
      titleText = title;
    },
    getActiveMenu: function(){
      return activeMenuId;
    },
    getTitle: function(){
      return titleText;
    }
  }
}
