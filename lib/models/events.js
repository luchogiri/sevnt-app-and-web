// @flow

import Activity from './activities';

export default class Event {
  
  constructor (data = {}) {
    
    this.name = data.name || '';
    this.category = data.category || '';
    this.organizer = data.organizer || '';
    
    this.start_date = data.start_date || '';
    this.end_date = data.end_date || '';
    
    this.img = data.img || '';
    
    this.venue = data.venue || '';
    this.address = data.address || '';
    this.city = data.city || '';
    // this.country = data.country;
    // this.state = data.state;
  
    this.description = data.description || '';
    this.subway_lines = data.subway_lines || '';
    this.bus_lines = data.bus_lines || '';
    
    this.activities = [];
    this.getActivities( data.activities );
  
    this.errors = [];
  }
  
  getActivities (data = []) {
    
    if (!(data instanceof Array)) return;
    this.activities = data.map(item => new Activity(item));
  }
  
  validate () {
    
    this.errors = [];
    
    ['name', 'category', 'start_date', 'end_date', 'venue'].forEach(prop => {
      if ( !this.validateNotEmpty(this[prop]) )
        this.errors.push({ name: prop, message: 'missing field' });
    });
    
    if (!this.activities.length)
      this.errors.push({ name: 'acitivities', message: 'missing field' });
    
    if (this.errors.length) throw this.errors;
  }
  
  validateNotEmpty (item) {
    return !!item;
  }
  
  lean() {
    let { errors, ...props } = this;
    return props;
  }
}