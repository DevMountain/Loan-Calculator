angular.module('LoanCalculator').factory('BankService', function($http) {
  return {
    get_interest_rate: function() {
      return $http({method: 'GET', url: '/interest_rate'});
    }
  }
});
