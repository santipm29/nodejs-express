const mongoose = require('mongoose');
const URI = 'mongodb://localhost/users';
mongoose.connect(URI,  { useNewUrlParser: true })
    .then(db => console.log('DB connect'))
    .catch(err => console.log('Error DB connection'))

module.exports = mongoose;