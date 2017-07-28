// @flow

import express from 'express';
import moment from 'moment';

import jwt from 'jwt-simple';
import Auth, { Token, Secret } from '../helpers/auth';

import Model from '../schemas/events';
import Account from '../schemas/accounts';


const router = express.Router();


// api endpoints
router.get('/', (req, res) => {

  let now = moment.utc().startOf('day').toDate();
  let query = { start_date: { $gte : now } };
  
  if (req.query.query) query.name = new RegExp(req.query.query, 'i');
  if (req.query.country) query.country = req.query.country;
  if (req.query.state) query.state = req.query.state;
  if (req.query.city) query.city = req.query.city;
  if (req.query.category) query.category = req.query.category;
  if (!req.query.include_drafts) query.published = true;
  // if (!req.query.include_deleted) query.deleted = false;

  let offset = req.query.offset || 0;
  let limit = Math.floor( !isNaN(req.query.limit) && req.query.limit ) || 20;
      limit = limit <= 50 ? limit : 20;

  Promise.all([

    Model.find(query).count(),
    Model
      .find(query)
      .sort('start_date')
      .skip(offset)
      .limit(limit)
      .exec()

  ]).then((data) => {

    res.json({
      total: data[0],
      items: data[1],
      limit: limit,
      offset: offset,
      query: query
    });

  }, (err) => {
    console.log(err);
    res.sendStatus(500);
  });
});


// show it all
router.get('/dump', (req, res) => {
  Model.find().exec(function(err, data) {
    res.json(data);
  });
});


router.post('/', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
  
    const decoded = jwt.decode(token, Secret);
    
    // console.log(req.body);
    
    let model = new Model(req.body);
    model.author = decoded._id;
    model.published = true;
    
    model.save((err, model) => {
    
      if (err) {
        console.log(err);
        res.sendStatus(500);
      
      } else {
  
        Account
          .findOne({ _id : decoded._id })
          .exec((err, user) => {
            if (err) throw err;
            else {
              if (user.events.indexOf( model._id ) == -1)
                user.events.push( model._id );
              
              user.save((err) => {
                if (err) console.log(err);
              });
            }
          });
        
        res.json(model);
      }
    });
  }

  else
    return res.status(403).send({success: false, msg: 'No token provided.'});
});


router.get('/:id', (req, res) => {
  Model
    .findOne({ _id: req.params.id })
    .exec((err, model) => {

    if (err) {
        console.log(err);
        res.sendStatus(500);

      } else {
        res.json(model);
      }
    });
});


router.put('/:id', (req, res) => {

  Model
    .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .exec((err, model) => {

      if (err) {
        console.log(err);
        res.sendStatus(500);

      } else {
        res.json(model);
      }
    });
});


router.delete('/:id', (req, res) => {
  Model
    .findByIdAndRemove(req.params.id)
    .exec((err, response) => {
      if (err) { console.log(err); res.sendStatus(500); }
      else res.sendStatus(200);
    });
});


export default router;
