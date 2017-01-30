const GroupsController = require('../controllers/groups_controller');
const StudentsController = require('../controllers/students_controller');

module.exports = (app) => {
  app.get('/api/groups', GroupsController.index);
  app.get('/api/groups/:id', GroupsController.detailed);

  app.get('/api/students/:id', StudentsController.getOne);
};
