
// @flow

export const Errors = {

  MISSING_FIELD: '40001000',
  MISSING_FIELD_MSG: 'missing mandatory field',

  INVALID_EMAIL: '40001001',
  INVALID_EMAIL_MSG: 'invalid value for field email',

  INVALID_PASSWORD: '40001002',
  INVALID_PASSWORD_MSG: 'invalid value for field password',
};

export const ProviderError = (code:string = '0', msg:string, reasons?: Array<ProviderError>) => {

  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = msg;
  this.code = code;
  if (reasons.length)
    this.reasons = reasons;
}
