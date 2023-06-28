import mongoose from 'mongoose';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('');
  }
}

export default new Database().connect();
