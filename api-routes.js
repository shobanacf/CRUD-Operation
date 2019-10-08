//api-routes.js
//Initialise express router
let router = require('express').Router();

//Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API Its Working',
		message: 'Welcome to Student Record',
	});
});

//Import Student Controller
var studentController = require('./controllers/studentController.js');

//Student routes
router.route('/students')
    .get(studentController.index)
    .post(studentController.new);

 router.route('/students/:student_id')
     .get(studentController.view)
     .patch(studentController.update)
     .put(studentController.update)
     .delete(studentController.delete);

//Export API routes
module.exports = router;        