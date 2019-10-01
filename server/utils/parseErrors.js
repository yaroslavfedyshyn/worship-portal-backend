module.exports = (err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {

        res.status(422).json({
            message: err.error.message,
            details: err.error.details
        })
    } else {
        next(err);
    }
};
