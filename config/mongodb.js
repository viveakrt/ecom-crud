const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://atlas-sql-62d2b9c833c18e4c4f8da645-suzlc.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin';

// Function to establish the MongoDB connection
async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    const collection = db.collection(collectionName);

    return collection;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

module.exports = { connectToMongoDB };
