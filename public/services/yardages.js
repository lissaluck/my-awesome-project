var app = angular.module("yarnApp");

app.service("YardageService", [function() {
    var yardage = {
        "Baby Mittens": [60, 50, 50, 40, 40, 30],
        "Child Mittens": [100, 80, 80, 70, 60, 50],
        "Woman Mittens": [180, 150, 150, 120, 110, 90],
        "Man Mittens": [250, 220, 220, 170, 160, 130],
        "Baby Hat": [100, 90, 90, 75, 65, 50],
        "Child Hat": [170, 140, 140, 125, 110, 85],
        "Woman Hat": [200, 175, 175, 150, 130, 100],
        "Man Hat": [265, 220, 225, 200, 175, 130],
        "Child Socks": [190, 170, 160, 150, 130, 100],
        "Woman Socks": [330, 280, 275, 240, 210, 170],
        "Man Socks": [440, 380, 350, 315, 275, 210],
        "Baby Afghan": [1351, 1200, 1100, 1000, 850, 700],
        "Lap Afghan": [1800, 1600, 1500, 1400, 1200, 925],
        "Full Afghan": [3500, 2900, 2800, 2600, 2300, 1800],
        "Scarf": [500, 425, 410, 375, 320, 275]
    };

    this.weights = ["Fingering", "Sport", "DK", "Worsted", "Heavy Worsted", "Bulky"];

    this.getTypes = function () {
        var projectTypes = [];
        for (key in yardage) {
            projectTypes.push(key);
        }
        return projectTypes;
    };

    this.getYardage = function (weight, type) {
        var index = this.weights.indexOf(weight);
        return yardage[type][index];
    }

}])

/**
 * Created by lissaluck on 3/2/17.
 */
