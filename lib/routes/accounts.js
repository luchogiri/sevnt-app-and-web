
import express from 'express';
import jwt from 'jwt-simple';
import Auth, { Token, Secret } from '../helpers/auth';

import Model from '../schemas/accounts';

let router = express.Router();

// api endpoints
router.get('/',(req, res) => {
  Model.find().exec((err, data) => {
    res.json(data);
  });
});


router.get('/me', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
  
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      // .populate('favorites reservations')
      .lean()
      .exec((err, user) => {
      
        if (err) throw err;
        if (!user)
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        else
          res.json(user);
    });
  }
  
  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
  
});


router.put('/me', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOneAndUpdate({ _id : decoded._id }, req.body, { new: true })
      // .populate('favorites reservations')
      .lean()
      .exec((err, user) => {
        
        if (err) throw err;
        if (!user)
          return res.status(403).json({ success: false, msg: 'Authentication failed. User not found.' });
        else
          res.json(user);
      });
  }
  
  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
  
});



router.get('/me/favorites', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
  
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      .populate('favorites')
      .lean()
      .exec((err, user) => {
        if (err) throw err;
        if (!user)
          return res.status(403).json({success: false, msg: 'Authentication failed. User not found.'});
        else
          res.json(user.favorites);
      });
  }
  
  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
  
});


router.post('/me/favorites', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      // .populate('favorites')
      .exec((err, user) => {
        if (err) throw err;
        if (!user)
          return res.status(403).json({success: false, msg: 'Authentication failed. User not found.'});
        
        else {
          if (user.favorites.indexOf( req.body._id ) == -1)
            user.favorites.push( req.body._id );
          
          user.save((err) => {
            if (err) throw err;
            res.json(user.favorites);
          });
        }
      });
  }
  
  else
    return res.status(403).json({success: false, msg: 'No token provided.'});
  
});



router.delete('/me/favorites', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      // .populate('favorites')
      .exec((err, user) => {
        if (err) throw err;
        if (!user)
          return res.status(403).json({success: false, msg: 'Authentication failed. User not found.'});
        
        else {
          
          let idx = user.favorites.indexOf( req.body._id );
          if (idx != -1)
            user.favorites = [ ...user.favorites.slice(0, idx), ...user.favorites.slice(idx + 1)];
          
          user.save((err) => {
            if (err) throw err;
            res.json(user.favorites);
          });
        }
      });
  }
  
  else
    return res.status(403).json({success: false, msg: 'No token provided.'});
  
});


router.get('/me/events', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      .populate('events')
      .lean()
      .exec((err, user) => {
        if (err) throw err;
        if (!user)
          return res.status(403).json({success: false, msg: 'Authentication failed. User not found.'});
        else
          res.json(user.events);
      });
  }
  
  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
  
});


router.get('/me/reservations', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
    
    Model
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      .populate('reservations')
      .lean()
      .exec((err, user) => {
        if (err) throw err;
        if (!user)
          return res.status(403).json({success: false, msg: 'Authentication failed. User not found.'});
        else
          res.json(user.reservations);
      });
  }
  
  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
  
});


router.get('/:id', function(req, res) {
  
  Model
    .findOne({ _id: req.params.id })
    .populate('favorites reservations')
    .exec((err, model) => {
      if (err) console.log(err);
      else
        res.json(model);
    });
});

// router.put('/:id', function(req, res) {
//   Model
//     .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .exec((err, model) => {
//       if (err) console.log(err);
//       else
//         res.json(model);
//     });
// });


router.delete('/:id', (req, res) => {

  Model
    .findByIdAndRemove(req.params.id)
    .exec((err, response) => {
      if (err) { res.sendStatus(500); }
      else res.sendStatus(200);
    });
});


module.exports = router;