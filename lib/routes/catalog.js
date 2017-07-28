// @flow

import express from 'express';

import City from '../schemas/cities';


let router = express.Router();

router.get('/', (req, res) => {

  City
    .find({}, '-_id -__v -published -deleted -created_at -updated_at')
    .exec(function(err, data) {

      let states = {};
      let statesAux = {};
      let countries = {};
      let response = {};

      data.map((item) => {

        states[item.state] = states[item.state] || [];
        statesAux[item.state] = statesAux[item.state] || [];
        statesAux[item.state].push(item);
        states[item.state].push(item.name);
      });


      Object.keys(statesAux).map((state) => {

        states[state].sort();
        countries[statesAux[state][0].country] = countries[statesAux[state][0].country] || {};
        countries[statesAux[state][0].country][state] = states[state];
      });

      response = Object.keys(countries).map((country) => {
        return countries[country];
      });

      res.json({ countries: countries });
    });
});

export default router;
