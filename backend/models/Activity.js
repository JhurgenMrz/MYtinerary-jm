const { Schema, model } = require('mongoose');

const Activity = new Schema({
	activity_name: {
		type: String,
		required: true
	},
	city_name: {
		type: String,
		required: true
	},
	activities: {
		type: Array,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	themes: {
		type: Array,
		required: true
	},
	img_url: {
		type: String,
		required: true
	}
});

module.exports = model('activities', Activity);
