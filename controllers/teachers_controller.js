const Teacher = require('../models/teacher');
const Course = require('../models/course');
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
  },

  assignTeaching(req, res, next) {
    const { id, data } = req.body;
    Promise.all([Teacher.findOne({ _id: id}), Course.findOne({ _id: data.selected._id })])
      .then(values => {
        const [teacher, course] = values;
        const types = Object.keys(data.types).filter(type => {
          return data.types[type] === 'true';
        });
        types.forEach(type => {
          teacher.teaching.push({
            subject: course,
            type: type
          });

          //course.teachers[]
        })
      });
  }
}
