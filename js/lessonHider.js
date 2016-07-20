angular.module('directivePractice')
    .directive('lessonHider', lessonHider);

function lessonHider() {
    return {
        templateUrl: '../html/lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&',
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
            // $scope.checkboxModel = false;
        },
        link: function(scope, element, attr) {
            scope.burn = function() {
              element.remove();
            };
            scope.toggleCheck = function() {
              if (scope.check) {
                element.css('text-decoration', 'line-through');
              }
              else {
                element.css('text-decoration', 'none');
              }
            };
            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;
            scope.schedule.forEach(function(scheduleDay) {
                if (scheduleDay.lesson === scope.lesson) {
                    scope.lessonDay = scheduleDay.weekday;
                    element.css('text-decoration', 'line-through');
                    return;
                }
            });
        });
    }
  };
}
