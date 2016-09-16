(function(){
    'use strict';
    
    angular
        .module('app', ['ngMap']);
})();
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    if (n > x.length) {slideIndex = 1;} 
    if (n < 1) {slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

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
(function(){
    'use strict';
    
    angular
        .module('app')
        .service('AppService', AppService);
        
    AppService.$inject = ['$http'];
    
    function AppService($http) {
        
            var _url = 'https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379';
            var _error = error;
        
            var service = {
                getData: getData
            };
            
            return service;
              
            function getData(){
                return $http
                    .get(_url)
                    .then(function(response){
                        return response.data;
                    }, _error);
            }
            
            function error() {
                console.error("Error while trying to get the data from the server! Please try to reload the page");
            }
    }
})();