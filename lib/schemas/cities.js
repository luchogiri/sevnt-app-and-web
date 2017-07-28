// @flow

import mongoose, { Schema } from 'mongoose';

let City = new Schema({

  name: String,
  state: String,
  country: String,

  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean

});

export default mongoose.model('City', City);
