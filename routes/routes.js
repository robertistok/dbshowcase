const GroupsController = require('../controllers/groups_controller');
const StudentsController = require('../controllers/students_controller');
const TeachersController = require('../controllers/teachers_controller');
const CoursesController = require('../controllers/courses_controller');

module.exports = (app) => {
  app.get('/api/groups', GroupsController.index);
  app.get('/api/groups/:id', GroupsController.detailed);

  app.get('/api/students', StudentsController.index);
  app.get('/api/students/:id', StudentsController.getOne);

  app.post('/api/teachers/create', TeachersController.createTeacher);
  app.get('/api/teachers/getAll', TeachersController.getTeachers);
  app.post('/api/teachers/assignteaching', TeachersController.assignTeaching);

  app.get('/api/courses/getall', CoursesController.getAll);
};
