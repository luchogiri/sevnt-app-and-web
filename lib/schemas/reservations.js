// @flow

import mongoose, { Schema } from 'mongoose';

import Event from './events';


// ---- model -----

let Reservation = new Schema({
  
  event: Event.schema,
  account: { type: mongoose.Schema.ObjectId, ref: 'Account' },
  
  tickets: [{
  
    name: String,
    link: String,
    // start_date: Date,
    // end_date: Date,
  
    price: {
      currency: String,
      value: Number
    },
    
    first_name: String,
    last_name: String,
    document_number: String,
    email: String,
    // birthdate: Date,
    // country: String,
    // state: String,
    // city: String
    
    accredited_at: Date
  }],
  
  payment: {
    
    card_type: String,
    card_mask: String,
    card_bank: String,
    holder_name: String
  },
  
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  published: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false }
  
});

export default mongoose.model('Reservation', Reservation);