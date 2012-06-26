// Generated by CoffeeScript 1.3.3

/*
 Gives the ability to style currency based on its sign.
*/


(function() {

  angular.module('ui.directives', []).directive('uiCurrency', function(currencyFilter) {
    return {
      restrict: 'AC',
      require: '?ngModel',
      link: function($scope, element, attrs, controller) {
        var controllerOptions, options, renderview;
        controllerOptions = $scope[attrs.options] || $scope.uiCurrencyOptions | {};
        options = {
          pos: attrs.pos || controllerOptions.pos || 'ui-currency-pos',
          neg: attrs.neg || controllerOptions.neg || 'ui-currency-neg',
          zero: attrs.zero || controllerOptions.zero || 'ui-currency-zero',
          symbol: attrs.symbol || controllerOptions.symbol || void 0
        };
        renderview = function(viewvalue) {
          var num;
          num = viewvalue * 1;
          if (num > 0) {
            element.addClass(options.pos);
          } else {
            element.removeClass(options.pos);
          }
          if (num < 0) {
            element.addClass(options.neg);
          } else {
            element.removeClass(options.neg);
          }
          if (num === 0) {
            element.addClass(options.zero);
          } else {
            element.removeClass(options.zero);
          }
          if (viewvalue === '') {
            element.text('');
          } else {
            element.text(currencyFilter(num, options.symbol));
          }
          return true;
        };
        if (controller != null) {
          controller.$render = function() {
            var value;
            value = controller.$viewValue;
            element.val(value);
            renderview(value);
            return true;
          };
        } else {
          renderview($scope[attrs.num]);
        }
        return true;
      }
    };
  });

}).call(this);
