var app = angular.module('todoApp', []);

app.controller('TodoCtrl', function($scope) {
    $scope.todos=[
                    {text:'Eat', done:false},
                    {text:'Sleep',done:false}];
   
    $scope.getTotalTodos =function(){
       return $scope.todos.length;
    };
    
    $scope.addToDo =function(){
        $scope.todos.push({
            text:$scope.todoText, done:false
        });
        $scope.todoText = '';
        
    };
    
    $scope.clearTodo =function(){
        /*$scope.todos =_.filter($scope.todos, function(todo){
            return !todo.done;   
        });*/
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;   
        });
    };
}
);
