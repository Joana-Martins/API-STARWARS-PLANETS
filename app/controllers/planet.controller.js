const db = require("../models");
const Planet = db.planets;
const Op = db.Sequelize.Op;

// Create and Save a new Planet
exports.create = (req, res) => {
   // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty."
    });
    return;
  }

  // Create a Planet
  const planet = {
    name: req.body.name,
    climate: req.body.climate,
    terrain: req.body.terrain ? req.body.terrain : false
  };

  // Save Planet in the database
  Planet.create(planet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Planet."
      });
    });
};

// Retrieve all Planets from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Planet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving planets."
      });
    });
};

// Find a single Planet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Planet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Planet with id=" + id
      });
    });
};

// Update a Planet by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Planet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Planet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Planet with id=${id}. Maybe Planet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Planet with id=" + id
      });
    });
};

// Delete a Planet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Planet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Planet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Planet with id=${id}. Maybe Planet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Planet with id=" + id
      });
    });
};

// Delete all Planets from the database.
exports.deleteAll = (req, res) => {
  Planet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Planets were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all planets."
      });
    });
};
