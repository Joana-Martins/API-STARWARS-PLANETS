module.exports = (sequelize, Sequelize) => {
  const Planet = sequelize.define("planet", {
    name: {
      type: Sequelize.STRING = ""
    },
    climate: {
      type: Sequelize.STRING = ""
    },
    terrain: {
      type: Sequelize.STRING = ""
    }
  });

  return Planet;
};  