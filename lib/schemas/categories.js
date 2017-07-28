// @flow

import mongoose, { Schema } from 'mongoose';

let Category = new Schema({

  name: String,

  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean

});

export default mongoose.model('Category', Category);
