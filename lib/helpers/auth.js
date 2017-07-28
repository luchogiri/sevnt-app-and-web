
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt'
import ENV from '../../env';
import Model from '../schemas/accounts';

export const Secret = ENV.PASSPORT.SECRET;


passport.use(
  new Strategy({
      secretOrKey : Secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader() },
    
    (jwt_payload, done) => {
    
      Model.findOne({ _id: jwt_payload._id }, (err, user) => {
        
        if (err) return done(err, false);
        if (user) done(null, user);
        else done(null, false);
      });
    }
  )
);


export const Token = headers => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ');
    if (parted.length === 2) return parted[1];
    else return null;
  }
  else return null;
};


const Auth = () => {
  return passport.authenticate('jwt', { session: false });
};

export default Auth;
