angular.module('directivePractice')
    .controller('lessonCtrl', lessonCtrl);

function lessonCtrl($scope, lessonService) {
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    $scope.announceDay = function(lesson, day) {
        if (!day) {
            alert(lesson + " is not scheduled");
        } else {
            alert(lesson + " is scheduled on " + day);
        }
    };

}
