const createError = require('http-errors');
const validator = require('validator');

// 404 not found handling
function notFoundHandler(req, res, next) {
    next(createError(404, 'Not Found'));
}

// default error handling
function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {
        message: err.message
    };
    res.status(err.status || 500);

    if (res.locals.html) {
        res.render('error', {
            title: 'Error Page',
        });
    } else {
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    errorHandler,
};