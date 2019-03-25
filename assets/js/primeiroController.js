angular.module('minhaApp').controller('primeiroController', function($scope){
    $scope.nome = 'Ezequiel Oliveira';
    var nome = "ashuashu";

    $scope.iniciado = true;
    $scope.alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5'];

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function(){
        $scope.iniciado = true;
    };
});