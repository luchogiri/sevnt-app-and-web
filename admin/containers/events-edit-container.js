
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ConfigActions from '../../lib/actions/config';
import EventsActions from '../../lib/actions/events';
import EventsService from '../../lib/services/events';


class EventsAddView extends Component {

  props: Object;
  state: Object;

  handleSubmit: Function;
  handleAdded: Function;
  handleDeleted: Function;
  handleInput: Function;
  handleSubInput: Function;
  handleTypeChange: Function;
  handleClearType: Function;
  handleItemAdded: Function;
  handleItemRemoved: Function;
  getDate: Function;
  onDateChange: Function;

  constructor(props: Object) {
    super(props);

    let initialState = {
      activities: [],
      aux: {
        focused: -1
      }
    };

    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdded = this.handleAdded.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubInput = this.handleSubInput.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.handleItemRemoved = this.handleItemRemoved.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleFocused = this.handleFocused.bind(this);
  }

  componentDidMount() {
    EventsService.Retrieve({ _id: this.props.params.id }).then( res => {
      this.setState({ ...res });
    });
  }

  handleInput(prop: string): Function {
    //@TODO type check this Event
    return (event: {target:{value:string}}) => {
      this.setState({ [prop]: event.target.value });
    };
  }

  handleSubInput(index: string, prop: string, subprop: string): Function {
    //@TODO type check this Event
    return (event: {target:{value:string}}) => {
      let item = this.state.activities[index];
      if (subprop)
        item[prop][subprop] = event.target.value;
      else
        item[prop] = event.target.value;
      this.setState({ activities: [ ...this.state.activities.slice(0, index), item, ...this.state.activities.slice(index + 1) ] });
    };
  }


  handleSubmit(event: Event) {
    event.preventDefault();
    let toSend = [];
    let error = false;
    this.state.error = false;
    this.state.activities.forEach( (item, index) => {});
    // this.props.dispatch( EventsActions.Update( this.state ) ).then(this.handleAdded);
    this.handleAdded();
  }

  handleAdded(res) {
    browserHistory.push('/events');
  }

  handleDeleted() {

  }

  handleItemAdded(event) {
    event.preventDefault();
    let initialStateItem = { };
    this.setState({ activities: [...this.state.activities, initialStateItem] });
    return false;
  }

  handleItemRemoved(index) {
    return () => {
      this.setState({ activities: [ ...this.state.activities.slice(0, index), ...this.state.activities.slice(index + 1) ]});
    };
  }

  getDate() {
    return moment(this.state.start_date);
  }

  onDateChange(date) {
    this.setState({ date: date.format('YYYY-MM-DDThh:mm:ss')+'.000Z' });
  }

  onFocusChange(index) {
    return ({ focused }) => {
      this.setState({ aux: { focused: !!focused ? index : -1 } });
    }
  }

  handleFocused(index) {
    return this.state.aux.focused == index;
  }

  render() {
    return (
      <section className='measurements-add__container'>
        <h3 className='measurements-add__title'>
          <Link to='/events'><i className="fa fa-arrow-left"></i> Volver</Link>
          Editar un evento
        </h3>

        <form onSubmit={this.handleSubmit}>
          <div className='measurements-add__form'>

            <div className='measurements-add__column'>
              <label htmlFor='name'>Name</label>
              <input id='name' value={this.state.name} onChange={this.handleInput('name')} style={this.state.error?{borderColor:'red'}:null} />

              <label htmlFor='category'>Category</label>
              <select id='station' value={this.state.category} onChange={this.handleInput('category')} style={this.state.error?{borderColor:'red'}:null}>
                <option value='' disabled>Seleccionar</option>
                {['MUSIC', 'THEATRE', 'FASHION', 'SPIRITUALITY', 'COURSES', 'PROFESSIONAL', 'SPORTS', 'EDUCATION',
                  'PARTIES', 'EXHIBITIONS AND MUSEUMS', 'INFANTILE', 'RECOMMENDED'].map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>

            <div className='measurements-add__column'>
              <label htmlFor='date'>Fecha</label>
              <div className='measurements-add__date'>
                <DatePicker
                  id={'date'}
                  dateFormat="DD/MM/YYYY"
                  selected={this.getDate()}
                  onChange={this.onDateChange} />
              </div>

              <label htmlFor='name'>Venue</label>
              <input id='name' value={this.state.venue} onChange={this.handleInput('venue')} style={this.state.error?{borderColor:'red'}:null} />
            </div>
          </div>


          <div className='measurements__items'>
            <div className='measurements-add__form measurements__items-add__form'>
              <div className='measurements-add__column'>
                <label>Name</label>
              </div>
              <div className='measurements-add__column__large'>
                <label>Stock</label>
              </div>
              <div className='measurements-add__column__single'>
                <label>Price</label>
              </div>
            </div>

            {this.state.activities.map((item, index) => (
              <div className='measurements-add__form measurements__items-add__form__row' key={index}>
                <div className='measurements-add__column'>
                  <input id='name' value={item.name} onChange={this.handleSubInput(index, 'name')} style={this.state.error?{borderColor:'red'}:null} />
                </div>

                <div className='measurements-add__column__large'>
                  <input id='stock' value={item.stock} onChange={this.handleSubInput(index, 'stock')} style={this.state.error?{borderColor:'red'}:null} />
                </div>

                <div className='measurements-add__column__single'>
                  <input id='stock' value={item.price.value} onChange={this.handleSubInput(index, 'price', 'value')} style={this.state.error?{borderColor:'red'}:null} />
                </div>

                <div className='activities__delete' onClick={this.handleItemRemoved(index)}>
                  <div className='fa fa-minus-circle'></div>
                </div>
              </div>)
            )}

            {/*<div className='activities__add'>*/}
              {/*<a href='#' className='fa fa-plus' onClick={this.handleItemAdded}></a>*/}
            {/*</div>*/}
          </div>

          <div className='measurements-add__form'>
            <div className='measurements-add__column'></div>
            <div className='measurements-add__column'>
              <buttom onClick={this.handleDelete}>Eliminar</buttom>
              <input type='submit' value='Guardar' />
            </div>
          </div>
        </form>
      </section>
    );
  }
};

const EventsAddContainer: ReactClass<{}> = connect(
  (store) => store
)(EventsAddView);

export default EventsAddContainer;
