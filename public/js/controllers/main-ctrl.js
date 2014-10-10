angular.module('LoanCalculator').controller('MainCtrl', function($scope, BankService) {
  BankService.get_interest_rate().then(function(response) {
    console.log(response.data.interest_rate);
    $scope.interest_rate = response.data.interest_rate*100;
  });

  $scope.calculatePayment = function() {
    $scope.monthly_payment = Math.round((((1+(($scope.interest_rate/100)*(48/12)))*$scope.principal)/12)*100)/100;
  }
})
