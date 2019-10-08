const mongoose = require('mongoose');

//Setup Schema
var studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	rollno: {
		type: String,
		required: true
	},
	dob: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	addr: {
		type: String,
		required: true
	}
});

//Export Student model

var Student = module.exports = mongoose.model('student', studentSchema);

module.exports.get = function (callback, limit) {
	Student.find(callback).limit(limit);
}
/*app.post("/", (req,res) => {
	var myData = new student({
		sname : req.body.sname,
		rollno : req.body.rollno,
		dob : req.body.dob,
		gender : req.body.gender,
		addr : req.body.addr,

	})
	myData.save( (err,docs) => {
		if(err){
			res.status(400).send("unable to save to database");
		}
		else{
			res.status(200).send("user created success");
			console.log(docs);
		}
	});
});*/

