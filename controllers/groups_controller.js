const Group = require('../models/group');

module.exports = {
  index(req, res, next) {
    Group.find({})
      .then(groups => res.send(groups))
      .catch(next);
  }
}
