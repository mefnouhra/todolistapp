'use strict';

angular.module('todoListApp')
  .service('dataService', function($http){
    
    this.getTodos = function(callback){
        $http.get('mock/todos.json') //get data from json
        .then(callback) //run a callback that we defined up top
    }
    
})//end dataService
