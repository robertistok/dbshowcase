const Student = require('../models/student');
const Grade = require('../models/grade');

module.exports = {
  getOne(req, res, next) {
    const { id } = req.params;
    Student.findOne({ identificationNumber: id })
      .populate('grades')
      .then(student => res.send(student))
      .catch(next);
  }
}
