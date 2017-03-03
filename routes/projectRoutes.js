var express = require("express");
var projectRoutes = express.Router();
var Project = require("../models/projects");

projectRoutes.get("/", function (req, res) {
    Project.find(function (err, project){
        if (err) return res.status(500).send(err);
        res.send(project);
    });
});

// projectRoutes.get("/:id", function (req, res) {
//     Project.findById(req.params.id, function (err, project){
//         if (err) return res.status(500).send(err);
//         res.send(project);
//     });
// });

projectRoutes.post("/", function (req, res) {
    var project = new Project(req.body);
    project.save(function (err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(project);
    });
});

projectRoutes.put("/:id", function (req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, project) {
        if (err) res.status(500).send(err);
        res.send(project);
    });
});

projectRoutes.delete("/:id", function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err, project) {
        if (err) res.status(500).send(err);
        res.send({success: true, message:"The project has been deleted"});
    });
});


module.exports= projectRoutes;

/**
 * Created by lissaluck on 3/2/17.
 */