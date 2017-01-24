const Group = require('../models/group');
const Student = require('../models/student');
const Course = require('../models/course');

module.exports = {
  index(req, res, next) {
    Group.find({})
      .then(groups => res.send(groups))
      .catch(next);
  },

  detailed(req, res, next) {
    const { id } = req.params;
    Group.findOne({ id: id })
      .populate('students courses')
      .then((group) => res.send(group))
      .catch(next);
  }
}
