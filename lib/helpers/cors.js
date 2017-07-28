// @flow

const CORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-ApiKey, content-type");
  next();
};

export default CORS;