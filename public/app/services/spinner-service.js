angular.module('app.services.spinner', [])  
  .service('MainSpinner', [function() {
    
    /**
    * spinnerScope
    * Maintains reference to MainController's scope loading vars
    */
    let spinnerScope = {};
    
    /**
    * Store reference to MainController's scope loading vars
    */
    function initSpinner(spinnerObject) {
      spinnerScope.spinnerObject = spinnerObject;  
    }
    
    function toggleSpinner(loading, spinnerText) {
      if(!spinnerScope.spinnerObject) {
        return console.log('MainSpinner scope not yet initialized');
      }
      spinnerScope.spinnerObject.loading = loading;
      spinnerScope.spinnerObject.spinnerText = spinnerText;  
    }
    
    
    return {
      initSpinner,
      toggleSpinner
    }
    
  }])