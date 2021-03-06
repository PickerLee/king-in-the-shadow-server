/**
 * 注册邀请码
 * @authors Picker Lee (https://github.com/jeezlee)
 * @email   450994392@qq.com
 * @date    2016-10-27 16:10:55
 */

import mongoose from './mongodb';
import Decorator from './decorator';

const Schema = mongoose.Schema;

const schema = new Schema({
	code: String, // 邀请码
	inviterId: String, //邀请人 ID
	inviteeId: String, // 被邀请人 ID
	state: Number, // 邀请码状态
	createDate: Number, // 邀请码创建时间
	consumeDate: Number, // 使用时间
	type: String // 邀请码类型 [YEAR,SEASON,MONTH,WEEK,DAY]
}, {
	collection: 'invitationCodes'
});


const InvitationCodeModel = mongoose.model('invitationCode', schema);

@Decorator.ALL(InvitationCodeModel)
export default new class InvitationCode {}();
