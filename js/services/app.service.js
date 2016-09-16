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