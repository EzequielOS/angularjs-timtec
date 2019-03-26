angular.module('minhaApp').controller('primeiroController', function ($scope, $filter, alunosCollectionService) {
    $scope.nome = 'Ezequiel Oliveira';
    var nome = "ashuashu";

    $scope.hoje = new Date();

    $scope.iniciado = true;

    $scope.cadastrar = false;

    $scope.alunos = alunosCollectionService.getAlunos();

    $scope.finalizar = function () {
        $scope.iniciado = false;
    };

    $scope.iniciar = function () {
        $scope.iniciado = true;
    };


    $scope.ordenarPorNome = function () {
       alunosCollectionService.ordenarPorNome();
        $scope.alunos = alunosCollectionService.getAlunos();
    };

     $scope.ordenarPorIdade = function () {
     alunosCollectionService.ordenarPorIdade();
        $scope.alunos = alunosCollectionService.getAlunos();
    };

    $scope.exibeCadastro = function () {
        $scope.cadastrar = !$scope.cadastrar;
    };
});