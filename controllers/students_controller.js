const Student = require('../models/student');
const Grade = require('../models/grade');

module.exports = {
  getOne(req, res, next) {
    const { id } = req.params;
    Student.findOne({ identificationNumber: id })
      .populate({
        path: 'grades',
        populate: {
          path: 'course',
          model: 'course',
        }
      })
      .then(student => res.send(student))
      .catch(next);
  },

  index(req, res, next) {
    let count = 0;
    Student.find({}, { grades: 1 })
      .populate({
        path: 'grades',
        populate: {
          path: 'course',
          model: 'course',
        }
      })
      .then((students) => {
        const gpaSummed = students
          .map(s => s.perf)
          .reduce((final, perf) => {
            if (perf.gpa < 5) {
              final['<5'] += 1;
            } else if (perf.gpa >= 5 && perf.gpa < 6) {
              final['<6'] += 1;
            } else if (perf.gpa >= 6 && perf.gpa < 7) {
              final['<7'] += 1;
            } else if (perf.gpa >= 7 && perf.gpa < 8) {
              final['<8'] += 1;
            } else if (perf.gpa >= 8 && perf.gpa < 9) {
              final['<9'] += 1;
            } else if (perf.gpa >= 9 && perf.gpa < 10) {
              final['<10'] += 1;
            } else if (perf.gpa === 10) {
              final['=10'] += 1;
            }
            return final;
          }, {
            '<5': 0,
            '<6': 0,
            '<7': 0,
            '<8': 0,
            '<9': 0,
            '<10': 0,
            '=10': 0
          });

          const gpaSummedArray = Object.keys(gpaSummed).map((key) => {
            return { name: key, value: gpaSummed[key] }
          })

          res.send(gpaSummedArray);
      })
      .catch(next);
  }
}
