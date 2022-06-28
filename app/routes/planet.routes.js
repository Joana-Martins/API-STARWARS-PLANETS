module.exports = app => {
    const planets = require("../controllers/planet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Planet
    router.post("/", planets.create);
  
    // Retrieve all Planet
    router.get("/", planets.findAll);
   
    // Retrieve a single Planet with id
    router.get("/:id", planets.findOne);
  
    // Update a Planet with id
    router.put("/:id", planets.update);
  
    // Delete a Planet with id
    router.delete("/:id", planets.delete);
  
    // Delete all Planets
    router.delete("/", planets.deleteAll);
  
    app.use('/api/planets', router);
  };    