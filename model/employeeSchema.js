const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    employeeId: { type: Number },
    department: { type: String },
    position: { type: String },
    password: { type: String }  
}, {
    collection: "employeetime" 
});

module.exports = mongoose.model("employeeSchema", employeeSchema);
