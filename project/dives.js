//This is our Model - the data we are  using
var dives = [
  {
    site: 'Abu Gotta Ramada',
    location: 'Hurghada, Egypt',
    depth: 72,
    time: 54
  },
  {
    site: 'Ponte Mahoon',
    location: 'Maehbourg, Mauritius',
    depth: 54,
    time: 38
  },
  {
    site: 'Molnar Cave',
    location: 'Budapest, Hungary',
    depth: 98,
    time: 62
  }];

// This the Controller - the way the model interacts with the view
angular.module('diveLog', [])
  .controller('diveLogCtrl', DiveLogCtrl);

function DiveLogCtrl($scope) {
      var index = 0;
      $scope.dives = [];

      $scope.addDive = function () {
        if ($scope.enableAdd()) {
          $scope.dives.push(dives[index++]);
        }
      }

      $scope.clearDives = function () {
        $scope.dives = [];
        index = 0;
      }

      $scope.enableAdd = function () {
        return index < dives.length;
      }
    }