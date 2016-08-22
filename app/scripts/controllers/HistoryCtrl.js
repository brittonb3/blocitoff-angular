(function() {
     function HistoryCtrl($scope, $firebaseArray) {
         var ref = firebase.database().ref();
         $scope.tasks = $firebaseArray(ref);
         
         
     }

     angular
         .module('blocitoff')
         .controller('HistoryCtrl', ['$scope', '$firebaseArray', HistoryCtrl]);
 })();
