
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ConfigActions from '../../lib/reducers/config';
import EventsActions from '../../lib/actions/events';


class EventsAddView extends Component {

  props: Object;
  state: Object;

  handleSubmit: Function;
  handleAdded: Function;
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
      station: '',
      author: 'Admin',
      date: moment().format('YYYY-MM-DDThh:mm:ss')+'.000Z',
      items: [{  }],
      aux: {
        focused: -1
      }
    };

    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdded = this.handleAdded.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubInput = this.handleSubInput.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleClearType = this.handleClearType.bind(this);
    this.handleItemAdded = this.handleItemAdded.bind(this);
    this.handleItemRemoved = this.handleItemRemoved.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleFocused = this.handleFocused.bind(this);
  }

  handleInput(prop: string): Function {
    //@TODO type check this Event
    return (event: {target:{value:string}}) => {
      this.setState({ [prop]: event.target.value });
    };
  }

  handleSubInput(index: string, prop: string): Function {
    //@TODO type check this Event
    return (event: {target:{value:string}}) => {
      // let item = this.state.items[index];
      // item[prop] = event.target.value;
      // if (prop == 'group') item.other = item.type = item.scientific = '';
      // if (prop == 'value') item.value = item.value.replace(',','.');
      // this.setState({ items: [ ...this.state.items.slice(0, index), item, ...this.state.items.slice(index + 1) ] });
    };
  }

  handleTypeChange(index) {
    return (event: {target:{value:string}}) => {
      let item = this.state.items[index];
      // if (event.target.value == 'other') {
      //   item.other = true;
      //   item.type = '';
      //   item.scientific = '';
      // }
      // else {
      //   item.type = event.target.value.split('-')[0];
      //   item.scientific = event.target.value.split('-')[1];
      // }
      // this.setState({ items: [ ...this.state.items.slice(0, index), item, ...this.state.items.slice(index + 1) ] });
    };
  }

  handleClearType(index) {
    return (event: Event) => {
      let item = this.state.items[index];
      // item.other = false;
      // item.type = '';
      // item.scientific = '';
      // this.setState({ items: [ ...this.state.items.slice(0, index), item, ...this.state.items.slice(index + 1) ] });
    };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    let toSend = [];
    let error = false;
    this.state.error = false;
    this.state.items.forEach( (item, index) => {
      // if (!item.group || !item.type || !item.scientific || !item.value) item.error = error = true;
      // else item.error = false;
      // if (item.other) toSend.push({ group: item.group, scientific: item.scientific, name: item.type });
      // this.setState({ items: [ ...this.state.items.slice(0, index), item, ...this.state.items.slice(index + 1) ] });
    });
    // if (!this.state.station) { this.state.error = true; return false; }
    // if (error) return false;
    // this.props.dispatch( ConfigActions.AddTypes(toSend) );
    this.props.dispatch( EventsActions.Create(this.state) ).then( this.handleAdded );
  }

  handleAdded(res) {
    browserHistory.push('/events');
  }

  handleItemAdded(event) {
    event.preventDefault();
    let initialStateItem = { };
    this.setState({ items: [...this.state.items, initialStateItem] });
    return false;
  }

  handleItemRemoved(index) {
    return () => {
      this.setState({ items: [ ...this.state.items.slice(0, index), ...this.state.items.slice(index + 1) ]});
    };
  }

  getDate() {
    return moment(this.state.date);
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
        <h3 className='measurements-add__title'>Agregar un evento</h3>

        <form onSubmit={this.handleSubmit}>
          <div className='measurements-add__form'>

            <div className='measurements-add__column'>
              {/*<label htmlFor='station'>Estación Aerobiológica</label>*/}
              {/*<select id='station' value={this.state.station} onChange={this.handleInput('station')} style={this.state.error?{borderColor:'red'}:null}>*/}
                {/*<option value='' disabled>Seleccionar</option>*/}
                {/*{this.props.config.stations.map(station => <option key={station.code} value={station.code}>{station.name}</option>)}*/}
              {/*</select>*/}
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
            </div>
          </div>


          <div className='measurements__items'>
            <div className='measurements-add__form measurements__items-add__form'>
              {/*<div className='measurements-add__column'>*/}
                {/*<label>Grupo</label>*/}
              {/*</div>*/}
              {/*<div className='measurements-add__column__large'>*/}
                {/*<label>Especie</label>*/}
              {/*</div>*/}
              {/*<div className='measurements-add__column__single'>*/}
                {/*<label>Medición (g/m³)</label>*/}
              {/*</div>*/}
            </div>

            {this.state.items.map((item, index) => (
              <div className='measurements-add__form measurements__items-add__form__row' key={index}>
                {/*<div className='measurements-add__column'>*/}
                  {/*<select id={'item'+index+'group'} value={item.group} onChange={this.handleSubInput(index, 'group')} style={item.error? {borderColor: 'red'}:null}>*/}
                    {/*<option value='' disabled>seleccionar</option>*/}
                    {/*{this.props.config.groups.sort((a,b) => a.name > b.name ).map(group => <option key={group.name} value={group.name}>{group.name}</option>)}*/}
                  {/*</select>*/}
                {/*</div>*/}

                {/*<div className='measurements-add__column__large' style={item.other?{display:'none'}:null}>*/}
                  {/*<select id={'item'+index+'type'} value={item.type+'-'+item.scientific} onChange={this.handleTypeChange(index)} style={item.error? {borderColor: 'red'}:null}>*/}
                    {/*<option value='-' disabled>seleccionar</option>*/}
                    {/*{this.props.config.types.sort((a,b) => a.scientific > b.scientific).map(type => {*/}
                      {/*if (type.group == item.group)*/}
                        {/*return <option key={type.name} value={type.name+'-'+type.scientific}>{type.scientific} - {type.name}</option>*/}
                    {/*})}*/}
                    {/*<option value='other'>otro</option>*/}
                  {/*</select>*/}
                {/*</div>*/}

                {/*<div className='measurements-add__column__large' style={item.other?null:{display:'none'}}>*/}
                  {/*<input id={'item'+index+'scientific'} className="item__input__mid" type='text' value={item.scientific} onChange={this.handleSubInput(index, 'scientific')} placeholder='Nom Científico' style={item.error? {borderColor: 'red'}:null} />*/}
                  {/*<input id={'item'+index+'type'} className="item__input__mid" type='text' value={item.type} onChange={this.handleSubInput(index, 'type')} placeholder='Nom Popular' style={item.error? {borderColor: 'red'}:null} />*/}
                  {/*<div className="item__input__return fa fa-times-circle" onClick={this.handleClearType(index)}></div>*/}
                {/*</div>*/}

                {/*<div className='measurements-add__column__single'>*/}
                  {/*<input id={'item'+index+'value'} type='text' value={item.value} onChange={this.handleSubInput(index, 'value')} placeholder='0.00' style={{textAlign:'center', borderColor:item.error?'red':'#d4d4d4'}} />*/}
                {/*</div>*/}

                {/*<div className='activities__delete' onClick={this.handleItemRemoved(index)}>*/}
                  {/*<div className='fa fa-minus-circle'></div>*/}
                {/*</div>*/}
              </div>)
            )}

            <div className='activities__add'>
              <a href='#' className='fa fa-plus' onClick={this.handleItemAdded}></a>
            </div>
          </div>

          <div className='measurements-add__form'>
            <div className='measurements-add__column'></div>
            <div className='measurements-add__column'>
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
