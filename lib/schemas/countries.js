// @flow

import mongoose, { Schema } from 'mongoose';

let Country = new Schema({

  name: String,

  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean

});

export default mongoose.model('Country', Country);
