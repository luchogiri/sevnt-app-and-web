// @flow

import express from 'express';

// standard API router creator ///
//////////////////////////////////

const ModelRouter = (Model: Function) => {

  let router = express.Router();
  if (!Model) return router;


  // api endpoints
  router.get('/', (req, res) => {
    Model.find().exec((err, data) => {
      res.json(data);
    });
  });


  router.post('/', (req, res) => {
    var model = new Model(req.body);
    model.save((err, model) => {
      if (err) {
        console.log(err);
      } else {
        res.json(model);
      }
    });
  });


  router.get('/:id', (req, res) => {
    Model
      .findOne({ _id: req.params.id })
      .exec((err, model) => {
        if (err) {
          console.log(err);
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
        } else {
          res.json(model);
        }
      });
  });


  router.delete('/:id', (req, res) => {
    Model
      .findByIdAndRemove(req.params.id)
      .exec((err, response) => {
        if (err) { res.sendStatus(500); }
        else res.sendStatus(200);
      });
  });

  return router;
};

export default ModelRouter;
