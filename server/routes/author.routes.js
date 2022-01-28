const AuthorController = require("../controllers/author.controller");
const Author = require("../models/author.model");

module.exports = (app)=>{
    app.get("/api/authors", AuthorController.findAllAuthors);

    app.post("/api/authors", AuthorController.createNewAuthor);

    app.get("/api/authors/:id", AuthorController.findOneAuthor);

    app.put("/api/authors/update/:id", AuthorController.updateAuthor);

    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
};