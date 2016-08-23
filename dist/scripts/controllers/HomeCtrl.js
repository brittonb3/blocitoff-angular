(function() {
     function HomeCtrl($scope, $firebaseArray) {
         var ref = firebase.database().ref();
         $scope.tasks = $firebaseArray(ref);

         $scope.addTask = function() {
             $scope.tasks.$add({
                 text: $scope.newTask,
                 time: firebase.database.ServerValue.TIMESTAMP,
                 priority: $scope.newPriority,
                 state: "active",
                 complete: false
             });
         };
         
         $scope.expiredTask = function(task) {
            var currentTime = new Date();
            if ((currentTime - task.time) >= 10000){
                if( task.complete === true) {
                    return false;
                }
                return true;
            } else {
                task.state = "expired";
                $scope.tasks.$save(task);
                return false;
            }
         };
         
         $scope.completedTask = function(task) {
              task.complete = true;
             $scope.tasks.$save(task);
         };
     }

     angular
         .module('blocitoff')
         .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
 })();
