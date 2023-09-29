const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://arnabadhikary007:arnabadhikary@cluster0.xrv0a3m.mongodb.net/todoapp?retryWrites=true&w=majority")

module.exports={connection}