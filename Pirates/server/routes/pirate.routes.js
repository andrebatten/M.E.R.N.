//import the contrpoller to use instantiated model
const Controller = require("../controllers/pirate.controllers")

module.exports = (app) => {
    app.get("/api/findall", Controller.findAll);
    app.post("/api/create", Controller.createNew);
    app.get("/api/findone/:id", Controller.findOne);
    app.delete("/api/delete/:id", Controller.deleteAnExisting);
    app.put("/api/update/:id", Controller.updateExisting);
}