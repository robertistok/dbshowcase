const Group = require('../models/group');
const Student = require('../models/student');

module.exports = {
  index(req, res, next) {
    Group.find({})
      .then(groups => res.send(groups))
      .catch(next);
  },

  detailed(req, res, next) {
    const { id } = req.params;
    Group.findOne({ id: id })
      .populate('students')
      .then((group) => res.send(group))
      .catch(next);
  }
}
