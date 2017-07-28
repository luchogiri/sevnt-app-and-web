
import express from 'express';
import jwt from 'jwt-simple';
import { Secret } from '../helpers/auth';

import Model from '../schemas/accounts';

const router = express.Router();


router.post('/signup', (req, res) => {
  
  if (!req.body.email || !req.body.password)
    res.json({ success: false, msg: 'No email and password given.' });
  
  else {
    let user = new Model(req.body);
    
    user.save(err => {
      if (err)
        return res.json({success: false, msg: 'Username already exists.'});

      let token = jwt.encode({ _id: user._id, email: user.email }, Secret);
      let userObj = user.toObject();
      userObj.token = 'JWT ' + token;
      delete userObj.password;
      res.json(userObj);
    });
  }
});


router.post('/signin', function(req, res) {
  
  Model
    .findOne({ email: req.body.email }, '-__v -published -deleted -created_at -updated_at')
    .exec((err, user) => {
    
      if (err) throw err;
      
      if (!user) {
        res.json({ success: false, msg: 'Authentication failed. User not found.' });
        
      } else {
        
        user.comparePassword(req.body.password, (err, isMatch) => {
          
          if (isMatch && !err) {
            
            let token = jwt.encode({ _id: user._id, email: user.email }, Secret);
            let userObj = user.toObject();
            userObj.token = 'JWT ' + token;
            delete userObj.password;
            res.json(userObj);
          
          } else {
            res.json({ success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
});


router.post('/fb', (req, res) => {
  
  if (!req.body.id && !req.body.email)
    res.json({ success: false, msg: 'No fbid or email given.' });
  
  else {
    req.body.email = req.body.email || 'fb'+req.body.id+'@tmpsevnt.com';
    req.body.password = 'fbtmppass';
    let user = new Model(req.body);
    
    user.save(err => {
      
      // console.log(err);
      
      if (err) {
        Model
          .findOne({ email: req.body.email }, '-__v -published -deleted -created_at -updated_at')
          .exec((errn, u) => {
            if (errn) throw errn;
            if (!u) res.json({ success: false, msg: 'Authentication failed. User not found.' });
            else receivedUser(u, res);
          });
      }
      
      else {
        receivedUser(user, res);
      }
    });
  }
  
  function receivedUser(user, res) {
    let token = jwt.encode({ _id: user._id, email: user.email }, Secret);
    let userObj = user.toObject();
    userObj.token = 'JWT ' + token;
    delete userObj.password;
    res.json(userObj);
  }
  
});


router.post('/requestPassword', function(req, res) {
  
  Model
    .findOne({ email: req.body.email }, '-__v -published -deleted -created_at -updated_at')
    .exec((err, user) => {
      
      if (err) throw err;
      
      if (!user)
        res.json({ success: false, msg: 'User not found.' });
        
      else
        res.json({ success: true });
        // create temporary token and send email to user with the tmp token to reset passw
    });
  
});


export default router;