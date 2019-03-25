angular.module('minhaApp').controller('primeiroController', function($scope){
    $scope.nome = 'Ezequiel Oliveira';
    var nome = "ashuashu";

    $scope.iniciado = true;
    $scope.alunos = ['Aluno 1', 'Aluno 2'];

    $scope.finalizar = function(){
        $scope.iniciado = false;
    };

    $scope.iniciar = function(){
        $scope.iniciado = true;
    };

    $scope.submeter = function(){
        if($scope.form_1.$valid){
            $scope.alunos.push($scope.nome_aluno);
        }else{
            alert("Prencha o nome corretamente! (Com mais de 3 caracteres!)");
        }
        
    };
});