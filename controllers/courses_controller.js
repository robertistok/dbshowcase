const Course = require('../models/course');

module.exports = {
  getAll(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.send(courses.map(c => {
          const { name, _id, teachingTypes } = c;
          return {
            _id,
            name,
            teachingTypes
          }
        }))
      })
      .catch(next);
  }
};
