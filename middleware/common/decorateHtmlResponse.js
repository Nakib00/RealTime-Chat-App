function decorateHtmlResponse(page_title) {
    return function (req, res, next) {
        res.locals.html = true;
        res.locals.title = `${page_title} | ${process.env.APP_NAME}`;
        res.locals.error = req.flash('error');
        res.locals.success = req.flash('success');
        res.locals.info = req.flash('info');
        next();
    };

}

module.exports = decorateHtmlResponse;