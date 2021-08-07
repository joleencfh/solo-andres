const mongoose = require('mongoose')
const dbName = 'dbAceOptions';

mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;

