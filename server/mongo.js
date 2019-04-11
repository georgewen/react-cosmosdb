const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

//const mongoUri = `mongodb://${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl/=true`;
const mongoUri = `mongodb://localhost:27017/admin`

//function connect() {
  //return mongoose.connect(mongoUri, { auth: { user: env.dbName, password: env.key }});
//}
function connect() {
  mongoose.set('debug', true);
    return mongoose.connect(
      mongoUri,
      {
        useMongoClient: true
      }
    );
  }

module.exports = {
  connect,
  mongoose
};
