// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import AdminAuth from '../../lib/actions/admin-auth';
import { Errors } from '../../lib/helpers/errors';

class LoginView extends Component {

  props: Object;
  state: Object;

  handleInput: Function;
  onSubmit: Function;
  onLoggedIn: Function;
  onLoggedError: Function;


  constructor(props: Object) {
    super(props);

    this.state = { email: '', pass: '' };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onLoggedIn = this.onLoggedIn.bind(this);
    this.onLoggedError = this.onLoggedError.bind(this);
  }

  onSubmit(event: Event) {
    event.preventDefault();
  
    this.setState({ error: undefined });
    let { email, pass } = this.state;
    
    this.props
      .dispatch( AdminAuth.Login({ email, pass }) )
      .then(this.onLoggedIn, this.onLoggedError);
  }

  onLoggedIn() {
    this.setState({ email: '', pass: '', error: undefined });
    browserHistory.push('/');
  }
  
  onLoggedError(err) {
    this.setState({ error: err });
  }

  handleInput(prop: string): Function {
    //@TODO type check this Event
    return (event: {target:{value:string}}) => {
      this.setState({ [prop]: event.target.value });
    };
  }

  render() {

    let defaultEmail = 'ej: hola@me.com';
    let error = this.state.error || {};

    return (
      <section className={'application-login'+ (!!error.code? ' application-login--error':'')} onSubmit={this.onSubmit}>
        <div className='application-login__container'>
          <img className='application-login__img' src='/img/application-logo.png' alt='Admin' />
          <form className='application-login__form'>
            <label htmlFor='email'>Usuario</label>
            <input id='email' type='text' onChange={this.handleInput('email')} placeholder={defaultEmail} />
            <label htmlFor='password'>Contraseña</label>
            <input id='password' type='password' onChange={this.handleInput('pass')} placeholder='&bull;&bull;&bull;&bull;&bull;' />
            <input type='submit' value='Ingresar' />
            <div style={{display: !!error?'block':'none'}}>
              <h4>
              {Errors.MISSING_FIELD == error.code? Errors.MISSING_FIELD_MSG: null}
              {Errors.INVALID_EMAIL == error.code? Errors.INVALID_EMAIL_MSG: null}
              {Errors.INVALID_PASSWORD == error.code? Errors.INVALID_PASSWORD_MSG: null}
              </h4>
            </div>
          </form>
        </div>
      </section>
    );
  }
}


const LoginContainer = connect(store => store.auth)(LoginView);
export default LoginContainer;
