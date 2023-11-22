const mongoose = require("mongoose");

const timeTrackingSchema = new mongoose.Schema({
    employeeID: { type: Number }, 
    inTime: { type: Date },
    outTime: { type: Date },
    date: { type: Date, default: Date.now }
}, {
    collection: "employeetracking"
});

module.exports = mongoose.model("timeTrackingSchema", timeTrackingSchema);
