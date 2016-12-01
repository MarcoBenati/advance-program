var app = angular.module('app1',['lbServices']);

app.controller('app1Controller',
  ['$scope','Todos',function($scope,Todos){

      $scope.newTodo={
        name:"",
        desc:"",
        important:false
      }
      $scope.aggiungitodo=function(){
        console.log($scope.newTodo);
      }

      $scope.cancellatodo=function(idtodo){
        console.log("cancella"+idtodo);
      }

      $scope.eseguitodo=function(idtodo){
        console.log("esegui"+idtodo);
      }






$scope.todos=[];
$scope.todosdone=[];
    function getTodos() {
    Todos
      .find()
      .$promise
      .then(function(results) {
        for(i=0;i<results.length;i++){
          if ( results[i].done===false ){
            $scope.todos.push(results[i]);
          }else{
            $scope.todosdone.push(results[i])
          }
        }
        //$scope.todos = results;
        console.log(results);
      });
  }




  getTodos();
  }]);

