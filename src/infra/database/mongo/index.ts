import mongoose from 'mongoose';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect('mongodb+srv://ant:123@challenger3.mp8j38c.mongodb.net/Challenger3');
  }
}

export default new Database().connect();
