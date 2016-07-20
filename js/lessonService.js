angular.module('directivePractice')
  .service('lessonService', lessonService);

  function lessonService($http) {
    this.getSchedule = function() {
      return $http.get('schedule.json').then(function(response){
        return response;
      });
    };
  }
