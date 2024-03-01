// MongoDB url is stored here.

const mongoose = require('mongoose');

const mongoURI = "YOUR_MONGODB_URI";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

module.exports = mongoose;