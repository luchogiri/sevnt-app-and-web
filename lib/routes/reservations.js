
import express from 'express';
import jwt from 'jwt-simple';
import moment from 'moment';
import Auth, { Token, Secret } from '../helpers/auth';

import Model from '../schemas/reservations';
import Account from '../schemas/accounts';
import Event from '../schemas/events';
import Reservation from '../schemas/reservations';


const router = express.Router();


// api endpoints
router.get('/', (req, res) => {
  
  let query = {};
  let offset = req.query.offset || 0;
  let limit = Math.floor( !isNaN(req.query.limit) && req.query.limit ) || 20;
  limit = limit <= 50 ? limit : 20;
  
  Promise.all([
    
    Model.find(query).count(),
    Model
      .find(query)
      .sort('-created_at')
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


router.post('/', Auth(), (req, res) => {
  
  const token = Token(req.headers);
  
  if (token) {
    
    const decoded = jwt.decode(token, Secret);
  
    Account
      .findOne({ _id : decoded._id }, '-__v -published -deleted -created_at -updated_at -password')
      .exec((err, user) => {

        if (err) throw err;
        if (!user)
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
          
        else {
          
          let data = req.body;
          
          // reservation validations
          if (!data.tickets.length)
            res.json({ success: false, msg: 'No tickets given.' });
          
          let reservation = new Model(req.body);
          reservation.account = user._id;
          reservation.save(err => {
            if (err)
              return res.json({success: false, msg: 'Reservation failed.', err});
            
            if (user.reservations.indexOf( reservation._id ) == -1) {
              user.reservations.push( reservation._id );
              user.save(() => {});
            }
  
            Event
              .findOne({ _id : reservation.event._id })
              .exec((errEv, ev) => {
                reservation.tickets.forEach(t => {
                  ev.activities.forEach(a => {
                    if (a._id == t._id) a.sold++;
                  })
                });
              });
            
            res.json(reservation);
          });
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



router.get('/:id/sync', Auth(), (req, res) => {
  
  Reservation
    .find({ 'event._id' : req.params.id })
    .exec((err, reservations) => {
      
      if (err) { console.log(err); res.sendStatus(500); }
      res.json(reservations);
    });
});


router.post('/:id/accreditation', Auth(), (req, res) => {
  
  Reservation
    .find({ 'event._id' : req.params.id, 'tickets.document_number': req.body.document_number })
    .exec((err, reservations) => {
  
      if (err) { console.log(err); res.sendStatus(500); }
      if (!reservations.length) return res.status(403).send({success: false, msg: 'Unauthorized'});
      let authorized = false;
      let theTicket;
      
      try {
        reservations.forEach(reservation => {
          reservation.tickets.forEach(ticket => {
            if (!authorized && !ticket.accredited_at) {
              authorized = true;
              theTicket = ticket;
              ticket.accredited_at = moment().format('YYYY-MM-DDTHH:mm:ss.000Z');
              reservation.save();
            }
          });
        });
  
        if (!authorized) return res.json({ success: false, msg: 'Unauthorized' });
        else return res.json({ success: true, data: theTicket });
      }
      
      catch(err) {
        console.log(err);
      }
    });
});

export default router;