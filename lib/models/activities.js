// @flow

export default class Activity {
  
  constructor (data = {}) {
    
    this.name = data.name;
    
    this.start_date = data.start_date || '';
    // this.end_date = data.end_date;
    
    this.stock = data.stock || '';
    this.price = {};
    this.getPrice( data.price );
    
    this.errors = [];
  }
  
  getPrice (data = {}) {
    
    this.price.currency = 'ARS';
    this.price.value = data.value || '';
  }
  
  validate () {
    
    this.errors = [];
    
    ['name', 'stock'].forEach(prop => {
      if ( !this.validateNotEmpty(this[prop]) )
        this.errors.push({ name: prop, message: 'missing field' });
    });
    
    if (!this.validateNotEmpty(this.price.value))
      this.errors.push({ name: 'price value', message: 'missing field' });
    
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