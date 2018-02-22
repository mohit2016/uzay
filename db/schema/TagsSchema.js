/*
	Tags Schema
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;

let tagsSchema = {
	_id : ObjectId,
	Tag : String,
	Posts : [{type : ObjectId}]
};

module.exports = new Schema(tagsSchema);