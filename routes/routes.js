const GroupsController = require('../controllers/groups_controller')

module.exports = (app) => {
  app.get('/api/groups', GroupsController.index);
};
