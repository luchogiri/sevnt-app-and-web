// @flow

export default class Reservation {
  
  constructor (data = {}) {
    
    this.account = data.account;
    this.event = new Event(data.event);
    this.tickets = this.getTickets( data.tickets );
    this.payment = this.getPaymentInfo( data.payment );
  }
  
  
  getTickets (data = []) {
    
    if (!(data instanceof Array)) return;
    this.tickets = data.map(item => new Ticket(item));
  }
  
  getPaymentInfo (data = {}) {
    
    if (!(data instanceof Object)) return {};
    
  }
}


class Event {
  
  constructor (data = {}) {
    
    this.name = data.name || '';
    this.category = data.category || '';
    this.organizer = data.organizer || '';
    
    this.start_date = data.start_date || '';
    this.end_date = data.end_date || '';
    
    this.img = data.img || '';
    this.venue = data.venue || '';
    // this.country = data.country;
    // this.state = data.state;
    // this.address = data.address;
    
    this.errors = [];
  }
  
  
  
  validate () {
    
    this.errors = [];
    
    ['name', 'category', 'start_date', 'end_date', 'venue'].forEach(prop => {
      if ( !this.validateNotEmpty(this[prop]) )
        this.errors.push({ name: prop, message: 'missing field' });
    });
    
    if (!this.tickets.length)
      this.errors.push({ name: 'acitivities', message: 'missing field' });
    
    if (this.errors.length) throw this.errors;
  }
  
  validateNotEmpty (item) {
    return !!item;
  }
  
  lean() {
    let { errors, ...props } = this;
    return {...props};
  }
}