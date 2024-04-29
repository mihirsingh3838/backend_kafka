import { MongoClient } from 'mongodb';

import { db as _db } from '../config';

const client = new MongoClient(_db.url);

async function connect() {
  await client.connect();
  console.log('Connected to MongoDB database');
  const db = client.db(_db.name);
  return db;
}

export default { connect };
