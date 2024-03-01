// Middleware functions written in Express related to error handling

exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
  };