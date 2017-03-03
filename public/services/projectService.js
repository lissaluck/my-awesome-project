var app = angular.module("yarnApp");

app.service("ProjectService",["$http", "YardageService", function($http, YardageService) {

    this.showProjects = function(project) {
        return $http.get("/project").then(function (response) {
            return response.data;
        });
    }

    this.saveProject = function(project) {
        project.yardage = YardageService.getYardage(project.weight, project.type);
        return $http.post("/project", project).then(function (response) {
            alert("Project has been saved!");
            return response.data;
        });
    }
}])


/**
 * Created by lissaluck on 3/3/17.
 */
