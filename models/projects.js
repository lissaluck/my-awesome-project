var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    yardage: Number,
    weight: String,
    type: String,
    notes: String
});


module.exports = mongoose.model("Project", projectSchema);

/**
 * Created by lissaluck on 3/2/17.
 */
