var myApp = angular.module('alex', ['ui.router', 'ui.bootstrap']);

myApp.config(function($stateProvider) {
  var indexState = {
    name: 'index',
    url: '/inicio',
    templateUrl: 'inicio.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'about.html'
  }

    var galeriaState = {
    name: 'galeria',
    url: '/galeria',
    templateUrl: 'galeria.html'
  }
  var formularioState = {
    name: 'formulario',
    url: '/formulario',
    templateUrl: 'formulario.html'
  }
  var perforadorasState = {
    name: 'perforadoras',
    url: '/perforadoras',
    templateUrl: 'perforadoras.html'
  }


  var hidraulica1State = {
    name: 'hidraulica1',
    url: '/perforadoras/hidraulica1',
    templateUrl: 'RN-238.html'
  }
  var hidraulica2State = {
    name: 'hidraulica2',
    url: '/perforadoras/hidraulica2',
    templateUrl: 'RN-338.html'
  }
  var hidraulica3State = {
    name: 'hidraulica3',
    url: '/perforadoras/hidraulica3',
    templateUrl: 'RN-300.html'
  }
  var neumatica1State = {
    name: 'neumatica1',
    url: '/perforadoras/neumatica1',
    templateUrl: 'RN-250X.html'
  }
  var neumatica2State = {
    name: 'neumatica2',
    url: '/perforadoras/neumatica2',
    templateUrl: 'RN-S83FX.html'
  }

  $stateProvider.state(hidraulica1State);
  $stateProvider.state(hidraulica2State);
  $stateProvider.state(hidraulica3State);
  $stateProvider.state(neumatica1State);
  $stateProvider.state(neumatica2State);
  $stateProvider.state(indexState);
  $stateProvider.state(aboutState);
  $stateProvider.state(galeriaState);
  $stateProvider.state(formularioState);
  $stateProvider.state(perforadorasState);

});

myApp.controller('galeriaController', function($uibModal) {

    var vm = this;

    vm.title='Bienvenido a mi galeria';

    vm.alex = function (nombre, tamano) {
       
        $uibModal.open({
        templateUrl: 'stackedModal.html',
        size: tamano,
        controllerAs: 'vm',
        controller: function($scope) {

            var vm = this;
            vm.nombre =nombre;
        
      }
    });

}


});
