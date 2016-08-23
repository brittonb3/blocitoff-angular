(function() {
     function HomeCtrl($scope, $firebaseArray) {
         var ref = firebase.database().ref();
         $scope.tasks = $firebaseArray(ref);

         $scope.addTask = function() {
             $scope.tasks.$add({
                 text: $scope.newTask,
                 time: firebase.database.ServerValue.TIMESTAMP,
                 priority: $scope.newPriority,
                 state: "active"
             });
         };
         
         $scope.expiredTask = function(task) {
            var currentTime = new Date();
            if ((currentTime - task.time) >= 10000){
                return true;
            } else {
                return false;
            }
         };
         
         
     }

     angular
         .module('blocitoff')
         .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
 })();
