import mongoose from './mongodb';
import Decorator from './decorator';

const Schema = mongoose.Schema;

const schema = new Schema({
	email: String,
	password: String,
	signature: String,
	createDate: Number,
	validated: Boolean,
	validateDate: Number,
	port: Number,
	auth: String,
	role: { type: String, default: 'member' }
}, { collection: 'users' });


const UserModel = mongoose.model('user', schema);

@Decorator.count(UserModel)
@Decorator.instance(UserModel)
@Decorator.create(UserModel)
@Decorator.get(UserModel)
@Decorator.update(UserModel)
@Decorator.getList(UserModel)
@Decorator.ALL(UserModel)
export default new class User {}();
