const Teacher = require('../models/teacher');
const { createTeacher } = require('../../universocial/database/utils/operations/createEntity');

// TODO: implement creating teachers from a form
module.exports = {
  createTeacher(req, res, next) {
    const teacher = createTeacher();
    res.json(teacher)
  },

  getTeachers(req, res, next) {
    Teacher.find({})
      .then(teachers => res.send(teachers))
      .catch(next)
  }
}
