const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jayminbhavsar07:jaymin123@cluster0.lxnc1rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("connect to the database"));

module.exports = mongoose;