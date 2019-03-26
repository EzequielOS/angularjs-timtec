angular.module("aplicacao").directive('cadastrarAlunos', function(){
    return{
        restrict: 'E',
        templateUrl: 'views/cadastraAlunoTemplate.html'
    }
});