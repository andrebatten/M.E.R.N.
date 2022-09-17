//import the contrpoller to use instantiated model
const authorController = require("../controllers/author.controllers")

module.exports = (app) => {
    app.get("/api/findall", authorController.findAll);
    app.post("/api/create", authorController.createNew);
    app.get("/api/findone/:id", authorController.findOne);
    app.delete("/api/delete/:id", authorController.deleteAnExisting);
    app.put("/api/update/:id", authorController.updateExisting);
}