const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  description: String,
  skillIds: [String],
})

// we're making a model (ie a collection in our database) which is going to be called Books. This collection is going to have objects that look like our bookSchema
module.exports = mongoose.model('Project', projectSchema)