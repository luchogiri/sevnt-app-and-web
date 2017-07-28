
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';


// ---- model -----

let Account = new Schema({

  first_name: String,
  last_name: String,
  
  // user: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  
  picture: String,
  birthdate: Date,

  country: String,
  state: String,
  city: String,

  favorites: [{ type: Schema.ObjectId, ref: 'Event' }],
  events: [{ type: Schema.ObjectId, ref: 'Event' }],
  reservations: [{ type: Schema.ObjectId, ref: 'Reservation' }],

  created_at: Date,
  updated_at: Date,
  published: Boolean,
  deleted: Boolean

});

//   - social_networks[]
//     - provider (FACEBOOK)
//     - access_token
//     - refresh_token


Account.pre('save', function(next) {
  
  let user = this;
  if (user.isModified('password') || user.isNew) {

    bcrypt.genSalt(10, (err, salt) => {

      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {

        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }

  else
    return next();
});


Account.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('Account', Account);
