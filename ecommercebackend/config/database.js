const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('connecction......', mongoose.connection.readyState);
  const dataConnection = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true, // nice for development but disable recomended for production, performance improve
  });

  console.log(`MongoDB Connected: ${dataConnection.connection.host}`);
};

module.exports = connectDB;