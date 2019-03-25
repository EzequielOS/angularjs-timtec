angular.module('minhaApp').controller('primeiroController', function($scope){
    $scope.nome = 'Ezequiel Oliveira';
    var nome = "ashuashu";

    $scope.iniciado = true;
    $scope.alunos = ['Meweni', 'Jandiaia'];

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function(){
        $scope.iniciado = true;
    };

    $scope.submeter = function(){
        $scope.alunos.push($scope.nome_aluno);
    };
});