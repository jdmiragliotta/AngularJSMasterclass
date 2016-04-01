  
  (function() {
    var name = "myApp",
      requires = [],
      myApp = null;
    
    myApp = angular.module(name, requires);
    
    myApp.controller("AppCtrl", function() {
      this.operator = "+";
      
      this.setOperation = function(operator) {
        this.operator = operator;
      }
      
      this.calculate = function(firstNum, secondNum) {
        if (this.operator === "+") {
          this.result = parseInt(firstNum) + parseInt(secondNum);
        } else if (this.operator === "-") {
          this.result = parseInt(firstNum) - parseInt(secondNum);
        }
      }
    });
  }());
