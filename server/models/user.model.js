import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Password is required and it should be at least 6 characters"],
		minlength: 6
	},
	gender: {
		type: String,
		required: [true, "Gender is required"],
		enum: ['male', 'female']
	},
	profilePic: {
		type: String,
		default: ''
	}
}, {timestamps: true});

export default mongoose.model('User', userSchema);