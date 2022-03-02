const mongoose = require('mongoose')


// schema defines what fields are expected in the database
// if any other fields are passed, they are ignored
// mongodb documents dont have predefined structure
// schemas fix that
const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    // [<ifrequired>, <error message>/>]
    required:[true, 'must provide a name'],
    trim:true,
    maxlength:[20, 'name cannot be more than 20 characters']
  },
  completed: {
    type:Boolean,
    default:false
  }
})

module.exports = mongoose.model('Task', TaskSchema)
