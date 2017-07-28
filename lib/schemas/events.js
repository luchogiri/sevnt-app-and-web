// @flow

import mongoose, { Schema } from 'mongoose';

import Activity from './activities';

// ---- model -----

let Event = new Schema({

  name: String,
  category: String,
  
  author: { type: mongoose.Schema.ObjectId, ref: 'Account' },
  organizer: String,
  
  venue: String,
  country: String,
  state: String,
  city: String,
  address: String,

  start_date: Date,
  end_date: Date,
  
  contact_email: String,
  contact_phone: String,
  link: String,
  img: String,
  
  bus_lines: String,
  subway_lines: String,
  description: String,
  
  tags: [String],
  
  activities: [Activity],
  
  social: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    web: String
  },

  
  weight: { type: Number, default: 0 },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  published: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false }

});

export default mongoose.model('Event', Event);