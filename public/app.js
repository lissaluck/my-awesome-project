var app = angular.module("yarnApp", []);

app.controller("YarnController", ["$scope", "YardageService", "ProjectService", function ($scope, YardageService, ProjectService) {
    $scope.projectTypes = YardageService.getTypes();
    $scope.weights = YardageService.weights;
    $scope.getYardage = function (weight, type) {
        $scope.yardage = YardageService.getYardage(weight, type);
    };

    $scope.saveProject = function (project) {
        ProjectService.saveProject(project);
    };

    $scope.showProjects = function () {
        ProjectService.showProjects().then(function (projects) {
            $scope.projects = projects;
        })
    };

}]);


/**
 * Created by lissaluck on 3/2/17.
 */
