angular.module('minhaApp').controller('novaInscricaoController', function ($scope, alunosCollectionService) {

    $scope.submeter = function () {
        if ($scope.form_1.$valid) {
            novo_aluno = {};
            novo_aluno['nome'] = $scope.nome_aluno;
            novo_aluno['idade'] = parseInt($scope.idade_aluno);
            alunosCollectionService.adicionarAluno(novo_aluno);
        } else {
            alert("Preencha o formulário corretamente");
        }
    };
});