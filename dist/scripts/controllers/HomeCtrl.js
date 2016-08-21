(function() {
     function HomeCtrl($scope, $firebaseArray) {
         var ref = firebase.database().ref();
         $scope.tasks = $firebaseArray(ref);
         
         $scope.addTask = function() {
             $scope.tasks.$add({
                 text: $scope.newTask
             });
         };
     }
 
     angular
         .module('blocitoff')
         .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
 })();