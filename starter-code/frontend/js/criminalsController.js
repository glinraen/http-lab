angular.module('criminalApp', [])
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];


function CriminalsController($http){
  var self = this;
  self.all = [];
}

  function getCriminals(){
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response){
        self.all = response.data.criminals;
    });
  }

  getCriminals();