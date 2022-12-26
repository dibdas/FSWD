// will use this middleware before it goes to the auth router

const logger = (req, res, next) => {
  console.log(`auth log middleware`);
  //if you dont call the next() inside the middleware , api call will be stuck over there,
  // api call will looping over there , it wont move forward
  next();
};
module.exports = { logger };
