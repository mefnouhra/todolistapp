'use strict';

angular.module('todoListApp')
  .controller("mainCtrl", function ($scope, dataService) { //create ctrl
      $scope.helloWorld = function () {
          console.log("Hello, there!");
      }
      
      $scope.deleteTodo = function(todo){
          console.log('This here ' + todo.name + ' todo has been deleted');
          
      }
      
      
      $scope.saveTodo = function(todo){
          console.log('This here ' + todo.name + ' todo has been saved');
   
      }
      
      $scope.addTodo = function(){
        $scope.todos.unshift({
          name:'This is a new todo'
        });
      }
      
      dataService.getTodos(function(response){
          console.log(response.data); //the data in the json file
          $scope.todos = response.data; //attach the data to the todos    
      })
  
  })//end mainCtrl
