mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testsg', { useNewUrlParser: true}, (err) => {
	if (!err) {console.log('MongoDB Connection Succeeded...')}
	else
		{ console.log('Error in Db connection :' +err)}
});


module.exports = mongoose;