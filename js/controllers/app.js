(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('App', AppController);
        
    AppController.$inject = ['AppService', '$scope', '$sce'];
    
    function AppController(AppService, $scope, $sce) {
            
            init();
            
           
            
            function init(){
                AppService
                .getData()
                .then(function(response){
                    $scope.data = response;
                });
            }
          
            $scope.search = function(){
                $scope.search_results = $scope.data.rows;
            }
            
            $scope.buildMap = function(coord){
                console.log(coord);
                $scope.link = 'https://www.google.com/maps/embed/v1/place?q='+ coord[0] + ','+ coord[1] + '&amp;key=AIzaSyDMdOX0K8bdroScCyeECptu5t3fr3ssbiA';
                $scope.map = $sce.trustAsHtml('<iframe width="100%" height="450" frameborder="0" style="border:0" src="'+$scope.link+'"></iframe>');
            }
            
          
    }
})();