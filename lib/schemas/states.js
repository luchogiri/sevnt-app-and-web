// @flow

import mongoose, { Schema } from 'mongoose';


let State = new Schema({

  name: String,
  country: String,

  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean

});

export default mongoose.model('State', State);
