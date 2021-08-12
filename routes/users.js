let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/myFirstDatabase11?retryWrites=true&w=majority')
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(err);
})

let UserSchema = mongoose.Schema({
  gamename: String,
  review: String
})

module.exports = mongoose.model('user', UserSchema)