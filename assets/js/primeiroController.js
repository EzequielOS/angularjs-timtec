angular.module('minhaApp').controller('primeiroController', function ($scope, $filter) {
    $scope.nome = 'Ezequiel Oliveira';
    var nome = "ashuashu";

    $scope.hoje = new Date();

    $scope.iniciado = true;

    $scope.alunos = [{ 'nome': 'Joãozinho', 'idade': 9 },
    { 'nome': 'Ricardinho', 'idade': 11 },
    { 'nome': 'Felipinho', 'idade': 11 },
    { 'nome': 'Zildinha', 'idade': 14 },
    { 'nome': 'Marianinha', 'idade': 10 },
    { 'nome': 'Luluzinha', 'idade': 12 }];

    $scope.finalizar = function () {
        $scope.iniciado = false;
    };

    $scope.iniciar = function () {
        $scope.iniciado = true;
    };

    $scope.submeter = function () {
        if ($scope.form_1.$valid) {
            novo_aluno = {};
            novo_aluno['nome'] = $scope.nome_aluno;
            novo_aluno['idade'] = parseInt($scope.idade_aluno);
            $scope.alunos.push(novo_aluno);
        } else {
            alert("Preencha o formulário corretamente");
        }
    };

    $scope.ordenarPorNome = function () {
        $scope.ordenarPorNome = !$scope.ordenarPorNome;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'nome', $scope.ordenarPorNome);
    };

     $scope.ordenarPorIdade = function () {
        $scope.ordenarPorIdade = !$scope.ordenarPorIdade;
        $scope.alunos = $filter('orderBy')($scope.alunos, 'idade', $scope.ordenarPorIdade);
    };
});