import mongoose from "mongoose";

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
  // Closes the Mongoose connection
  await mongoose.connection.close();
}

export default removeAllCollections;
