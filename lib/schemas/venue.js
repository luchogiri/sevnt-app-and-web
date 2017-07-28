// @flow

import mongoose, { Schema } from 'mongoose';


let Venue = new Schema({
  
  name: String,
  country: String,
  state: String,
  city: String,
  address: String,
  picture: String,
  geo: { lat: Number, lng: Number },
  
  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean
  
});

export default mongoose.model('Venue', Venue);
